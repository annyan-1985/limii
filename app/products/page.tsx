// app/products/page.tsx
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export const metadata = { title: "Shop" };

export default async function ProductsPage() {
  if (!Array.isArray(PRODUCTS) || PRODUCTS.length === 0) {
    return <div className="muted">No products data.</div>;
  }

  return (
    <div>
      <div className="sectionHeader">
        <div>
          <h1 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.02em" }}>All Products</h1>
          <div className="muted" style={{ marginTop: 6 }}>
            {PRODUCTS.length} items • Shipping calc at checkout
          </div>
        </div>

        <div className="muted" style={{ fontSize: 13 }}>
          Inspired by clean storefront layouts (search + mega‑menus + featured collections).
        </div>
      </div>

      <div className="grid">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
