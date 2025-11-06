# Technical Architecture Documentation

## 1. ⚠️ CRITICAL: React Utility Library Architecture

**THIS REPOSITORY CONTAINS A REACT UTILITY LIBRARY PACKAGE. This is NOT a full application - it's a reusable npm package that provides hooks and utilities for React applications.**

### 1.1. Architecture Scope:

- **Package Type**: Reusable React utility library published to npm
- **Build System**: Vite bundler for library mode compilation
- **Package Management**: npm for package distribution and management
- **Target**: TypeScript-first React utilities and hooks
- **Distribution**: ESM and CJS formats with TypeScript declarations
- **Styling**: Utility functions for style manipulation (no component styling)

### 1.2. Package Dependencies:

**ALWAYS verify package.json for current dependencies:**

- **Core Dependencies**: dompurify, lodash, qs, tailwind-merge
- **Peer Dependencies**: React ^19.2.0, React DOM ^19.2.0
- **Build Tools**: Vite with vite-plugin-dts for type generation
- **TypeScript**: Strict type checking for all utilities
- **No Application Dependencies**: This is a library, not an application (no routing, state management, etc.)

### 1.3. Library Distribution:

- **ESM Format**: Modern JavaScript modules for tree-shaking support
- **CJS Format**: CommonJS for broader compatibility
- **Type Definitions**: Full TypeScript declarations included
- **Exports Configuration**: Proper package.json exports for better module resolution
- **No Runtime Dependencies**: Minimal runtime footprint

## 2. Overview

### 2.1. Project Description

React Minimist Utils is a lightweight npm package that provides essential React hooks and utility functions for modern React applications. The library is built with TypeScript and follows a modular architecture for tree-shaking optimization and minimal bundle impact.

### 2.2. Technology Stack

- **Framework**: React ^19.2.0 (peer dependency)
- **Build Tool**: Vite in library mode for optimized builds
- **Package Manager**: npm for package distribution
- **Language**: TypeScript with strict type checking
- **Testing**: Development environment with hot module replacement
- **Distribution**: Dual ESM/CJS formats with TypeScript declarations

## 3. Architecture Principles

### 3.1. Library Design Principles

- **Tree-Shakeable**: All exports are modular for optimal bundle sizes
- **Type-Safe**: Full TypeScript support with comprehensive type definitions
- **Zero-Config**: Works out of the box with minimal setup
- **Framework Agnostic Utilities**: Utilities work with any React setup
- **Minimal Dependencies**: Small dependency footprint for library consumers

### 3.2. Code Organization Principles

- **Modular Structure**: Hooks and utils organized by category
- **Single Responsibility**: Each hook/util has a single, well-defined purpose
- **Consistent API**: Similar patterns across all utilities
- **Documentation-First**: Comprehensive JSDoc comments and examples

## 4. System Architecture

### 4.1. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│               React Minimist Utils (NPM Package)           │
├─────────────────────────────────────────────────────────────┤
│                    Library Structure                       │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                   Public API                        │  │
│  │              (index.ts exports)                     │  │
│  ├─────────────────┬───────────────────────────────────┤  │
│  │     Hooks       │           Utils                   │  │
│  │                 │                                   │  │
│  │  • debounce/    │   • api/      - fetchData        │  │
│  │  • dom/         │   • array/    - handleArray      │  │
│  │  • window/      │   • data/     - downloadFile     │  │
│  │  • useData      │   • number/   - numberWithComma  │  │
│  │  • useDevice    │   • string/   - sanitizeHTML     │  │
│  │  • usePrevious  │   • cn/       - className util   │  │
│  │  • useStorage   │   • lazyLoad/ - component lazy   │  │
│  └─────────────────┴───────────────────────────────────┘  │
│                    Constants                              │
│              (Regex patterns & validators)                │
└─────────────────────────────────────────────────────────────┘
```

### 4.2. Package Consumption

Consumers import utilities directly:

```typescript
// Named imports for tree-shaking
import { useDebounce, handleArray, sanitizeHTML } from "react-minimist-utils";

