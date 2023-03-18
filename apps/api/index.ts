import { initTRPC } from '@trpc/server'
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { z } from 'zod'

export type AppRouter = typeof appRouter

const t = initTRPC.create()

const router = t.router

const publicProcedure = t.procedure

const appRouter = router({
  hello: publicProcedure
    .input(z.string())
    .query(({ input }) => ({ hello: `Hello ${input}` })),
})

createHTTPServer({
  router: appRouter,
  createContext() {
    return {}
  },
}).listen(2022)
