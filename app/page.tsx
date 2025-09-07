// app/page.tsx
import { auth } from "@/lib/auth";
import LoginButton from "@/components/LoginButton";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";

export default async function Page() {
  const session = await auth();

  if (!session) {
    return (
      <main style={{ maxWidth: 420, margin: "0 auto" }}>
        <h1 style={{ textAlign: "center" }}>Welcome</h1>
        <p style={{ color: "#555" }}>
          Please sign in with your Google account to continue.
        </p>
        <LoginButton />
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 520, margin: "0 auto" }}>
      <div style={{ marginBottom: 16 }}>
        <Link href="/products" style={{ color: "#2563eb" }}>
          → Go to Products
        </Link>
      </div>

      <h1 style={{ textAlign: "center" }}>
        Hello, {session.user?.name ?? "User"} 👋
      </h1>

      <p style={{ wordBreak: "break-all" }}>
        <b>Email:</b> {session.user?.email}
      </p>

      {session.user?.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={session.user.image}
          alt="avatar"
          style={{ width: 96, height: 96, borderRadius: "50%", marginTop: 12 }}
        />
      )}

      <SignOutButton />
    </main>
  );
}
