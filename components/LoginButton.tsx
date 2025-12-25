"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button onClick={() => signIn("google")} className="btn btnPrimary" style={{ width: "100%" }}>
      Sign in with Google
    </button>
  );
}
