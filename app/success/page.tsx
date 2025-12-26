import Link from "next/link";

import { stripe } from "@/lib/stripe";
import ClearCartOnMount from "@/components/ClearCartOnMount";
import { formatAUD } from "@/data/products";

export const runtime = "nodejs";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams?: { session_id?: string };
}) {
  const sessionId = searchParams?.session_id;

  if (!sessionId) {
    return (
      <div className="card" style={{ padding: 18 }}>
        <h1 style={{ marginTop: 0 }}>Thanks!</h1>
        <p className="muted">We couldn’t find a checkout session.</p>
        <Link href="/products" className="btn btnPrimary" style={{ display: "inline-block" }}>
          Back to shop
        </Link>
      </div>
    );
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const amount = typeof session.amount_total === "number" ? session.amount_total : null;
  const currency = (session.currency ?? "aud").toUpperCase();
  const status = session.payment_status;

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <ClearCartOnMount />

      <div className="sectionHeader">
        <div>
          <h1 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.02em" }}>
            Payment {status === "paid" ? "successful" : "received"} 🎉
          </h1>
          <div className="muted" style={{ marginTop: 6 }}>
            Stripe status: <b>{status}</b>
          </div>
        </div>
        <Link href="/products" className="btn">
          Continue shopping
        </Link>
      </div>

      <div className="card" style={{ padding: 18 }}>
        {amount !== null && currency === "AUD" && (
          <p style={{ marginTop: 0 }}>
            Total: <b>{formatAUD(amount)}</b>
          </p>
        )}

        {amount !== null && currency !== "AUD" && (
          <p style={{ marginTop: 0 }}>
            Total: <b>{(amount / 100).toFixed(2)} {currency}</b>
          </p>
        )}

        <p className="muted" style={{ marginBottom: 0 }}>
          You’ll receive an email receipt from Stripe. If you have any issues, reply to the receipt.
        </p>
      </div>

      <div style={{ marginTop: 14 }}>
        <Link href="/" className="muted">← Back to home</Link>
      </div>
    </div>
  );
}
