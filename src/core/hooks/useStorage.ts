import { useCallback, useState, useEffect } from "react";

/**
 * @param key
 * @param defaultValue key's value
 * @description helps to store data in localStorage
 */
export function useLocalStorage(key: any, defaultValue: any) {
  return useStorage(key, defaultValue, window.localStorage);
}

/**
 * @param key
 * @param defaultValue key's value
 * @description helps to store data in sessionStorage
 */
export function useSessionStorage(key: any, defaultValue: any) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key: any, defaultValue: any, storageObject: Storage) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
