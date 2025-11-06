import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { useCallback, useRef, useState } from "react";

import { useAPIConfig } from "@/core/components/APIProvider";
import type { ApiStatus, CacheEntry, RequestOptions } from "@/core/domains";

/** Shared in-memory cache (global for all hook instances) */
export const memoryCache = new Map<string, CacheEntry>();

/**
 * Main reusable hook for CRUD operations with caching, TTL, and per-endpoint config.
 */
export function useBaseAPI<T = any>(
  axiosArg?: AxiosInstance,
  endpoint?: string
) {
  const {
    axiosInstance,
    defaultTTL = 60_000,
    defaultPersistent = null,
    defaultUseCache = false,
    autoInvalidateOnMutate = true,
    endpoints = {},
  } = useAPIConfig();

  const axios = axiosArg ?? axiosInstance;
  if (!axios)
    throw new Error(
      "Axios instance not provided. Pass one into useBaseAPI() or via APIProvider."
    );

  const endpointConfig = endpoint ? endpoints[endpoint] || {} : {};

  const [data, setData] = useState<T | T[] | null>(null);
  const [status, setStatus] = useState<ApiStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const lastRequest = useRef<() => Promise<any> | null>(null);

  const isLoading = status === "pending" && !data;
  const isFetching = status === "pending" && !!data;
  const isSuccess = status === "success";
  const isError = status === "error";

  /** Helper to build a unique cache key */
  const buildKey = (url: string, config?: AxiosRequestConfig) => {
    const params = config?.params ? JSON.stringify(config.params) : "";
    return `${url}?${params}`;
  };

  /** --- Core request handler --- */
  const handleRequest = useCallback(
    async <R>(
      key: string,
      request: () => Promise<R>,
      options?: RequestOptions<R>
    ): Promise<R> => {
      const useCache =
        options?.useCache ?? endpointConfig.useCache ?? defaultUseCache;

      const cacheTTL =
        options?.cacheTTL ?? endpointConfig.cacheTTL ?? defaultTTL;

      const persistent =
        options?.persistent ?? endpointConfig.persistent ?? defaultPersistent;

      const forceRefresh = options?.forceRefresh ?? false;

      // 1️⃣ Try in-memory cache
      if (useCache && !forceRefresh && memoryCache.has(key)) {
        const cache = memoryCache.get(key)!;
        const expired = cache.expiry && Date.now() > cache.expiry;
        if (!expired) {
          setData(cache.data);
          setStatus("success");
          options?.onSuccess?.(cache.data);
          return cache.data;
        }
        memoryCache.delete(key);
      }

      // 2️⃣ Fetch new data
      setStatus("pending");
      setError(null);

      try {
        const res = await request();
        setData(res as any);
        setStatus("success");
        options?.onSuccess?.(res);

        // Save in-memory cache
        const expiry = cacheTTL ? Date.now() + cacheTTL : null;
        memoryCache.set(key, { data: res, expiry, persistent });

        return res;
      } catch (err: any) {
        setStatus("error");
        setError(err.message || "Unexpected error");
        options?.onFail?.(err);
        throw err;
      }
    },
    [endpointConfig, defaultUseCache, defaultPersistent, defaultTTL]
  );

  /** --- CRUD methods --- */
  const getAll = useCallback(
    async (config?: AxiosRequestConfig, options?: RequestOptions<T[]>) => {
      if (!endpoint) throw new Error("Endpoint not provided");
      const key = buildKey(endpoint, config);
      lastRequest.current = () => getAll(config, options);
      return handleRequest(
        key,
        async () => (await axios.get<T[]>(endpoint, config)).data,
        options
      );
    },
    [axios, endpoint, handleRequest]
  );

  const getById = useCallback(
    async (
      id: number | string,
      config?: AxiosRequestConfig,
      options?: RequestOptions<T>
    ) => {
      if (!endpoint) throw new Error("Endpoint not provided");
      const url = `${endpoint}/${id}`;
      const key = buildKey(url, config);
      lastRequest.current = () => getById(id, config, options);
      return handleRequest(
        key,
        async () => (await axios.get<T>(url, config)).data,
        options
      );
    },
    [axios, endpoint, handleRequest]
  );

  const create = useCallback(
    async (
      body: any,
      config?: AxiosRequestConfig,
      options?: RequestOptions<T>
    ) => {
      if (!endpoint) throw new Error("Endpoint not provided");
      const key = buildKey(endpoint, config);
      const result = await handleRequest(
        key,
        async () => (await axios.post<T>(endpoint, body, config)).data,
        options
      );
      const invalidate =
        endpointConfig.autoInvalidateOnMutate ?? autoInvalidateOnMutate;
      if (invalidate) memoryCache.clear();
      return result;
    },
    [axios, endpoint, handleRequest, autoInvalidateOnMutate, endpointConfig]
  );

  const update = useCallback(
    async (
      id: number | string,
      body: any,
      config?: AxiosRequestConfig,
      options?: RequestOptions<T>
    ) => {
      if (!endpoint) throw new Error("Endpoint not provided");
      const url = `${endpoint}/${id}`;
      const key = buildKey(url, config);
      const result = await handleRequest(
        key,
        async () => (await axios.put<T>(url, body, config)).data,
        options
      );
      const invalidate =
        endpointConfig.autoInvalidateOnMutate ?? autoInvalidateOnMutate;
      if (invalidate) memoryCache.clear();
      return result;
    },
    [axios, endpoint, handleRequest, autoInvalidateOnMutate, endpointConfig]
  );

  const remove = useCallback(
    async (
      id: number | string,
      config?: AxiosRequestConfig,
      options?: RequestOptions<T>
    ) => {
      if (!endpoint) throw new Error("Endpoint not provided");
      const url = `${endpoint}/${id}`;
      const key = buildKey(url, config);
      const result = await handleRequest(
        key,
        async () => (await axios.delete<T>(url, config)).data,
        options
      );
      const invalidate =
        endpointConfig.autoInvalidateOnMutate ?? autoInvalidateOnMutate;
      if (invalidate) memoryCache.clear();
      return result;
    },
    [axios, endpoint, handleRequest, autoInvalidateOnMutate, endpointConfig]
  );

  /** Re-run last successful request */
  const refresh = useCallback(async () => {
    if (lastRequest.current) return lastRequest.current();
  }, []);

  /** Reset local state */
  const reset = useCallback(() => {
    setStatus("idle");
    setData(null);
    setError(null);
  }, []);

  return {
    data,
    error,
    status,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    getAll,
    getById,
    create,
    update,
    delete: remove,
    refresh,
    reset,
  };
}
