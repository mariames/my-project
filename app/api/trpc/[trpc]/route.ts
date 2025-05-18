import { appRouter } from "@/server"; // or correct path to router.ts
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export { appRouter }; // 👈 you need this for serverClient.ts

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
