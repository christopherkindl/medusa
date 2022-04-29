/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Medusa Admin API
 * OpenAPI spec version: 1.0.0
 */
import type { Region } from "./region";
/**
 * Money Amounts represents an amount that a given Product Variant can be purcased for. Each Money Amount either has a Currency or Region associated with it to indicate the pricing in a given Currency or, for fully region-based pricing, the given price in a specific Region. If region-based pricing is used the amount will be in the currency defined for the Reigon.
 */
export interface MoneyAmount {
    /** The id of the Money Amount. This value will be prefixed by `ma_`. */
    id?: string;
    /** The 3 character currency code that the Money Amount is given in. */
    currency_code?: string;
    /** The amount in the smallest currecny unit (e.g. cents 100 cents to charge $1) that the Product Variant will cost. */
    amount?: number;
    /** The minimum quantity that the Money Amount applies to. If this value is not set, the Money Amount applies to all quantities. */
    min_quantity?: number;
    /** The maximum quantity that the Money Amount applies to. If this value is not set, the Money Amount applies to all quantities. */
    max_quantity?: number;
    /** The id of the Product Variant that the Money Amount belongs to. */
    variant_id?: string;
    /** The id of the Region that the Money Amount is defined for. */
    region_id?: string;
    /** The Region that the Money Amount is defined for. */
    region?: Region;
    /** The date with timezone at which the resource was created. */
    created_at?: string;
    /** The date with timezone at which the resource was last updated. */
    updated_at?: string;
    /** The date with timezone at which the resource was deleted. */
    deleted_at?: string;
}