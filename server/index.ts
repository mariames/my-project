import { z } from "zod";
import { publicProcedure, router } from "./trpc";

// ✅ Add these at the top — your in-memory database
let todos: { id: number; content: string; done: number }[] = [];
let idCounter = 1;

export const appRouter = router({
  getTodos: publicProcedure.query(() => {
    return todos;
  }),

  addTodo: publicProcedure.input(z.string()).mutation((opts) => {
    const newTodo = {
      id: idCounter++,
      content: opts.input,
      done: 0,
    };
    todos.push(newTodo);
    return true;
  }),

  setDone: publicProcedure
    .input(
      z.object({
        id: z.number(),
        done: z.number(),
      })
    )
    .mutation((opts) => {
      const todo = todos.find((t) => t.id === opts.input.id);
      if (todo) {
        todo.done = opts.input.done;
      }
      return true;
    }),
});

export type AppRouter = typeof appRouter;
