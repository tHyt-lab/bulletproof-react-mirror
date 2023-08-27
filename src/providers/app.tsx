import { Box, Button, Loader, MantineProvider } from "@mantine/core";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const ErrorFallback = () => {
  return (
    <Box role="alert">
      <Box component="h2">Ooops, something went wrong :( </Box>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </Box>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <Box>
          <Loader size="md" />
        </Box>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <BrowserRouter>{children}</BrowserRouter>
          </MantineProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
