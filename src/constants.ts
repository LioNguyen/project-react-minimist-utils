export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

export const HEX_COLOR_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

export const HTTP_HTTPS_REGEX = /http(s?):\/\//gm;

/**
 * @description
 * - At least 14 characters long but not more than 30.
 * - A combination of uppercase letters, lowercase letters, numbers, and symbols
 */
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/g;

export const UUID_REGEX =
  /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/g;

/**
 * @description
 * Only applied for Vietnamese phone number
 */
export const VIETNAMESE_PHONE_NUMBER_REGEX =
  /^(\+?)(0|84?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/gm;
