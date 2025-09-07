<<<<<<< HEAD
# MyPro - Minimal Google Login (Next.js App Router + NextAuth v5)

## Quick Start

1) Install dependencies
```bash
npm install
```

2) Create `.env.local` from `.env.example` and fill in your Google OAuth credentials.
   - Make sure the Authorized redirect URI in Google Cloud Console includes:
     `http://localhost:3000/api/auth/callback/google`

3) Run
```bash
npm run dev
```

Open http://localhost:3000 and click "Sign in with Google".

## Files

- `app/api/auth/[...nextauth]/route.ts` - NextAuth (Auth.js) catch-all API route
- `lib/auth.ts` - NextAuth configuration
- `components/LoginButton.tsx` - client component to trigger Google login
- `app/page.tsx` - server component showing login or user info
- `app/layout.tsx` - basic layout
=======
# limii
limii
>>>>>>> 0f338f11c60155e77af19f8effe97c32d3a453de
