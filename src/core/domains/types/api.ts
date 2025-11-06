import type { AxiosInstance, AxiosRequestConfig } from "axios";

export type ApiStatus = "idle" | "pending" | "success" | "error";

/**
 * Options available for individual API requests.
 */
export interface RequestOptions<R = any> {
  onSuccess?: (data: R) => void;
  onFail?: (error: any) => void;
  useCache?: boolean;
  forceRefresh?: boolean;
  cacheTTL?: number; // ms
  persistent?: "session" | "local";
}

/**
 * Per-endpoint configuration overrides.
 */
export interface EndpointConfig {
  useCache?: boolean;
  persistent?: "session" | "local" | null;
  autoInvalidateOnMutate?: boolean;
  cacheTTL?: number;
}

/**
 * Global API provider configuration.
 */
export interface APIConfig {
  axiosInstance?: AxiosInstance;
  defaultTTL?: number;
  defaultPersistent?: "session" | "local" | null;
  defaultUseCache?: boolean;
  autoInvalidateOnMutate?: boolean;
  endpoints?: Record<string, EndpointConfig>;
}

/**
 * Internal cache entry structure.
 */
export interface CacheEntry {
  data: any;
  expiry: number | null;
  persistent?: "session" | "local" | null;
}

/**
 * Type for passing standard Axios config.
 */
export type APIRequestConfig = AxiosRequestConfig;
