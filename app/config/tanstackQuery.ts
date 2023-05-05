import { QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: false,
      retry: 2,
    },
  },
  queryCache: new QueryCache({}),
});
