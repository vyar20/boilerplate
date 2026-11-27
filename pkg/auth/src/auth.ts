import { db } from '@repo/db'
import { env } from '@repo/env'
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'postgresql'
  }),
  advanced: {
    database: {
      joins: true
    }
  },
  baseURL: env.BETTER_AUTH_BASE_URL,
  secret: env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true
  }
})

export type AuthType = typeof auth
