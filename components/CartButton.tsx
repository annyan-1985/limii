"use client";
import { useCart } from "@/lib/store/cart";
import Link from "next/link";

export default function CartButton() {
  const count = useCart((s) => s.items.reduce((n, i) => n + i.quantity, 0));

  return (
    <Link href="/cart" style={{ position: "relative", display: "inline-block" }}>
      🛒 Cart
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: -8,
            right: -12,
            background: "red",
            color: "#fff",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: 12,
          }}
        >
          {count}
        </span>
      )}
    </Link>
  );
}
