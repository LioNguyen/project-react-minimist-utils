# React Minimist U - [React Minimist Utils](#react-minimist-utils)

- [Installation](#installation)
- [Development \& Publishing](#development--publishing)
  - [Development](#development)
  - [Build](#build)
  - [Publish to npm](#publish-to-npm)
- [Playground](#playground)
- [Constants](#constants)

[![npm](https://img.shields.io/npm/v/react-minimist-utils?color=%23ff00dd)](https://www.npmjs.com/package/react-minimist-utils)
[![npm downloads](https://img.shields.io/npm/dw/react-minimist-utils)](https://www.npmjs.com/package/react-minimist-utils)
![types](https://img.shields.io/npm/types/react-minimist-utils)

🚀 `react-minimist-utils` is a bundle of essential packages and utils in Typescript for a React application

`React + TypeScript + Vite`

Older version [minimist-react-library](https://www.npmjs.com/package/minimist-react-library)

<i><b>Get full template to create react app</b>: [React Minimist Boilerplate](https://github.com/LioNguyen/project-react-minimist-boilerplate)</i>

---

<b>Table of Contents</b>

- [React Minimist U - React Minimist Utils](#react-minimist-u----react-minimist-utils)
  - [Installation](#installation)
  - [Development \& Publishing](#development--publishing)
    - [Development](#development)
    - [Build](#build)
    - [Publish to npm](#publish-to-npm)
    - [Troubleshooting](#troubleshooting)
  - [Playground](#playground)
  - [Constants](#constants)
    - [EMAIL_REGEX](#email_regex)
    - [HEX_COLOR_REGEX](#hex_color_regex)
    - [HTTP_HTTPS_REGEX](#http_https_regex)
    - [PASSWORD_REGEX](#password_regex)
    - [UUID_REGEX](#uuid_regex)
    - [VIETNAMESE_PHONE_NUMBER_REGEX](#vietnamese_phone_number_regex)
  - [Hooks](#hooks)
    - [Data](#data)
      - [useToggle](#usetoggle)
    - [Debounce](#debounce)
      - [useDebounce](#usedebounce)
      - [useDebouncedCallback](#usedebouncedcallback)
    - [Device](#device)
      - [useDeviceDetect](#usedevicedetect)
    - [Dom](#dom)
      - [useElementOnScreen](#useelementonscreen)
      - [useEventListener](#useeventlistener)
    - [Previous](#previous)
      - [usePrevious](#useprevious)
    - [Storage](#storage)
      - [useLocalStorage, useSessionStorage](#uselocalstorage-usesessionstorage)
    - [Window](#window)
      - [useScrolling](#usescrolling)
      - [useScrollTo](#usescrollto)
      - [useElementPosition](#useelementposition)
      - [useWindowSize](#usewindowsize)
  - [Utils:](#utils)
    - [Api](#api)
      - [fetchData](#fetchdata)
    - [Array](#array)
      - [handleArray](#handlearray)
      - [groupListByField](#grouplistbyfield)
      - [sortList](#sortlist)
    - [Data](#data-1)
      - [downloadFile](#downloadfile)
    - [Number](#number)
      - [numberWithComma](#numberwithcomma)
    - [React](#react)
      - [lazyLoad](#lazyload)
    - [String](#string)
      - [checkWordCount](#checkwordcount)
      - [convertHexToRgb](#converthextorgb)
      - [convertStyleObjectToString](#convertstyleobjecttostring)
      - [sanitizeHTML](#sanitizehtml)
      - [trimText](#trimtext)

## Installation

```bash
npm i react-minimist-utils
```

> **Note**: This package uses `clsx`, `dompurify`, `lodash`, and `qs` internally but does not export them. If you need these packages, please install them separately:
>
> ```bash
> npm i clsx dompurify lodash qs
> ```

Some extra essential packages:

```bash
npm i axios
npm i date-fns
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm i @reduxjs/toolkit redux-saga
npm i react-hook-form yup
npm i react-router-dom
```

## Development & Publishing

### Development

To work on this package locally:

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start Vite dev server where you can test your components and hooks.

3. **Run linting:**
   ```bash
   npm run lint
   ```

### Build

Before publishing, you need to build the package:

1. **Build the package:**

   ```bash
   npm run build
   ```

   This command does two things:

   - `tsc`: Generates TypeScript declaration files (`*.d.ts`)
   - `vite build`: Bundles the code into ESM and CJS formats

2. **Verify the build output:**
   Check the `dist/` folder to ensure these files are generated:
   - `react-minimist-utils.es.js` - ES Module build
   - `react-minimist-utils.cjs` - CommonJS build
   - `index.d.ts` - TypeScript type definitions
   - `styles.css` - CSS file (if applicable)

### Publish to npm

Follow these steps to publish a new version:

1. **Update the version in `package.json`:**

   ```bash
   # For patch version (0.0.2 -> 0.0.3)
   npm version patch

   # For minor version (0.0.2 -> 0.1.0)
   npm version minor

   # For major version (0.0.2 -> 1.0.0)
   npm version major
   ```

2. **Build the package:**

   ```bash
   npm run build
   ```

3. **Test the package locally (optional but recommended):**

   ```bash
   # In this package directory
   npm link

   # In another project where you want to test
   npm link react-minimist-utils
   ```

4. **Login to npm (first time only):**

   ```bash
   npm login
   ```

5. **Publish to npm:**

   ```bash
   # For first time or regular updates
   npm publish

   # If you need to publish a beta/alpha version
   npm publish --tag beta
   ```

6. **Verify the publication:**

   - Check [npmjs.com/package/react-minimist-utils](https://www.npmjs.com/package/react-minimist-utils)
   - Or run: `npm info react-minimist-utils`

7. **Commit and push the version changes:**
   ```bash
   git add package.json package-lock.json
   git commit -m "chore: bump version to x.x.x"
   git push origin master
   git push --tags
   ```

### Troubleshooting

**TypeScript errors in consuming projects:**

- Make sure the `exports` field in `package.json` includes the `types` property
- Ensure `dist/index.d.ts` exists after building
- The `types` field should be first in the exports configuration

**Package not updating:**

- Clear npm cache: `npm cache clean --force`
- In consuming project: `npm uninstall react-minimist-utils && npm install react-minimist-utils@latest`

## Playground

- [Code Playground](https://playcode.io)
- [Regex Playground](https://regex101.com/)
- [Mock API](https://mockapi.io/)
- [Free Test Data](https://freetestdata.com/)
- [Generate data tool](https://generatedata.com/)
- [Lorem](https://loremipsum.io/)

## Constants

### EMAIL_REGEX

```js
import { CONSTANTS } from "react-minimist-utils";

const regex = CONSTANTS.EMAIL_REGEX;

// regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
```

### HEX_COLOR_REGEX

```js
import { CONSTANTS } from "react-minimist-utils";

const regex = CONSTANTS.HEX_COLOR_REGEX;

// regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
```

### HTTP_HTTPS_REGEX

```js
import { CONSTANTS } from "react-minimist-utils";

const regex = CONSTANTS.HTTP_HTTPS_REGEX;

// regex = /http(s?):\/\//gm
```

### PASSWORD_REGEX

```js
import { CONSTANTS } from "react-minimist-utils";

const regex = CONSTANTS.PASSWORD_REGEX;

// regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/g;
```

### UUID_REGEX

```js
import { CONSTANTS } from "react-minimist-utils";

const regex = CONSTANTS.UUID_REGEX;

// regex = /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/g;
```

### VIETNAMESE_PHONE_NUMBER_REGEX

```js
import { CONSTANTS } from "react-minimist-utils";

const regex = CONSTANTS.VIETNAMESE_PHONE_NUMBER_REGEX;

// regex = /^(\+?)(0|84?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/gm;
```

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

## Utils:

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
