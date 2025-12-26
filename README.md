I want to start the service locally:

- npm install
- npm run dev
- Copy .env.local.example to .env.local
- Fill in Google + NextAuth + Stripe keys

Payments

- Cart checkout uses Stripe Checkout (server-side session creation at /api/checkout)
- Set STRIPE_SECRET_KEY in .env.local (and also in Vercel Env Vars)