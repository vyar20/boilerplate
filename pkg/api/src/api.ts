import { env } from '@repo/env'
import { HTTPText } from '@repo/utils/client-utils'
import { formatDistanceToNow } from 'date-fns'
import { Hono } from 'hono'
import { type RequestIdVariables } from 'hono/request-id'

const globalForHono = globalThis as unknown as {
  startAt: number
}

type HonoEnv = {
  Variables: RequestIdVariables
}

const startAt = globalForHono.startAt ?? performance.now()

if (env.NODE_ENV !== 'production') globalForHono.startAt = performance.now()

export const api = new Hono<HonoEnv>().get('/health', (c) => {
  return c.json({
    status: HTTPText.OK,
    upTime: formatDistanceToNow(Date.now() - startAt, {
      addSuffix: true,
      includeSeconds: true
    })
  })
})
