# React Minimist Utils

[![npm](https://img.shields.io/npm/v/react-minimist-utils?color=%23ff00dd)](https://www.npmjs.com/package/react-minimist-utils)
[![npm downloads](https://img.shields.io/npm/dw/react-minimist-utils)](https://www.npmjs.com/package/react-minimist-utils)
![types](https://img.shields.io/npm/types/react-minimist-utils)

🚀 `react-minimist-utils` is a bundle of essential packages and utils in TypeScript for a React application

`React + TypeScript + Vite`

Older version: [minimist-react-library](https://www.npmjs.com/package/minimist-react-library)

<i><b>Get full template to create react app</b>: [React Minimist Boilerplate](https://github.com/LioNguyen/project-react-minimist-boilerplate)</i>

---

## Table of Contents

- [Installation](#installation)
- [What's Inside](#whats-inside)
- [Development \& Publishing](#development--publishing)
- [Playground](#playground)
- [Constants](#constants)
- [Complete Documentation](#complete-documentation)

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

## What's Inside

This package provides:

### 🎣 **Hooks** (Organized by Category)

- **Data**: `useToggle`
- **Debounce**: `useDebounce`, `useDebouncedCallback`
- **Device**: `useDeviceDetect`
- **DOM**: `useElementOnScreen`, `useEventListener`
- **Previous**: `usePrevious`
- **Storage**: `useLocalStorage`, `useSessionStorage`
- **Window**: `useScrolling`, `useScrollTo`, `useElementPosition`, `useWindowSize`

### 🛠️ **Utilities**

- **Api**: `fetchData`
- **Array**: `handleArray`, `groupListByField`, `sortList`
- **Data**: `downloadFile`
- **Number**: `numberWithComma`
- **React**: `lazyLoad`
- **String**: `checkWordCount`, `convertHexToRgb`, `convertStyleObjectToString`, `sanitizeHTML`, `trimText`

### 📋 **Constants**

- `EMAIL_REGEX`
- `HEX_COLOR_REGEX`
- `HTTP_HTTPS_REGEX`
- `PASSWORD_REGEX`
- `UUID_REGEX`
- `VIETNAMESE_PHONE_NUMBER_REGEX`

For detailed usage examples and API documentation, see [DOCUMENTATION.md](./DOCUMENTATION.md).

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

## Complete Documentation

For detailed usage examples of all hooks and utilities, please refer to [DOCUMENTATION.md](./DOCUMENTATION.md).
