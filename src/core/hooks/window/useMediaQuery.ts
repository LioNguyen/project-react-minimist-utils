import { useState, useEffect } from "react";

/**
 * @param query - CSS media query string to match against (e.g., "(min-width: 768px)", "(prefers-color-scheme: dark)")
 * @returns boolean indicating if the media query currently matches
 * @description General-purpose hook for matching any CSS media query using the matchMedia API. Automatically updates when the match status changes. Useful for custom breakpoints, orientation, color schemes, and other media features. SSR-safe with initial false value.
 * @example
 * ```tsx
 * import { useMediaQuery } from "@/core/hooks/window";
 *
 * export function ThemeAwareComponent() {
 *   const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
 *   const isPortrait = useMediaQuery("(orientation: portrait)");
 *   const isLargeScreen = useMediaQuery("(min-width: 1200px)");
 *
 *   return (
 *     <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
 *       <p>Dark mode: {isDarkMode ? 'Yes' : 'No'}</p>
 *       <p>Orientation: {isPortrait ? 'Portrait' : 'Landscape'}</p>
 *       {isLargeScreen && <p>Extra content for large screens</p>}
 *     </div>
 *   );
 * }
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    const handleChange = () => setMatches(mediaQuery.matches);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
