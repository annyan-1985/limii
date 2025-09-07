// components/LoginButton.tsx
"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      style={{
        padding: "0.75rem 1rem",
        fontSize: "1rem",
        background: "#4285F4",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        width: "100%",
      }}
    >
      Sign in with Google
    </button>
  );
}
