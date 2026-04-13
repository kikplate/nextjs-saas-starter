# Operations

## Docker Compose

From the repository root:

```bash
docker compose up --build
```

Services:

- `db`: PostgreSQL 16. The host maps **5433 → 5432** to reduce clashes with a local Postgres on 5432.
- `web`: built from the `Dockerfile`, listens on **3000**. Runs `prisma migrate deploy` before `npm run start`.

## Container image

The `Dockerfile` installs dependencies, runs `prisma generate` and `next build`, then starts the production server as a non-root user. The image includes devDependencies used at build time; trim further for hardened production images if needed.

## Makefile

| Target | Action |
|--------|--------|
| `make dev` | `npm run dev` |
| `make test` | `npm run test` |
| `make lint` | `npm run lint` |
| `make build` | `npm run build` |

## Observability

Logs go to stdout. Use your platform’s log aggregation for deployments.

## Production checklist (beyond this repo)

Add TLS at the edge, authentication and authorization, rate limiting, secret management, backups, and dependency scanning aligned with your organization’s policy.
