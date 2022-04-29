/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { PostAuth200, PostAuthBody, GetAuth200 } from ".././model"
import { getClient } from "../../../src/custom-instance"

/**
 * Logs a User in and authorizes them to manage Store settings.
 * @summary Authenticate a User
 */
export const postAuth = (postAuthBody: PostAuthBody) => {
  return getClient<PostAuth200>({
    url: `/admin/auth`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: postAuthBody,
  })
}
/**
 * Gets the currently logged in User.
 * @summary Get Session
 */
export const getAuth = () => {
  return getClient<GetAuth200>({ url: `/admin/auth`, method: "get" })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any

export type PostAuthResult = NonNullable<AsyncReturnType<typeof postAuth>>
export type GetAuthResult = NonNullable<AsyncReturnType<typeof getAuth>>