import { useEffect, useRef } from "react";

/**
 * @param value - The current value
 * @returns The previous value
 * @description Stores and returns the previous value of a state or prop
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
