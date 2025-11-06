import React, { ReactNode } from "react";
import type { APIConfig } from "../domains";
import { useAppContext } from "../hooks/useAppContext";

/**
 * React context for providing global API configuration.
 *  - axiosInstance: shared Axios client
 *  - default TTL, cache settings, and per-endpoint overrides
 */
const [APIContextProvider, useAPIConfig] = useAppContext<APIConfig>("API");

export function APIProvider({
  children,
  config,
}: {
  children: ReactNode;
  config: APIConfig;
}) {
  return <APIContextProvider value={config}>{children}</APIContextProvider>;
}

/**
 * Hook to access API configuration context.
 * @throws Error if used outside APIProvider
 */
export { useAPIConfig };