// Category imports
import { Hooks, Utils, CONSTANTS } from "react-minimist-utils";
```

## 5. Library Structure

### 5.1. Directory Organization

The library follows a category-based structure for optimal organization:

```
src/
├── constants.ts           # Regex patterns and constants
├── index.ts               # Main export file
├── main.tsx               # Development playground entry
├── App.tsx                # Development playground app
└── core/                  # Core library code
    ├── hooks/             # React hooks organized by category
    │   ├── debounce/      # Debounce hooks
    │   │   ├── useDebounce.ts
    │   │   ├── useDebouncedCallback.ts
    │   │   └── index.ts
    │   ├── dom/           # DOM-related hooks
    │   │   ├── useElementOnScreen.ts
    │   │   ├── useEventListener.ts
    │   │   └── index.ts
    │   ├── window/        # Window-related hooks
    │   │   ├── useScrolling.ts
    │   │   ├── useScrollTo.ts
    │   │   ├── useElementPosition.ts
    │   │   ├── useWindowSize.ts
    │   │   └── index.ts
    │   ├── useData.ts     # Data manipulation hook
    │   ├── useDevice.ts   # Device detection hook
    │   ├── usePrevious.ts # Previous value hook
    │   ├── useStorage.ts  # Storage hooks
    │   └── index.ts       # Hooks barrel export
    └── utils/             # Utility functions
        ├── api.ts         # API utilities
        ├── array.ts       # Array utilities
        ├── cn.ts          # ClassName utilities
        ├── data.ts        # Data utilities
        ├── lazyLoad.tsx   # Lazy loading utilities
        ├── number.ts      # Number utilities
        ├── string.ts      # String utilities
        └── index.ts       # Utils barrel export
```

### 5.2. Hook Standards

#### 5.2.1. Hook Implementation Standards

- **TypeScript-First**: All hooks must have complete type definitions
- **JSDoc Documentation**: Comprehensive documentation with examples
- **Generic Support**: Use generics where appropriate for type safety
- **Ref Object Types**: Use React.RefObject<T> instead of MutableRefObject
- **Cleanup Functions**: Always return cleanup functions in useEffect

````typescript
import { useEffect, useState } from "react";

/**
 * @param ref - A React ref object pointing to a DOM element to observe
 * @param rootMargin - Optional margin around the root element (default: "0px")
 * @returns boolean - True when the element is visible in the viewport
 * @description Uses Intersection Observer API to detect element visibility
 * @example
 * ```tsx
 * import { useElementOnScreen } from "react-minimist-utils";
 *
 * export function MyComponent() {
 *   const ref = useRef(null);
 *   const isVisible = useElementOnScreen(ref);
 *
 *   return <div ref={ref}>{isVisible && "Visible!"}</div>;
 * }
 * ```
 */
export function useElementOnScreen<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  rootMargin = "0px"
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isVisible;
}
````

#### 5.2.2. Import Organization Standards

- **React imports first**: React and React-specific imports
- **Library imports second**: External dependencies
- **No internal imports**: Library code doesn't import from other packages
- **Alphabetical ordering**: Within each group, maintain alphabetical order

```typescript
// ✅ Correct import organization for library hooks
import { useEffect, useRef, useState } from "react";

/**
 * Hook implementation
 */
export function useCustomHook() {
  // implementation
}
```

#### 5.2.3. Utility Function Standards

````typescript
/**
 * @param text - The text to trim
 * @param maxLength - Maximum character length
 * @returns Trimmed text result object
 * @description Trims text with ellipsis if exceeds max length
 * @example
 * ```typescript
 * import { trimText } from "react-minimist-utils";
 *
 * const result = trimText("Long text here", 10);
 * console.log(result.text); // "Long te..."
 * ```
 */
export function trimText(text: string, maxLength: number): TrimTextResult {
  // implementation
}
````

### 5.3. Route Structure

````typescript

### 5.3. Export Structure

```typescript
// Main index.ts - Organized exports
export * from "./constants";

// Hooks exports
export * from "./core/hooks";
export * as Hooks from "./core/hooks";

// Utils exports
export * from "./core/utils";
export * as Utils from "./core/utils";

// Constants namespace
export * as CONSTANTS from "./constants";
````

### 5.4. Category Organization

