// components/ProductTicker.tsx
import Link from "next/link";

import { PRODUCTS, formatAUD } from "@/data/products";

/**
 * CSS-only marquee style product ticker.
 * - Automatically reflects whatever is in PRODUCTS.
 * - Duplicates items for a seamless loop.
 */
export default function ProductTicker() {
  const base = Array.isArray(PRODUCTS) ? PRODUCTS : [];
  const safe = base.filter((p) => Boolean(p?.title));

  // Seamless marquee: render twice.
  const items = [...safe, ...safe];

  if (safe.length === 0) return null;

  return (
    <section className="ticker" aria-label="Product promotions">
      <div className="tickerInner">
        <div className="tickerLabel">
          <span className="badge" style={{ marginRight: 10 }}>
            Hot
          </span>
          <span className="tickerLabelText">New & popular:</span>
        </div>

        <div className="tickerViewport" role="presentation">
          <div className="tickerTrack">
            {items.map((p, idx) => (
              <Link
                key={`${p.id}-${idx}`}
                href="/products"
                className="tickerItem"
                title={p.title}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="tickerImg"
                  src={p.imageUrl ?? "https://placehold.co/80x80?text=Limii"}
                  alt={p.title}
                />
                <span className="tickerTitle">{p.title}</span>
                <span className="tickerDot" aria-hidden>
                  •
                </span>
                <span className="tickerPrice">{formatAUD(p.priceCents)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
