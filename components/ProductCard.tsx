"use client";

import { Product, formatAUD } from "@/data/products";
import { useCart } from "@/lib/store/cart";

export default function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: 8 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl ?? "https://placehold.co/800x600?text=Product"}
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ fontWeight: 600 }}>{product.title}</div>
      <div>{formatAUD(product.priceCents)}</div>
      <button
        onClick={() => add(product)}
        style={{
          marginTop: "auto",
          padding: "0.6rem 1rem",
          background: "#111827",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
