import { env } from '@repo/env'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello from Hono.'))

export default {
  port: env.PORT,
  fetch: app.fetch
}
