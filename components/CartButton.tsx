"use client";

import Link from "next/link";
import { useCart } from "@/lib/store/cart";

export default function CartButton() {
  const count = useCart((s) => s.items.reduce((n, i) => n + i.quantity, 0));

  return (
    <Link href="/cart" className="cartLink" aria-label="Cart">
      <span aria-hidden>🛒</span>
      <span>Cart</span>
      {count > 0 && <span className="cartBadge">{count}</span>}
    </Link>
  );
}
