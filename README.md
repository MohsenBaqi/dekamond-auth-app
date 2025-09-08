# Dkamond Auth App

This is a minimal **Next.js 15** app with **TypeScript, TailwindCSS, shadcn/ui**, and **localStorage-based login**.  
It simulates a login flow with user redirection and a protected dashboard.

---

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- LocalStorage for session handling (no backend)

---

## Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

---

## Development

Run the dev server with Turbopack:

```bash
pnpm dev
```

App will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
 ├── layout.tsx       # Root layout
 ├── page.tsx         # Login page
 └── dashboard/
      └── page.tsx    # Protected dashboard
components/
 └── ui/              # shadcn/ui components
lib/
 └── auth.ts          # LocalStorage helpers
```

---

## Features

- Login with mock user data
- Redirects to `/dashboard` after login
- Persists user in `localStorage`
- Logout clears session and redirects to `/`
- Responsive design with Tailwind
- Accessible UI with shadcn/ui

---

## Build

Create an optimized production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

---

## Testing (optional)

If you add Cypress or Playwright later, you can run:

```bash
pnpm test
```

---

## License

MIT
