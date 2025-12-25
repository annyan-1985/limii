// app/layout.tsx
import "./globals.css";

import Link from "next/link";
import { Inter } from "next/font/google";

import CartButton from "@/components/CartButton";
import HeaderAuth from "@/components/HeaderAuth";
import { auth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    default: "Limii",
    template: "%s · Limii",
  },
  description: "Limii — customisable kids stickers & planning boards",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page">
          {/* Announcement bar (MeeQ-style) */}
          <div className="announce">
            <div className="container">
              <span>
                ✨ New Year drop is coming — customise your 2026 calendar with school-uniform stickers.
              </span>
              <span className="muted">
                Tip: press <span className="kbd">⌘</span> + <span className="kbd">K</span> (soon) to search
              </span>
            </div>
          </div>

          {/* Sticky header */}
          <header className="header">
            <div className="container">
              <div className="headerInner">
                  <Link href="/" className="brand" aria-label="Limii home">
                      <img
                          src="/images/limii.png"
                          alt="Limii"
                          width={80}
                          height={80}
                          className="brandLogo"
                      />
                      <span>Limii</span>
                  </Link>

                <nav className="nav" aria-label="Primary">
                  <Link href="/">Home</Link>
                  <Link href="/products">Shop</Link>
                </nav>

                <div className="headerRight">
                  <div className="search" aria-label="Search">
                    <span aria-hidden>⌕</span>
                    <input placeholder="Search products (coming soon)…" />
                  </div>
                  <HeaderAuth
                    isAuthed={!!session}
                    name={session?.user?.name}
                    image={session?.user?.image}
                  />
                  <CartButton />
                </div>
              </div>
            </div>
          </header>

          <main className="main">
            <div className="container">{children}</div>
          </main>

          <footer className="footer">
            <div className="container">
              <div className="footerInner">
                <span>© {new Date().getFullYear()} Limii</span>
                <span className="muted">Made with ❤️ in Australia</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
