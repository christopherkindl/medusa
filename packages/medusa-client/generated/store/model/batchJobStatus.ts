/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Storefront API
 * OpenAPI spec version: 1.0.0
 */

/**
 * The status of the batch job.
 */
export type BatchJobStatus =
  | "created"
  | "processing"
  | "awaiting_confirmation"
  | "completed"

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BatchJobStatus = {
  created: "created" as BatchJobStatus,
  processing: "processing" as BatchJobStatus,
  awaiting_confirmation: "awaiting_confirmation" as BatchJobStatus,
  completed: "completed" as BatchJobStatus,
}