"use client";
import { useCart } from "@/lib/store/cart";
import { formatAUD } from "@/data/products";

export default function CartPage() {
  const { items, remove, clear } = useCart();
  const total = items.reduce((s, i) => s + i.priceCents * i.quantity, 0);

  if (items.length === 0) return <main style={{ padding: 24 }}>Your cart is empty.</main>;

  return (
    <main style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Your Cart</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((i) => (
          <li key={i.id} style={{ display: "flex", gap: 8, justifyContent: "space-between", marginBottom: 8 }}>
            <span>{i.title} × {i.quantity}</span>
            <span>{formatAUD(i.priceCents * i.quantity)}</span>
            <button onClick={() => remove(i.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <hr />
      <p>Total: {formatAUD(total)}</p>
      <button onClick={clear} style={{ marginTop: 12 }}>Clear cart</button>
    </main>
  );
}
