/**
 * @param number
 * @param locale default is "en"
 * @returns string
 * @description format number with dot and comma
 */
export function numberWithComma(number: number, locale: "en" | "vi" = "en") {
  return number.toLocaleString(locale);
}
