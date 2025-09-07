// components/SignOutButton.tsx
"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      style={{
        marginTop: 24,
        padding: "0.6rem 1rem",
        fontSize: "1rem",
        background: "#eee",
        border: "1px solid #ccc",
        borderRadius: 6,
        cursor: "pointer",
      }}
    >
      Sign out
    </button>
  );
}
