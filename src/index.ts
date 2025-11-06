import * as CONSTANTS from "@/constants";
import * as Hooks from "@/core/hooks";
import * as Utils from "@/core/utils";

/* ---------- Constants Export ---------- */
export { CONSTANTS };

/* ---------- Hooks Export ---------- */
export { Hooks };

// Export all hooks individually
export { useToggle } from "@/core/hooks/useData";
export { useDebounce, useDebouncedCallback } from "@/core/hooks/useDebounce";
export { useDeviceDetect } from "@/core/hooks/useDevice";
export { useElementOnScreen, useEventListener } from "@/core/hooks/useDom";
export { usePrevious } from "@/core/hooks/usePrevious";
export { useLocalStorage, useSessionStorage } from "@/core/hooks/useStorage";
export {
  useScrolling,
  useScrollTo,
  useElementPosition,
  useWindowSize,
} from "@/core/hooks/useWindow";

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
