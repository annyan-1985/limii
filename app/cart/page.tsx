"use client";

import Link from "next/link";

import { formatAUD } from "@/data/products";
import { useCart } from "@/lib/store/cart";

export default function CartPage() {
  const { items, remove, clear } = useCart();
  const total = items.reduce((s, i) => s + i.priceCents * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="card" style={{ padding: 18 }}>
        <h1 style={{ marginTop: 0 }}>Your cart is empty</h1>
        <p className="muted">Add something cute and come back 🙂</p>
        <Link href="/products" className="btn btnPrimary" style={{ display: "inline-block" }}>
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <div className="sectionHeader">
        <div>
          <h1 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.02em" }}>Your Cart</h1>
          <div className="muted" style={{ marginTop: 6 }}>Review items and remove anything you don’t want.</div>
        </div>
        <button onClick={clear} className="btn">Clear cart</button>
      </div>

      <ul className="list">
        {items.map((i) => (
          <li key={i.id} className="cartRow">
            <div>
              <div style={{ fontWeight: 800 }}>{i.title}</div>
              <div className="muted" style={{ marginTop: 4 }}>
                {i.quantity} × {formatAUD(i.priceCents)}
              </div>
            </div>
            <div style={{ display: "grid", justifyItems: "end", gap: 8 }}>
              <div style={{ fontWeight: 900 }}>{formatAUD(i.priceCents * i.quantity)}</div>
              <button onClick={() => remove(i.id)} className="btn">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="card" style={{ padding: 18, marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div>
            <div className="muted">Total</div>
            <div style={{ fontSize: 22, fontWeight: 950, letterSpacing: "-0.02em" }}>{formatAUD(total)}</div>
          </div>
          <button className="btn btnPrimary">Checkout (demo)</button>
        </div>
      </div>
    </div>
  );
}
