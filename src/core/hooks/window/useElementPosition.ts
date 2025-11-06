import { useState } from "react";
import { useEventListener } from "../dom/useEventListener";

/**
 * @param selectorString - CSS selector string to target a specific element (optional)
 * @returns object {top, left, isElementInView}
 * @description Tracks the position of a specific element relative to the viewport and determines if it's visible. Updates on scroll events
 * @example
 * ```tsx
 * import { useElementPosition } from "@/core/hooks/window";
 *
 * export function MyComponent() {
 *   const position = useElementPosition('.target-element');
 *
 *   return (
 *     <div>
 *       <p>Element visible: {position.isElementInView ? 'Yes' : 'No'}</p>
 *       <p>Position - Top: {position.top}px, Left: {position.left}px</p>
 *       <div className="target-element" style={{ marginTop: '2000px' }}>
 *         Target section
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
export function useElementPosition(selectorString?: string): {
  top: number;
  left: number;
  isElementInView: boolean;
} {
  const [elementPosition, setElementPosition] = useState({
    top: 0,
    left: 0,
    isElementInView: false,
  });
  const element = selectorString
    ? document.querySelector(selectorString)
    : null;
  const rect = element ? element.getBoundingClientRect() : null;

  const isElementInView =
    rect &&
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  useEventListener("scroll", () => {
    if (!element || !rect) return;
    setElementPosition({
      ...elementPosition,
      top: rect.top,
      left: rect.left,
      isElementInView: isElementInView || false,
    });
  });

  return elementPosition;
}
