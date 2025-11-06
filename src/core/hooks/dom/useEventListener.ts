import { useEffect, useRef } from "react";

/**
 * @param eventType - The type of event to listen for (e.g., 'click', 'scroll', 'resize')
 * @param callback - The function to execute when the event fires
 * @returns void
 * @description Attaches an event listener to the window object and automatically cleans up on unmount. Useful for handling window events with automatic cleanup and avoiding memory leaks
 * @example
 * ```tsx
 * import { useEventListener } from "@/core/hooks/dom";
 *
 * export function MyComponent() {
 *   const handleScroll = () => {
 *     console.log('Window scrolled!');
 *   };
 *
 *   useEventListener('scroll', handleScroll);
 *
 *   return <div>Check console when you scroll</div>;
 * }
 * ```
 */
export function useEventListener(
  eventType: keyof WindowEventMap,
  callback: (event: Event) => void
): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: Event) => callbackRef.current(e);
    window.addEventListener(eventType, handler);

    return () => window.removeEventListener(eventType, handler);
  }, [eventType]);
}
