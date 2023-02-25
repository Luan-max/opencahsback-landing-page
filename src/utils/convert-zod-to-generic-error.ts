import { ZodIssue } from 'zod'

export type ConvertGenericErrorResponse<T> = Record<keyof T, string>

export function convertZodToGenericError<T>(zodErrors: ZodIssue[]) {
  return zodErrors.reduce(
    (previous, current) => ({
      ...previous,
      [`${current.path}`]: current.message
    }),
    {} as ConvertGenericErrorResponse<T>
  )
}
