import { useEffect, useState } from "react";

/**
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds (default: 500)
 * @returns The debounced value
 * @description Debounces a value by delaying its update until after the specified delay has elapsed since the last change. Useful for search inputs or filtering to reduce API calls
 * @example
 * ```tsx
 * import { useDebounce } from "@/core/hooks/debounce";
 * import { useState, useEffect } from "react";
 *
 * export function SearchUsers() {
 *   const [searchTerm, setSearchTerm] = useState("");
 *   const debouncedSearchTerm = useDebounce(searchTerm, 300);
 *
 *   useEffect(() => {
 *     if (debouncedSearchTerm) {
 *       // Perform API call with debouncedSearchTerm
 *       console.log("Fetching results for:", debouncedSearchTerm);
 *     }
 *   }, [debouncedSearchTerm]);
 *
 *   return (
 *     <input
 *       value={searchTerm}
 *       onChange={(e) => setSearchTerm(e.target.value)}
 *       placeholder="Search..."
 *     />
 *   );
 * }
 * ```
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
