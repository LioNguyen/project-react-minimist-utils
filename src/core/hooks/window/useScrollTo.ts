/**
 * @returns object {scrollToElement, scrollTo, scrollToTop, scrollToBottom}
 * @description Provides utility functions to scroll to specific elements or positions on the page with smooth behavior. Returns an object with multiple scroll methods
 * @example
 * ```tsx
 * import { useScrollTo } from "@/core/hooks/window";
 *
 * export function MyComponent() {
 *   const { scrollToElement, scrollToTop, scrollToBottom } = useScrollTo();
 *   const targetRef = useRef<HTMLDivElement>(null);
 *
 *   return (
 *     <div>
 *       <button onClick={() => scrollToElement(targetRef.current)}>
 *         Scroll to target
 *       </button>
 *       <button onClick={scrollToTop}>Back to top</button>
 *       <button onClick={scrollToBottom}>Jump to bottom</button>
 *       <div ref={targetRef} style={{ marginTop: '1000px' }}>
 *         Target section
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
export function useScrollTo() {
  /**
   * Scrolls to a specific DOM element smoothly
   * @param element - The HTML element to scroll to
   */
  const scrollToElement = (element: HTMLElement | null) => {
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * Scrolls to a specific position (top and left coordinates) on the page
   * @param top - Y-axis position (default: 0)
   * @param left - X-axis position (default: 0)
   */
  const scrollTo = (top?: number, left?: number) => {
    if (!window) return;
    window.scrollTo({
      top: top || 0,
      left: left || 0,
      behavior: "smooth",
    });
  };

  /**
   * Scrolls to the top of the page
   */
  const scrollToTop = () => {
    if (!window) return;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  /**
   * Scrolls to the bottom of the page
   */
  const scrollToBottom = () => {
    if (!window || !document) return;
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return { scrollToElement, scrollTo, scrollToTop, scrollToBottom };
}
