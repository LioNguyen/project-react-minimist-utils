import { MutableRefObject, useEffect, useRef, useState } from "react";

/**
 * @returns boolean
 * @description helpful when you want to track when a specific DOM element comes into view or goes out of sight
 */
export function useElementOnScreen(
  ref: MutableRefObject<any>,
  rootMargin = "0px"
) {
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
  }, [ref.current, rootMargin]);

  return isVisible;
}

/**
 * @param eventType
 * @param callback
 * @param element optional DOM to add event listener
 * @returns void
 * @description helpful in situations where you want to handle events
 */
export function useEventListener(
  eventType: keyof WindowEventMap,
  callback: Function,
  element = window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: any) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
