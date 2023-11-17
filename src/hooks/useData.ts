import { useState } from "react";

/**
 * @returns [value, toggleValue]
 * @description allows a component to toggle a value between true and false
 */
export function useToggle(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value: any) {
    setValue((currentValue: any) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
