
import { appRouter } from "../../app/api/trpc/[trpc]/route";

export const serverClient = appRouter.createCaller({});
