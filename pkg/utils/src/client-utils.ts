export const p = <T>(promise: Promise<T>): Promise<[null, T] | [Error]> =>
  promise.then((data) => [null, data] as [null, T]).catch((err) => [err])

export const HTTPCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const

export const HTTPText = {
  OK: 'OK',
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
} as const

export const isBrowser =
  typeof window !== 'undefined' || typeof document !== 'undefined'