#### 5.4.1. Hooks Categories

- **debounce/**: Value and callback debouncing
- **dom/**: DOM manipulation and observation
- **window/**: Window-related functionality (scroll, size, position)
- **Individual hooks**: useData, useDevice, usePrevious, useStorage

#### 5.4.2. Utils Categories

- **api**: API request helpers
- **array**: Array manipulation utilities
- **cn**: Class name utilities
- **data**: Data handling utilities
- **number**: Number formatting
- **string**: String manipulation and validation
- **lazyLoad**: Component lazy loading

````

### 5.4. State Management Patterns

#### 5.4.1. Zustand Store Template

```typescript
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UserState {
  users: User[]
  selectedUser: User | null
  loading: boolean
  error: string | null
}

interface UserActions {
  setUsers: (users: User[]) => void
  selectUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearError: () => void
}

export const useUserStore = create<UserState & UserActions>()(
  devtools(
    (set) => ({
      // State
      users: [],
      selectedUser: null,
      loading: false,
      error: null,

      // Actions
      setUsers: (users) => set({ users }),
      selectUser: (selectedUser) => set({ selectedUser }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
      clearError: () => set({ error: null }),
    }),
    { name: 'user-store' }
  )
)
````

#### 5.4.2. React Query Integration

```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/core/api/userService";

// Query hook
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: userService.getUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Mutation hook
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
```

### 5.5. API Structure

```typescript
// Base API Service
export class BaseApiService {
  protected baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  protected async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }
}

// Domain-specific service
export class UserService extends BaseApiService {
  async getUsers(): Promise<User[]> {
    const response = await this.request<User[]>("/users");
    return response.data;
  }

  async createUser(userData: CreateUserRequest): Promise<User> {
    const response = await this.request<User>("/users", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    return response.data;
  }
}

export const userService = new UserService(process.env.VITE_API_URL!);
```

## 6. Development Infrastructure

### 6.1. Vite Configuration

- **Library Mode**: Vite configured for library building, not application
- **Multiple Formats**: ESM and CJS outputs for broad compatibility
- **Type Generation**: vite-plugin-dts for generating TypeScript declarations
- **Development Server**: Hot reload for testing during development

### 6.2. Build Configuration

- **TypeScript**: Strict type checking with comprehensive declarations
- **Bundle Optimization**: Tree-shaking support for minimal consumer bundles
- **Peer Dependencies**: React as peer dependency to avoid duplication
- **Export Maps**: Proper package.json exports for module resolution

## 7. Build and Publishing

### 7.1. Build Process

- **Development**: `npm run dev` for local development with hot reload
- **Production**: `npm run build` for optimized library builds
- **Type Checking**: TypeScript compilation with declaration generation
- **Linting**: ESLint for code quality

### 7.2. npm Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

### 7.3. Publishing Workflow

1. Update version in `package.json`
2. Run `npm run build` to generate dist files
3. Test locally with `npm link`
4. Publish to npm with `npm publish`
5. Verify on npmjs.com

## 8. Development Guidelines

### 8.1. Library Guidelines

- **Modular Organization**: Hooks and utils organized by category for tree-shaking
- **TypeScript-First**: Complete type definitions with JSDoc documentation
- **Minimal Dependencies**: Keep runtime dependencies minimal
- **Peer Dependencies**: React as peer dependency to avoid version conflicts
- **Export Structure**: Clear exports for both named and namespace imports

### 8.2. Performance Guidelines

- **Tree-Shakeable Exports**: Each utility exportable independently
- **No Side Effects**: Pure functions and hooks without global side effects
- **Bundle Size**: Monitor bundle impact on consuming applications
- **Lazy Loading**: Support for lazy loading where appropriate

### 8.3. Documentation Standards

- **JSDoc Comments**: Comprehensive documentation for all exports
- **Usage Examples**: Code examples in TSX format with imports
- **Type Definitions**: Full TypeScript support with generic parameters
- **README**: Keep README concise, detailed docs in DOCUMENTATION.md

This document serves as the comprehensive guide for developing the React Minimist Utils library, ensuring consistency, maintainability, and optimal performance for package consumers.
