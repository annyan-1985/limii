export const runtime = "nodejs";

import { NextResponse } from "next/server";

import { PRODUCTS } from "@/data/products";
import { stripe } from "@/lib/stripe";

type CheckoutItem = { id: string; quantity: number };

function toAbsoluteUrl(origin: string, maybeUrl?: string) {
  if (!maybeUrl) return undefined;
  if (maybeUrl.startsWith("http://") || maybeUrl.startsWith("https://")) return maybeUrl;
  if (maybeUrl.startsWith("/")) return new URL(maybeUrl, origin).toString();
  return undefined;
}

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin") ?? process.env.NEXTAUTH_URL ?? "http://localhost:3000";
    const body = (await req.json()) as { items?: CheckoutItem[] };

    const items = Array.isArray(body?.items) ? body.items : [];
    if (items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Validate and build line items server-side to prevent price tampering.
    const line_items = items.map(({ id, quantity }) => {
      const q = Math.max(1, Math.min(99, Number(quantity) || 1));
      const product = PRODUCTS.find((p) => p.id === id);
      if (!product) throw new Error(`Invalid product id: ${id}`);

      const image = toAbsoluteUrl(origin, product.imageUrl);

      return {
        quantity: q,
        price_data: {
          currency: "aud",
          unit_amount: product.priceCents,
          product_data: {
            name: product.title,
            ...(image ? { images: [image] } : {}),
            metadata: {
              productId: product.id,
              slug: product.slug,
            },
          },
        },
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,

      // If you’re selling physical products, this collects a shipping address.
      // Remove it if you only sell digital goods.
      shipping_address_collection: {
        allowed_countries: ["AU"],
      },

      // Optional niceties:
      // allow_promotion_codes: true,
      // automatic_tax: { enabled: true },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      { error: e?.message ?? "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
