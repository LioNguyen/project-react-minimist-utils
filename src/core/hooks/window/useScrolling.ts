import { useState } from "react";
import { useEventListener } from "../dom/useEventListener";

/**
 * @returns boolean - True when the window is scrolled down (scrollY > 0), false otherwise
 * @description Detects whether the window is currently being scrolled or if the page is at the top. Automatically updates on scroll events
 * @example
 * ```tsx
 * import { useScrolling } from "@/core/hooks/window";
 *
 * export function MyComponent() {
 *   const isScrolling = useScrolling();
 *
 *   return (
 *     <div className={isScrolling ? 'scrolled' : 'at-top'}>
 *       {isScrolling ? "Page is scrolled!" : "At the top"}
 *     </div>
 *   );
 * }
 * ```
 */
export function useScrolling(): boolean {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollingHandler = () => {
    setIsScrolling(window.scrollY > 0);
  };

  useEventListener("scroll", scrollingHandler);

  return isScrolling;
}
