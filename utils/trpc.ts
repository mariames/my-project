import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '@/server/trpc';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      url: '/api/trpc',
    };
  },
  ssr: false,
});
