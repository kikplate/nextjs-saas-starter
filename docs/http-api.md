# HTTP API

Base URL in local examples: `http://localhost:3000`. JSON uses UTF-8 and `Content-Type: application/json` unless noted.

## Health

### `GET /healthz`

Liveness: process is up. No database check.

**Response:** `200` body `ok` (plain text).

### `GET /readyz`

Readiness: runs `SELECT 1` through Prisma against PostgreSQL.

| Status | Body |
|--------|------|
| `200` | `ready` (plain text) |
| `503` | `not_ready` (plain text) |

## Users (`/v1`)

### `POST /v1/users`

Creates a user.

**Request JSON**

| Field | Type | Notes |
|-------|------|-------|
| `email` | string | Valid email; stored lowercased after trim |
| `name` | string | Trimmed, non-empty |

**Responses**

| Status | Meaning |
|--------|---------|
| `201` | Created; JSON user object |
| `400` | Invalid JSON (`invalid_json`) or validation (`invalid_input`) |
| `409` | Email already exists (`conflict`) |

**Example**

```bash
curl -sS -X POST http://localhost:3000/v1/users \
  -H 'Content-Type: application/json' \
  -d '{"email":"you@example.com","name":"You"}'
```

**Success body shape**

```json
{
  "id": "uuid",
  "email": "you@example.com",
  "name": "You",
  "created_at": "2026-04-13T12:00:00.000Z"
}
```

### `GET /v1/users/{id}`

`{id}` must be a UUID.

| Status | Meaning |
|--------|---------|
| `200` | User object as above |
| `400` | Malformed id (`invalid_id`) |
| `404` | Unknown id (`not_found`) |
