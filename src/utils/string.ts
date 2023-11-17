import dompurify from "dompurify";
import * as CONSTANTS from "@/constants";

/**
 * @param text string
 * @param maxWordRequired number
 * @param minWordRequired number
 * @returns object
 * @description check whether text length meets requirement or not
 */
export function checkWordCount(
  text: string,
  minWordRequired?: number,
  maxWordRequired?: number
): {} {
  // Get text array without any white space to check length
  const textArr = text.split(/[\s,]+/).filter((item) => !!item);
  if (!!minWordRequired && textArr.length < minWordRequired) {
    return {
      isValid: false,
      wordCount: textArr.length,
      minWordRequired,
      maxWordRequired,
    };
  }
  if (!!maxWordRequired && textArr.length > maxWordRequired) {
    return {
      isValid: false,
      wordCount: textArr.length,
      minWordRequired,
      maxWordRequired,
    };
  }

  return {
    isValid: true,
    wordCount: textArr.length,
    minWordRequired,
    maxWordRequired,
  };
}

/**
 * @param hex
 * @param opacity
 * @returns rgba string
 * @description convert HEX to RGBA color
 */
export function convertHexToRgb(hex: string, opacity: number = 1) {
  // Check whether hex string is valid or not
  const hexResult = CONSTANTS.HEX_COLOR_REGEX.exec(hex);

  if (!!hexResult) {
    return `rgba(${parseInt(hexResult[1], 16)},${parseInt(
      hexResult[2],
      16
    )},${parseInt(hexResult[3], 16)}, ${
      opacity >= 0 && opacity <= 1 ? opacity : 1
    })`;
  }

  return "";
}

/**
 * @param style style object
 * @returns string of css style
 * @description convert css object into css string to use in styled-components template string
 */
export function convertStyleObjectToString(style: any) {
  return Object.keys(style).reduce(
    (acc, key) =>
      acc +
      key
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase() +
      ":" +
      style[key] +
      ";",
    ""
  );
}

/**
 * @param dirtyHTML string
 * @returns string
 * @description ensure the value entered by the end user does not contain any malicious content
 */
export function sanitizeHTML(dirtyHTML = "") {
  return dompurify.sanitize(dirtyHTML);
}

/**
 * @param text string
 * @param textLengthRequired number
 * @returns object
 * @description trim text with ellipsis
 */
export function trimText(text: string, textLengthRequired?: number): {} {
  const textLength = text.length;
  if (!textLengthRequired || text.length <= textLengthRequired) {
    return {
      textLength,
      textLengthRequired,
      text,
    };
  }

  return {
    textLength,
    textLengthRequired,
    text: `${text.slice(0, textLengthRequired)} ...`,
  };
}
