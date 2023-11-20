# React Minimist Utils

[![npm](https://img.shields.io/npm/v/react-minimist-utils?color=%23ff00dd)](https://www.npmjs.com/package/react-minimist-utils)
[![npm downloads](https://img.shields.io/npm/dw/react-minimist-utils)](https://www.npmjs.com/package/react-minimist-utils)
![types](https://img.shields.io/npm/types/react-minimist-utils)

🚀 `react-minimist-utils` is a bundle of essential packages and utils in Typescript for a React application

`React + TypeScript + Vite`

Older version [minimist-react-library](https://www.npmjs.com/package/minimist-react-library)

<i><b>Get full template to create react app</b>: [React Minimist Boilerplate](https://github.com/LioNguyen/project-react-minimist-boilerplate)</i>

---

<b>Table of Contents</b>

- [React Minimist Utils](#react-minimist-utils)
  - [Installation](#installation)
  - [Playground](#playground)
  - [Constants](#constants)
    - [EMAIL_REGEX](#email_regex)
    - [HEX_COLOR_REGEX](#hex_color_regex)
    - [HTTP_HTTPS_REGEX](#http_https_regex)
    - [PASSWORD_REGEX](#password_regex)
    - [UUID_REGEX](#uuid_regex)
    - [VIETNAMESE_PHONE_NUMBER_REGEX](#vietnamese_phone_number_regex)
  - [Essential Packages:](#essential-packages)
    - [clsx](#clsx)
    - [dompurify](#dompurify)
    - [lodash](#lodash)
    - [qs](#qs)
  - [Hooks](#hooks)
    - [Data](#data)
      - [useToggle](#usetoggle)
    - [Device](#device)
      - [useDeviceDetect](#usedevicedetect)
    - [Dom](#dom)
      - [useElementOnScreen](#useelementonscreen)
      - [useEventListener](#useeventlistener)
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

Some extra essential packages:

```bash
npm i axios
npm i date-fns
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm i @reduxjs/toolkit redux-saga
npm i react-hook-form yup
npm i react-router-dom
```

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

## Essential Packages:

### [clsx](https://www.npmjs.com/package/clsx)

```js
import { Clsx, ClsxType } from "react-minimist-utils";
```

### [dompurify](https://www.npmjs.com/package/dompurify)

```js
import { dompurify, DOMPurify, DompurifyType } from "react-minimist-utils";
```

### [lodash](https://www.npmjs.com/package/lodash)

```js
import { _, Lodash, LodashType } from "react-minimist-utils";
```

### [qs](https://www.npmjs.com/package/qs)

```js
import { qs, qsType } from "react-minimist-utils";
```

## Hooks

### Data

#### useToggle

`useToggle` allows a component to toggle a value between true and false

```js
import { Hooks } from "react-minimist-utils";

const [value, toggleValue] = Hooks.Data.useToggle(false);

return (
  <>
    <button onClick={toggleValue}>Toggle</button>
    <button onClick={() => toggleValue(true)}>Make True</button>
    <button onClick={() => toggleValue(false)}>Make False</button>
  </>
);
```

### Device

#### useDeviceDetect

`useDeviceDetect` detects whether your device is mobile or not

```js
import { Hooks } from "react-minimist-utils";

const { isMobile } = Hooks.Device.useDeviceDetect();
```

### Dom

#### useElementOnScreen

`useElementOnScreen` checks whether a specific DOM element comes into view or goes out of sight

```js
import { Hooks } from "react-minimist-utils";

const buttonRef = useRef();
const isVisible = Hooks.Dom.useElementOnScreen(buttonRef);
```

#### useEventListener

`useEventListener` helpful in situations where you want to handle events

```js
import { Hooks } from "react-minimist-utils";

Hooks.Dom.useEventListener("scroll", callback);
```

### Storage

#### useLocalStorage, useSessionStorage

`useLocalStorage, useSessionStorage` helps to store data in Local Storage or Session Storage

```js
import { Hooks } from "react-minimist-utils";

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
import { Hooks } from "react-minimist-utils";

const isScrolling = Hooks.Window.useScrolling();
```

#### useScrollTo

`useScrollTo` helps scroll to element or specific position

```js
import { Hooks } from "react-minimist-utils";

const buttonRef = useRef();
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
import { Hooks } from "react-minimist-utils";

const { top, left, isElementInView } = Hooks.Window.useElementPosition(".btn"); // or Hooks.useElementPosition()
```

#### useWindowSize

`useWindowSize` helps to get current window's height, width, scrollX and scrollY

```js
import { Hooks } from "react-minimist-utils";

const { height, width, scrollX, scrollY } = Hooks.Window.useWindowSize(); // or Hooks.useWindowSize()
```

## Utils:

### Api

#### fetchData

`fetchData` utilizes fetch data method from api

```js
import { Utils } from "react-minimist-utils";

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
import { Utils } from "react-minimist-utils";

const arr = [1, 2, 3];

const { push, filter, update, remove, clear } = Utils.Array.handleArray(arr); // or Utils.handleArray

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
import { Utils } from "react-minimist-utils";

const list = Utils.Array.groupListByField({
  list: mockList,
  field: "name",
});
```

#### sortList

`sortList` only works on number list, string list & object list

```js
import { Utils } from "react-minimist-utils";

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
import { Utils } from "react-minimist-utils";

const { downloadFile, DOWNLOAD_LINK_SAMPLE } = Utils.Data;

downloadFile(DOWNLOAD_LINK_SAMPLE);
```

### Number

#### numberWithComma

`numberWithComma` formats number with dot and comma

```js
import { Utils } from "react-minimist-utils";

const formattedNumber = Utils.Number.numberWithComma(55250.2);

// 55,250.20
```

### React

#### lazyLoad

`lazyLoad` creates lazy for app components

```js
// ./Button/index.ts
import { Utils } from "react-minimist-utils";

const Button = Utils.lazyLoad(
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
import { Utils } from "react-minimist-utils";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const isTextValid = Utils.String.checkWordCount(text, 5, 30);

// {isValid: true, maxWordRequired: 30, minWordRequired: 5, wordCount: 8}
```

#### convertHexToRgb

`convertHexToRgb` converts HEX to RGBA color

```js
import { Utils } from "react-minimist-utils";

const formattedNumber = Utils.String.numberWithComma(55250.2);

// 55,250.20
```

#### convertStyleObjectToString

`convertStyleObjectToString` converts css object into css string to use in styled-components template string

```js
import { Utils } from "react-minimist-utils";

const styleObject = {
  color: "#000",
  fontSize: "20px",
};
const cssString = Utils.String.convertStyleObjectToString(styleObject);

// color:#000;font-size:20px;
```

#### sanitizeHTML

`sanitizeHTML` ensures the value entered by the end user does not contain any malicious content

```js
import { Utils } from "react-minimist-utils";

const dirtyHTML = <p>This is dirty HTML</p>;
const htmlText = Utils.String.sanitizeHTML(dirtyHTML);

// <p>This is dirty HTML</p>
```

#### trimText

`trimText` trims text with ellipsis

```js
import { Utils } from "react-minimist-utils";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const newText = Utils.String.trimText(text, 50);

// {textLength: 56, textLengthRequired: 50, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ...'}
```
