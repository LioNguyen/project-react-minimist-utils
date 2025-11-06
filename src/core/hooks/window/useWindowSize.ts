import { useState } from "react";
import { useEventListener } from "../dom/useEventListener";

/**
 * @returns object {width, height, scrollX, scrollY}
 * @description Provides real-time window dimensions and scroll position, useful for responsive design and tracking scroll state. Updates on both resize and scroll events. SSR-safe with default fallback values.
 * @example
 * ```tsx
 * import { useWindowSize } from "@/core/hooks/window";
 *
 * export function MyComponent() {
 *   const { width, height, scrollY } = useWindowSize();
 *
 *   return (
 *     <div>
 *       <p>Window size: {width}x{height}px</p>
 *       <p>Scrolled: {scrollY}px</p>
 *       {width < 768 && <p>Mobile view</p>}
 *       {width >= 768 && <p>Desktop view</p>}
 *     </div>
 *   );
 * }
 * ```
 */
export function useWindowSize(): {
  height: number;
  width: number;
  scrollX: number;
  scrollY: number;
} {
  const [windowSize, setWindowSize] = useState({
    height: typeof window !== "undefined" ? window.innerHeight : 768,
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    scrollX: typeof window !== "undefined" ? window.scrollX : 0,
    scrollY: typeof window !== "undefined" ? window.scrollY : 0,
  });

  useEventListener("resize", () => {
    setWindowSize({
      ...windowSize,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  useEventListener("scroll", () => {
    setWindowSize({
      ...windowSize,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
  });

  return windowSize;
}
