import { useCallback, useEffect, useRef } from "react";

/**
 * @param callback - The callback function to debounce
 * @param delay - The delay in milliseconds (default: 500)
 * @returns The debounced callback function
 * @description Creates a debounced version of a callback function that delays its execution until after the specified delay has elapsed since the last call. Useful for handling frequent events like window resize or typing
 * @example
 * ```tsx
 * import { useDebouncedCallback } from "@/core/hooks/debounce";
 * import { useCallback } from "react";
 *
 * export function AutosaveForm() {
 *   const handleSave = useCallback(() => {
 *     console.log("Saving form...");
 *     // Save to API
 *   }, []);
 *
 *   const debouncedSave = useDebouncedCallback(handleSave, 1000);
 *
 *   return (
 *     <input
 *       onChange={debouncedSave}
 *       placeholder="Type to autosave..."
 *     />
 *   );
 * }
 *
 * // Another example with window resize
 * export function ResponsiveComponent() {
 *   const handleResize = useCallback(() => {
 *     console.log("Window resized");
 *     // Perform layout calculations
 *   }, []);
 *
 *   const debouncedResize = useDebouncedCallback(handleResize, 300);
 *   useEventListener('resize', debouncedResize);
 *
 *   return <div>Resize the window</div>;
 * }
 * ```
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 500
): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
}
