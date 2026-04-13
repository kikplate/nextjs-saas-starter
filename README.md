# nextjs-saas-starter
[![View on KikPlate](https://img.shields.io/static/v1?label=KikPlate&message=nextjs-saas-starter&color=0366d6&style=flat-square)](https://kikplate.dev/plates/nextjs-saas-starter)

Next.js 15 (App Router) starter with Tailwind CSS, Prisma, PostgreSQL, example user API, and Docker-friendly defaults—ready for authentication, tenants, and billing.

**Full documentation:** see the [docs](docs/README.md) folder (architecture, configuration, HTTP API, operations, and development).

## Layout

- `src/app` — UI routes and Route Handlers (`healthz`, `readyz`, `/v1/users`)
- `src/lib` — Prisma client, validation (Zod), serialization helpers
- `prisma` — schema and SQL migrations

## Run locally

**Database + app (production-style):**

```bash
docker compose up --build
```

**Development (hot reload):**

```bash
docker compose up -d db
cp .env.example .env
npx prisma migrate deploy
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure

- **`DATABASE_URL`** — PostgreSQL URL for Prisma (see `.env.example`). Compose maps Postgres to host port **5433** to avoid conflicting with another instance on 5432.

## HTTP surface

- `GET /healthz`
- `GET /readyz`
- `POST /v1/users` — JSON `{"email":"...","name":"..."}`
- `GET /v1/users/{id}` — UUID

## Tests

```bash
make test
```

## Kikplate manifest

This repository includes `kikplate.yaml` for registry metadata. Set `owner` to your GitHub username before submitting the plate. After submission, add `verification_token` from Kikplate and run verification.
