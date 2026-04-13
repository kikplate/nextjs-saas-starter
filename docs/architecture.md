# Architecture

This starter is a **Next.js App Router** application: UI routes live under `src/app`, shared libraries under `src/lib`, and the database schema under `prisma`.

## Layout

| Area | Path | Role |
|------|------|------|
| Pages | `src/app` | Routes, layouts, and Route Handlers (`route.ts`) |
| Data | `src/lib/prisma.ts` | Prisma client singleton |
| Validation | `src/lib/user-validators.ts` | Zod schemas for API input |
| Persistence | `prisma/schema.prisma` | PostgreSQL schema via Prisma |

## Request flow

1. A Route Handler (`route.ts`) receives the HTTP request.
2. JSON bodies are parsed; invalid JSON returns `400` with `invalid_json`.
3. Zod validates payloads; failures map to `invalid_input`.
4. Prisma reads or writes PostgreSQL; unique violations on email return `409` with `conflict`.

## Migrations

Schema changes are versioned with **Prisma Migrate** (`prisma/migrations`). In production and Docker, `prisma migrate deploy` runs before `next start`.

## Extending for SaaS

Add authentication (Auth.js, Clerk, etc.), tenant scoping on models, billing (Stripe), and background jobs. Keep Route Handlers thin and move rules into `src/lib` or dedicated service modules as the app grows.
