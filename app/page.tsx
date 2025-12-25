// app/page.tsx
import Link from "next/link";

import { auth } from "@/lib/auth";
import LoginButton from "@/components/LoginButton";
import SignOutButton from "@/components/SignOutButton";
import { PRODUCTS } from "@/data/products";

export default async function Page() {
  const session = await auth();

  const thumbs = PRODUCTS.slice(0, 2).map((p) => p.imageUrl).filter(Boolean) as string[];

  if (!session) {
    return (
      <div>
        <section className="hero">
          <div className="heroInner">
            <div>
              <div className="hEyebrow">
                <span className="badge">2026 Ready</span>
                <span className="muted">Customisable planners + stickers for kids</span>
              </div>

              <h1 className="hTitle">
                Make planning feel like play.
              </h1>
              <p className="hDesc">
                Limii helps kids manage school, training, and hobbies with cute, familiar stickers
                (think school uniforms, sports, instruments) and a clean fridge‑friendly board.
              </p>

              <div className="hActions">
                <Link href="/products" className="btn btnPrimary">
                  Browse products
                </Link>
                <Link href="/products" className="btn">
                  See what's new
                </Link>
              </div>
            </div>

            <div className="heroCard">
              <p className="heroCardTitle">Sign in to continue</p>
              <p className="muted" style={{ marginTop: 0 }}>
                This demo uses Google Sign‑In.
              </p>

              <LoginButton />

              <div className="section" style={{ marginTop: 16 }}>
                <div className="heroMiniGrid">
                  {thumbs.map((src) => (
                    <div key={src} className="miniThumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="Product preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                  {thumbs.length < 2 && (
                    <div className="miniThumb" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <h2>Featured</h2>
            <Link className="muted" href="/products">
              View all →
            </Link>
          </div>

          <div className="grid">
            {PRODUCTS.slice(0, 3).map((p) => (
              <div key={p.id} className="card" style={{ padding: 14 }}>
                <div className="muted" style={{ fontSize: 12, marginBottom: 6 }}>
                  Starter pack
                </div>
                <div style={{ fontWeight: 800 }}>{p.title}</div>
                <div className="muted" style={{ marginTop: 6 }}>
                  From {(p.priceCents / 100).toFixed(2)} AUD
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="hero">
        <div className="heroInner">
          <div>
            <div className="hEyebrow">
              <span className="badge">Signed in</span>
              <span className="muted">Welcome back{session.user?.name ? `, ${session.user.name}` : ""}.</span>
            </div>

            <h1 className="hTitle">Pick a sticker set to start.</h1>
            <p className="hDesc">
              Head to the shop to add items to cart, then check out the cart page styling.
            </p>

            <div className="hActions">
              <Link href="/products" className="btn btnPrimary">
                Go to shop
              </Link>
              <SignOutButton />
            </div>

            <p className="muted" style={{ marginTop: 16, wordBreak: "break-all" }}>
              <b>Email:</b> {session.user?.email}
            </p>
          </div>

          <div className="heroCard">
            <p className="heroCardTitle">Your profile</p>
            {session.user?.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={session.user.image}
                alt="avatar"
                style={{ width: 84, height: 84, borderRadius: 999, border: "1px solid var(--border)" }}
              />
            )}
            <p className="muted" style={{ marginTop: 10 }}>
              We’ll use your sign‑in only to personalise the demo.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Popular right now</h2>
          <Link className="muted" href="/products">
            See all →
          </Link>
        </div>
        <div className="grid">
          {PRODUCTS.map((p) => (
            <Link key={p.id} href="/products" className="card" style={{ padding: 14 }}>
              <div style={{ fontWeight: 800 }}>{p.title}</div>
              <div className="muted" style={{ marginTop: 6 }}>
                {(p.priceCents / 100).toLocaleString("en-AU", { style: "currency", currency: "AUD" })}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
