import * as CONSTANTS from "@/constants";
import * as Hooks from "@/core/hooks";
import * as Utils from "@/core/utils";

/* ---------- Constants Export ---------- */
export { CONSTANTS };

/* ---------- Hooks Export ---------- */
export { Hooks };

// Export all hooks individually
export { useToggle } from "@/core/hooks/useToggle";
export { useDebounce, useDebouncedCallback } from "@/core/hooks/debounce";
export { useDeviceDetect } from "@/core/hooks/useDevice";
export { useElementOnScreen, useEventListener } from "@/core/hooks/dom";
export { usePrevious } from "@/core/hooks/usePrevious";
export { useLocalStorage, useSessionStorage } from "@/core/hooks/useStorage";
export {
  useScrolling,
  useScrollTo,
  useElementPosition,
  useWindowSize,
  useResponsive,
  useBreakpoint,
  useMediaQuery,
} from "@/core/hooks/window";
export { useAppContext } from "@/core/hooks/useAppContext";
export { useBaseAPI, memoryCache } from "@/core/hooks/api/useBaseAPI";

/* ---------- Components Export ---------- */
export { APIProvider, useAPIConfig } from "@/core/components/APIProvider";

/* ---------- Types Export ---------- */
export type {
  ApiStatus,
  RequestOptions,
  EndpointConfig,
  APIConfig,
  CacheEntry,
  APIRequestConfig,
} from "@/core/domains";

/* ---------- Utils Export ---------- */
export { Utils };

// Export all utils individually
export { cn } from "@/core/utils/cn";
export { fetchData } from "@/core/utils/api";
export { handleArray, groupListByField, sortList } from "@/core/utils/array";
export { downloadFile, DOWNLOAD_LINK_SAMPLE } from "@/core/utils/data";
export { numberWithComma } from "@/core/utils/number";
export { lazyLoad } from "@/core/utils/lazyLoad";
export {
  checkWordCount,
  convertHexToRgb,
  convertStyleObjectToString,
  sanitizeHTML,
  trimText,
} from "@/core/utils/string";
