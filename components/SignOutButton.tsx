"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button onClick={() => signOut()} className="btn" style={{ marginTop: 18 }}>
      Sign out
    </button>
  );
}
