import React, { createContext, useContext, ReactNode } from "react";

/**
 * @template T - The type of the context value
 * @param contextName - Name of the context for better error messages
 * @returns A tuple containing [Provider component, useContext hook]
 * @description Creates a type-safe context provider and consumer hook pattern. Eliminates boilerplate code for creating contexts with proper error handling. The returned hook automatically throws if used outside the provider.
 * @example
 * ```tsx
 * import { useAppContext } from "@/core/hooks";
 *
 * // Define your context value type
 * interface ThemeConfig {
 *   mode: 'light' | 'dark';
 *   toggleTheme: () => void;
 * }
 *
 * // Create provider and hook
 * const [ThemeProvider, useTheme] = useAppContext<ThemeConfig>('Theme');
 *
 * // Use the provider
 * export function App() {
 *   const [mode, setMode] = useState<'light' | 'dark'>('light');
 *
 *   const themeConfig: ThemeConfig = {
 *     mode,
 *     toggleTheme: () => setMode(m => m === 'light' ? 'dark' : 'light'),
 *   };
 *
 *   return (
 *     <ThemeProvider value={themeConfig}>
 *       <MyComponent />
 *     </ThemeProvider>
 *   );
 * }
 *
 * // Use the hook in child components
 * function MyComponent() {
 *   const { mode, toggleTheme } = useTheme();
 *   return <button onClick={toggleTheme}>Current: {mode}</button>;
 * }
 * ```
 */
export function useAppContext<T>(contextName: string) {
  // Create the context with null as default (will be checked in the hook)
  const Context = createContext<T | null>(null);

  /**
   * Provider component that wraps children with the context
   */
  function Provider({ children, value }: { children: ReactNode; value: T }) {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  /**
   * Hook to consume the context value
   * Throws an error if used outside the provider
   */
  function useContextHook(): T {
    const context = useContext(Context);
    if (context === null) {
      throw new Error(
        `use${contextName} must be used within a ${contextName}Provider`
      );
    }
    return context;
  }

  return [Provider, useContextHook] as const;
}
