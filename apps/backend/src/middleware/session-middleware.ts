import { auth } from '@repo/auth'
import { createMiddleware } from 'hono/factory'

export const sessionMiddleware = createMiddleware(async (c, next) => {
  const session = await auth.api.getSession()

  c.set('session', session)

  await next()
})
