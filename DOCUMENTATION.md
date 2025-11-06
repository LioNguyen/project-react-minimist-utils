# React Minimist Utils - Complete Documentation

This document provides detailed documentation for all hooks and utilities available in `react-minimist-utils`.

## Table of Contents

- [Hooks](#hooks)
  - [Data](#data)
  - [Debounce](#debounce)
  - [Device](#device)
  - [Dom](#dom)
  - [Previous](#previous)
  - [Storage](#storage)
  - [Window](#window)
- [Utils](#utils)
  - [Api](#api)
  - [Array](#array)
  - [Data](#data-1)
  - [Number](#number)
  - [React](#react)
  - [String](#string)

---

## Hooks

### Data

#### useToggle

`useToggle` allows a component to toggle a value between true and false

```js
import { useToggle } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const [value, toggleValue] = useToggle(false);
// or
const [value, toggleValue] = Hooks.Data.useToggle(false);

return (
  <>
    <button onClick={toggleValue}>Toggle</button>
    <button onClick={() => toggleValue(true)}>Make True</button>
    <button onClick={() => toggleValue(false)}>Make False</button>
  </>
);
```

### Debounce

#### useDebounce

`useDebounce` debounces a value by delaying its update until after the specified delay has elapsed since the last change

```js
import { useDebounce } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const [searchTerm, setSearchTerm] = useState("");
const debouncedSearchTerm = useDebounce(searchTerm, 500);
// or
const debouncedSearchTerm = Hooks.Debounce.useDebounce(searchTerm, 500);

useEffect(() => {
  // This will only run after user stops typing for 500ms
  if (debouncedSearchTerm) {
    // Perform search with debouncedSearchTerm
  }
}, [debouncedSearchTerm]);

return (
  <input
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search..."
  />
);
```

#### useDebouncedCallback

`useDebouncedCallback` creates a debounced version of a callback function that delays its execution until after the specified delay has elapsed since the last call

```js
import { useDebouncedCallback } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const handleSearch = useDebouncedCallback((value) => {
  // This will only execute after user stops typing for 500ms
  console.log("Searching for:", value);
}, 500);
// or
const handleSearch = Hooks.Debounce.useDebouncedCallback((value) => {
  console.log("Searching for:", value);
}, 500);

return (
  <input
    onChange={(e) => handleSearch(e.target.value)}
    placeholder="Search..."
  />
);
```

### Device

#### useDeviceDetect

`useDeviceDetect` detects whether your device is mobile or not

```js
import { useDeviceDetect } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const { isMobile } = useDeviceDetect();
// or
const { isMobile } = Hooks.Device.useDeviceDetect();
```

### Dom

#### useElementOnScreen

`useElementOnScreen` checks whether a specific DOM element comes into view or goes out of sight

```js
import { useElementOnScreen } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const buttonRef = useRef();
const isVisible = useElementOnScreen(buttonRef);
// or
const isVisible = Hooks.Dom.useElementOnScreen(buttonRef);
```

#### useEventListener

`useEventListener` helpful in situations where you want to handle events

```js
import { useEventListener } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

useEventListener("scroll", callback);
// or
Hooks.Dom.useEventListener("scroll", callback);
```

### Previous

#### usePrevious

`usePrevious` stores and returns the previous value of a state or prop

```js
import { usePrevious } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const [count, setCount] = useState(0);
const previousCount = usePrevious(count);
// or
const previousCount = Hooks.Previous.usePrevious(count);

return (
  <div>
    <p>Current count: {count}</p>
    <p>Previous count: {previousCount}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
```

### Storage

#### useLocalStorage, useSessionStorage

`useLocalStorage, useSessionStorage` helps to store data in Local Storage or Session Storage

```js
import { useSessionStorage, useLocalStorage } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const [name, setName, removeName] = useSessionStorage("name", "Happy");
const [age, setAge, removeAge] = useLocalStorage("age", 26);
// or
const [name, setName, removeName] = Hooks.Storage.useSessionStorage(
  "name",
  "Happy"
);
const [age, setAge, removeAge] = Hooks.Storage.useLocalStorage("age", 26);
```

### Window

#### useScrolling

`useScrolling` checks whether window is scrolling or not

```js
import { useScrolling } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const isScrolling = useScrolling();
// or
const isScrolling = Hooks.Window.useScrolling();
```

#### useScrollTo

`useScrollTo` helps scroll to element or specific position

```js
import { useScrollTo } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const buttonRef = useRef();
const { scrollToElement, scrollTo, scrollToTop, scrollToBottom } =
  useScrollTo();
// or
const { scrollToElement, scrollTo, scrollToTop, scrollToBottom } =
  Hooks.Window.useScrollTo();

scrollToElement(buttonRef);

// Default is scroll to top
scrollTo(1000, 0);
scrollToTop();
scrollToBottom();
```

#### useElementPosition

`useElementPosition` helps to get position of specific element

```js
import { useElementPosition } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const { top, left, isElementInView } = useElementPosition(".btn");
// or
const { top, left, isElementInView } = Hooks.Window.useElementPosition(".btn");
```

#### useWindowSize

`useWindowSize` helps to get current window's height, width, scrollX and scrollY

```js
import { useWindowSize } from "react-minimist-utils";
// or
import { Hooks } from "react-minimist-utils";

const { height, width, scrollX, scrollY } = useWindowSize();
// or
const { height, width, scrollX, scrollY } = Hooks.Window.useWindowSize();
```

---

## Utils

### Api

#### fetchData

`fetchData` utilizes fetch data method from api

```js
import { fetchData } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

fetchData({
  requestCallback: async () => {
    return await fetch("");
  },
  successCallback: (res) => {
    // Handle if call api successfully
  },
  failureCallback: (error) => {
    // Handle if call api failed
  },
  getLoadingState: (isLoading) => {
    if (isLoading) {
      // Toggle on loading component
    } else {
      // Toggle off loading component
    }
  },
  showLog: true,
});
// or
Utils.Api.fetchData({
  requestCallback: async () => {
    return await fetch("");
  },
  successCallback: (res) => {
    // Handle if call api successfully
  },
  failureCallback: (error) => {
    // Handle if call api failed
  },
  getLoadingState: (isLoading) => {
    if (isLoading) {
      // Toggle on loading component
    } else {
      // Toggle off loading component
    }
  },
  showLog: true,
});
```

### Array

#### handleArray

`handleArray` helps to push, filter, update, remove, clear a list

```js
import { handleArray } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const arr = [1, 2, 3];

const { push, filter, update, remove, clear } = handleArray(arr);
// or
const { push, filter, update, remove, clear } = Utils.Array.handleArray(arr);

const arrPush = push([7, 8, 9]);
// arrPush = [1, 2, 3, 7, 8, 9]

const arrRemove = remove(2);
// arrRemove = [1, 2, 7, 8, 9]

const arrFilter = filter((item: number) => item > 5);
// arrFilter = [7, 8, 9]

const arrUpdate = update(0, 100);
// arrUpdate = [100, 1, 2, 3, 7, 8, 9]

const arrClear = clear();
// arrClear = []
```

#### groupListByField

`groupListByField` handle group list by specific field

```js
import { groupListByField } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const list = groupListByField({
  list: mockList,
  field: "name",
});
// or
const list = Utils.Array.groupListByField({
  list: mockList,
  field: "name",
});
```

#### sortList

`sortList` only works on number list, string list & object list

```js
import { sortList } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const data = sortList({
  list: mockList,
  field: "name",
  sortType: "desc", // default is "asc"
});
// or
const data = Utils.Array.sortList({
  list: mockList,
  field: "name",
  sortType: "desc", // default is "asc"
});
```

### Data

#### downloadFile

`downloadFile` handles download a file from specific url

```js
import { downloadFile, DOWNLOAD_LINK_SAMPLE } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

downloadFile(DOWNLOAD_LINK_SAMPLE);
// or
const { downloadFile, DOWNLOAD_LINK_SAMPLE } = Utils.Data;

downloadFile(DOWNLOAD_LINK_SAMPLE);
```

### Number

#### numberWithComma

`numberWithComma` formats number with dot and comma

```js
import { numberWithComma } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const formattedNumber = numberWithComma(55250.2);
// or
const formattedNumber = Utils.Number.numberWithComma(55250.2);

// 55,250.20
```

### React

#### lazyLoad

`lazyLoad` creates lazy for app components

```js
// ./Button/index.ts
import { lazyLoad } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const Button = lazyLoad(
  () => import("./Button"),
  (module) => module.Button
);
// or
const Button = Utils.React.lazyLoad(
  () => import("./Button"),
  (module) => module.Button
);
```

```js
// App.js
import { Button } from "./Button"

export const App = () => {
  return <div>
    <Button>Submit<Button>
  </div>
}
```

### String

#### checkWordCount

`checkWordCount` checks whether text length meets requirement or not

```js
import { checkWordCount } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const isTextValid = checkWordCount(text, 5, 30);
// or
const isTextValid = Utils.String.checkWordCount(text, 5, 30);

// {isValid: true, maxWordRequired: 30, minWordRequired: 5, wordCount: 8}
```

#### convertHexToRgb

`convertHexToRgb` converts HEX to RGBA color

```js
import { convertHexToRgb } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const rgbaColor = convertHexToRgb("#ff0000", 0.5);
// or
const rgbaColor = Utils.String.convertHexToRgb("#ff0000", 0.5);

// rgba(255, 0, 0, 0.5)
```

#### convertStyleObjectToString

`convertStyleObjectToString` converts css object into css string to use in styled-components template string

```js
import { convertStyleObjectToString } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const styleObject = {
  color: "#000",
  fontSize: "20px",
};
const cssString = convertStyleObjectToString(styleObject);
// or
const cssString = Utils.String.convertStyleObjectToString(styleObject);

// color:#000;font-size:20px;
```

#### sanitizeHTML

`sanitizeHTML` ensures the value entered by the end user does not contain any malicious content

```js
import { sanitizeHTML } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const dirtyHTML = <p>This is dirty HTML</p>;
const htmlText = sanitizeHTML(dirtyHTML);
// or
const htmlText = Utils.String.sanitizeHTML(dirtyHTML);

// <p>This is dirty HTML</p>
```

#### trimText

`trimText` trims text with ellipsis

```js
import { trimText } from "react-minimist-utils";
// or
import { Utils } from "react-minimist-utils";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const newText = trimText(text, 50);
// or
const newText = Utils.String.trimText(text, 50);

// {textLength: 56, textLengthRequired: 50, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ...'}
```
