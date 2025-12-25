"use client";

import { signIn, signOut } from "next-auth/react";

type Props = {
  isAuthed: boolean;
  name?: string | null;
  image?: string | null;
};

export default function HeaderAuth({ isAuthed, name, image }: Props) {
  if (isAuthed) {
    return (
      <div className="authArea">
        <div className="authUser" title={name ?? "Signed in"}>
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="authAvatar" src={image} alt="avatar" />
          ) : (
            <span className="authAvatar" aria-hidden />
          )}
          <span className="authName">{name ?? "Account"}</span>
        </div>

        <button className="btn btnSm" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="authArea">
      <div className="authNote">
      </div>
      <button
        className="btn btnPrimary btnSm"
        onClick={() => signIn("google")}
        title="Sign in to continue. This demo uses Google Sign‑In."
      >
        Sign in
      </button>
    </div>
  );
}
