import { BREAKPOINTS } from "@/constants";
import { useState, useEffect } from "react";

type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * @param breakpoint - The breakpoint to match against (XS, SM, MD, LG, XL, 2XL, 3XL)
 * @returns boolean indicating if the current viewport matches the specified breakpoint or larger
 * @description Hook for matching specific breakpoints using the matchMedia API. Efficiently tracks viewport changes and updates only when the breakpoint match changes. SSR-safe with initial false value.
 * @example
 * ```tsx
 * import { useBreakpoint } from "@/core/hooks/window";
 *
 * export function ConditionalContent() {
 *   const isDesktop = useBreakpoint("LG");
 *   const isLarge = useBreakpoint("XL");
 *
 *   return (
 *     <div>
 *       {isDesktop && <p>Showing desktop content (≥1024px)</p>}
 *       {isLarge && <p>Large screen detected (≥1280px)</p>}
 *       {!isDesktop && <p>Mobile/Tablet view</p>}
 *     </div>
 *   );
 * }
 * ```
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = window.matchMedia(
      `(min-width: ${BREAKPOINTS[breakpoint]}px)`
    );

    const handleChange = () => setMatches(query.matches);

    // Set initial value
    setMatches(query.matches);

    // Listen for changes
    query.addEventListener("change", handleChange);

    return () => query.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return matches;
}
