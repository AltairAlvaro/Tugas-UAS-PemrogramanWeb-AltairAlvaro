import { QueryClient } from '@tanstack/react-query';

const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });

export default getQueryClient;
