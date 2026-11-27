import { api } from '@repo/api'
import { auth } from '@repo/auth'
import { env } from '@repo/env'
import { Hono } from 'hono'
import { requestId } from 'hono/request-id'
import { sessionMiddleware } from './middleware/session-middleware'

const app = new Hono()

app.use(requestId())
app.use('/api', sessionMiddleware)
app.all('/api/auth/*', (c) => auth.handler(c.req.raw))
app.route('/api', api)

export default {
  port: env.PORT,
  fetch: app.fetch
}
