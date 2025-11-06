import { BREAKPOINTS } from "@/constants";
import { useState, useEffect } from "react";

type Breakpoint = keyof typeof BREAKPOINTS;

interface UseResponsiveReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
  breakpoint: Breakpoint;
  width: number;
  height: number;
}

/**
 * @returns object {isMobile, isTablet, isDesktop, isLarge, breakpoint, width, height}
 * @description Comprehensive responsive design hook that provides device type detection, current breakpoint, and window dimensions. Automatically detects and updates on window resize. SSR-safe with default fallback values.
 * @example
 * ```tsx
 * import { useResponsive } from "@/core/hooks/window";
 *
 * export function ResponsiveComponent() {
 *   const { isMobile, isTablet, isDesktop, breakpoint, width } = useResponsive();
 *
 *   return (
 *     <div>
 *       <h1>Current Device: {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}</h1>
 *       <p>Breakpoint: {breakpoint}</p>
 *       <p>Width: {width}px</p>
 *       {isMobile && <MobileNav />}
 *       {isDesktop && <DesktopNav />}
 *     </div>
 *   );
 * }
 * ```
 */
export function useResponsive(): UseResponsiveReturn {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Set initial size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCurrentBreakpoint = (): Breakpoint => {
    const { width } = windowSize;

    if (width >= BREAKPOINTS["3XL"]) return "3XL";
    if (width >= BREAKPOINTS["2XL"]) return "2XL";
    if (width >= BREAKPOINTS.XL) return "XL";
    if (width >= BREAKPOINTS.LG) return "LG";
    if (width >= BREAKPOINTS.MD) return "MD";
    if (width >= BREAKPOINTS.SM) return "SM";
    return "XS";
  };

  const breakpoint = getCurrentBreakpoint();
  const { width, height } = windowSize;

  return {
    isMobile: width < BREAKPOINTS.MD,
    isTablet: width >= BREAKPOINTS.MD && width < BREAKPOINTS.LG,
    isDesktop: width >= BREAKPOINTS.LG,
    isLarge: width >= BREAKPOINTS.XL,
    breakpoint,
    width,
    height,
  };
}
