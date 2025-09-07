// app/layout.tsx
import Link from "next/link";
import CartButton from "@/components/CartButton";

export const metadata = {
  title: "MyPro",
  description: "Demo shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        {/* 顶部导航条 */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "12px 16px",
            borderBottom: "1px solid #eee",
            position: "sticky",
            top: 0,
            background: "#fff",
            zIndex: 10,
          }}
        >
          <nav style={{ display: "flex", gap: 12 }}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
          </nav>
          {/* 右上角购物车图标与数量徽标 */}
          <CartButton />
        </header>

        <main style={{ padding: "16px" }}>{children}</main>
      </body>
    </html>
  );
}
