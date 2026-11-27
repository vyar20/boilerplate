import { api } from '@repo/api'
import { env } from '@repo/env'
import { Hono } from 'hono'
import { requestId } from 'hono/request-id'

const app = new Hono()

app.use(requestId())

app.route('/api', api)

export default {
  port: env.PORT,
  fetch: app.fetch
}
