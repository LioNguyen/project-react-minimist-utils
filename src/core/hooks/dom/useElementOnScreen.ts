import { useEffect, useState } from "react";

/**
 * @param ref - A React ref object pointing to a DOM element to observe
 * @param rootMargin - Optional margin around the root element (default: "0px")
 * @returns boolean - True when the element is visible in the viewport, false otherwise
 * @description Uses Intersection Observer API to detect when a specific DOM element comes into view or goes out of sight
 * @example
 * ```tsx
 * import { useElementOnScreen } from "@/core/hooks/dom";
 *
 * export function MyComponent() {
 *   const ref = useRef(null);
 *   const isVisible = useElementOnScreen(ref);
 *
 *   return (
 *     <div ref={ref}>
 *       {isVisible && <p>Element is visible in the viewport!</p>}
 *     </div>
 *   );
 * }
 * ```
 */
export function useElementOnScreen<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  rootMargin = "0px"
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isVisible;
}
