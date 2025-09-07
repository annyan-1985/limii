// app/products/page.tsx
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { auth } from "@/lib/auth";

export const metadata = { title: "Products | MyPro" };

export default async function ProductsPage() {
  const session = await auth();
  // if (!session) return <div style={{ padding: 24 }}>Please sign in to view products.</div>;

  // 防御：确认 PRODUCTS 是数组
  if (!Array.isArray(PRODUCTS)) {
    return <main style={{ padding: 24 }}>No products data.</main>;
  }

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "1.5rem" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>All Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
