import Stripe from "stripe";

/**
 * Server-side Stripe client.
 *
 * IMPORTANT: never expose STRIPE_SECRET_KEY to the browser.
 */
const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment variables");
}

export const stripe = new Stripe(key, {
  // Stripe Node v20 is pinned to the current Stripe API version by default.
  // You can set apiVersion explicitly if you want, but keeping the default
  // reduces mismatch risk when upgrading the SDK.
});
