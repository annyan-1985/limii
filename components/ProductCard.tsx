"use client";

import { Product, formatAUD } from "@/data/products";
import { useCart } from "@/lib/store/cart";

export default function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);

  return (
    <div id={product.slug} className="card pCard">
      <div className="pMedia">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl ?? "https://placehold.co/800x600?text=Product"}
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="pBody">
        <div className="pTitle">{product.title}</div>

        <div className="pMetaRow">
          <div className="pPrice">{formatAUD(product.priceCents)}</div>
          <span className="badge" style={{ background: "rgba(15, 23, 42, 0.04)", border: "1px solid rgba(15, 23, 42, 0.10)" }}>
            In stock
          </span>
        </div>

        <button onClick={() => add(product)} className="btn btnPrimary" style={{ marginTop: 2 }}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
