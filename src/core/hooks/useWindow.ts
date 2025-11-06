import { useEffect, useState } from "react";
import { useEventListener } from "./useDom";

/**
 * @returns boolean
 * @description check whether window is scrolling or not
 */
export function useScrolling() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollingHandler = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", scrollingHandler);

    return () => window.removeEventListener("scroll", scrollingHandler);
  }, [isScrolling]);

  return isScrolling;
}

/**
 * @description scroll to element or specific position
 */
export function useScrollTo() {
  const scrollToElement = (element: any) => {
    if (!element) return;
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (top?: number, left?: number) => {
    if (!window) return;
    window.scrollTo({
      top: top || 0,
      left: left || 0,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    if (!window) return;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    if (!window || !document) return;
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return { scrollToElement, scrollTo, scrollToTop, scrollToBottom };
}

/**
 * @param selectorString string
 * @returns object {top, left, isElementInView}
 * @description helpful in situations where you want to check position of specific element
 */
export function useElementPosition(selectorString?: string) {
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

/**
 * @returns object {width, height, scrollX, scrollY}
 * @description helpful in situations where you want to make a responsive design
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    scrollX: window.scrollX,
    scrollY: window.scrollY,
  });

  useEventListener("resize", () => {
    setWindowSize({
      ...windowSize,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  useEventListener("scroll", () => {
    setWindowSize({
      ...windowSize,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
  });

  return windowSize;
}
