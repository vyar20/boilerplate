import { isBrowser } from '@repo/utils/client-utils'
import { z } from 'zod'

declare module 'bun' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Env extends EnvSchema {}
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production'], {
    error: 'NODE_ENV should one of (development|production).'
  }),
  PORT: z.coerce.number({ error: 'PORT is required.' }),
  DATABASE_URL: z
    .url({ error: 'DATABASE_URL is required.' })
    .regex(/^(postgres|postgresql):\/\//, {
      error: 'DATABASE_URL should start with (postgres|postgresql)://'
    })
})

type EnvSchema = z.infer<typeof envSchema>

export const env = (() => {
  const parsed = envSchema.safeParse(Bun.env)
  if (isBrowser) throw new Error('Env only available on server side.')

  if (!parsed.success) {
    console.error('Invalid environtment variable.')
    console.error(parsed.error.issues)
    throw process.exit(1)
  }

  return parsed.data
})()
