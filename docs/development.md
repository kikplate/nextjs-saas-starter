# Development

## Requirements

- Node.js 20+
- npm (lockfile: `package-lock.json`). After `npm ci`, the `prepare` script runs `prisma generate` when the Prisma schema is present.
- PostgreSQL 16 compatible server (Docker Compose provides one)

## Database

Start Postgres:

```bash
docker compose up -d db
```

Apply migrations and run the dev server:

```bash
export DATABASE_URL=postgresql://app:app@localhost:5433/app?schema=public
npx prisma migrate deploy
npm run dev
```

Or put `DATABASE_URL` in `.env` (see `.env.example`).

## Tests

```bash
make test
```

Vitest runs unit tests (for example Zod validators) without a database. Add integration tests as needed.

## Continuous integration

Workflow: `.github/workflows/ci.yml`. It starts PostgreSQL, runs `prisma migrate deploy`, `npm run lint`, `npm run test`, and `npm run build`.

## Suggested next steps

- Add an auth provider and protect `/dashboard`.
- Add Stripe or another billing integration for SaaS.
- Add E2E tests (Playwright) for critical flows.
