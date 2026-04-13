# Configuration

Runtime settings use **environment variables**. Next.js loads `.env`, `.env.local`, and so on (see Next.js docs). Do not commit secrets.

## Variables

| Name | Required | Purpose |
|------|----------|---------|
| `DATABASE_URL` | Yes (for Prisma) | PostgreSQL connection string for Prisma, including optional `?schema=public` |

## Local examples

Copy `.env.example` to `.env` and adjust. The example uses host port **5433** so it is less likely to clash with another PostgreSQL instance on **5432**.

Docker Compose sets `DATABASE_URL` for the `web` service to reach the `db` container on the internal network.
