// components/ProductCard.tsx
"use client";

import { Product, formatAUD } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  // 保险起见再兜底一次，避免 undefined 时报错
  if (!product) return null;

  const handleAdd = () => {
    alert(`Added to cart: ${product.title}`);
  };

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
      <div style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: 8, background: "#fafafa" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl ?? "https://via.placeholder.com/800x600?text=Product"}
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ fontWeight: 600 }}>{product.title}</div>
      <div style={{ color: "#111827" }}>{formatAUD(product.priceCents)}</div>
      <button
        onClick={handleAdd}
        style={{
          marginTop: "auto",
          padding: "0.6rem 1rem",
          fontSize: "1rem",
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
