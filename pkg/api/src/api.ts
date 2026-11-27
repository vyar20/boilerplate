import { type auth } from '@repo/auth/auth'
import { db } from '@repo/db'
import { HTTPText, p } from '@repo/utils/client-utils'
import { formatDistanceToNow } from 'date-fns'
import { Hono } from 'hono'
import { type RequestIdVariables } from 'hono/request-id'

export type HonoEnv = {
  Variables: RequestIdVariables & {
    session: typeof auth.$Infer.Session
  }
}

export const api = new Hono<HonoEnv>().get('/health', async (c) => {
  const [dbError] = await p(db.$queryRaw`SELECT NOW()`)

  return c.json({
    status: HTTPText.OK,
    database: {
      status: dbError ? HTTPText.INTERNAL_SERVER_ERROR : HTTPText.OK
    },
    upTime: formatDistanceToNow(Date.now() - performance.now(), {
      addSuffix: true,
      includeSeconds: true
    })
  })
})

export type ApiType = typeof api
