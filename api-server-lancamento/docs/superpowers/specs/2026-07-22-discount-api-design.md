# Discount API — Design

## Purpose

Single-endpoint backend that gates a configured "discount word" behind a
password. Runs in Docker with a runtime-configurable port. All secrets and
the returned word come from environment variables.

## Stack

- Node.js (LTS) + Express 5
- Node built-in test runner (`node:test`) — no test framework dependency
- Docker base image `node:22-alpine`

## Environment variables

| Var | Required | Default | Meaning |
|-----|----------|---------|---------|
| `PORT` | no | `3000` | Port the server listens on |
| `DISCOUNT_PASSWORD` | yes | — | Correct password |
| `DISCOUNT_WORD` | yes | — | Word returned on success |

Server exits non-zero at startup if `DISCOUNT_PASSWORD` or `DISCOUNT_WORD`
is missing/empty. Loud startup failure beats silent 403s in production.

## Endpoint

`POST /discount`

- Request: `Content-Type: application/json`, body `{"password": "<string>"}`
- Correct password → `200`, `Content-Type: text/plain`, body = `DISCOUNT_WORD`
- Wrong / missing / empty / non-string password → `403 Forbidden`
- Malformed JSON body → `403` (treated as no valid password, not a 400 —
  keeps the endpoint's only failure mode uniform and leaks nothing)

### Password comparison

Compare using `crypto.timingSafeEqual` over UTF-8 buffers. Because
`timingSafeEqual` throws on unequal-length buffers, guard length first; a
length mismatch is simply a wrong password (return 403). This is a trust
boundary, so constant-time compare is used rather than `===`.

## Data flow

```
client → POST /discount {password}
  → express.json() parses body
  → handler: extract password (string?) 
      → timingSafeEqual(password, DISCOUNT_PASSWORD)?
          yes → 200 text/plain DISCOUNT_WORD
          no  → 403 Forbidden
```

## Components / files

- `server.js` — creates and exports the Express `app` (for tests) and, when
  run directly, validates env and calls `app.listen(PORT)`. Reads config
  from `process.env` inside a small factory so tests can inject values.
- `test.js` — `node:test` cases: correct→word/200, wrong→403, missing→403,
  malformed-json→403.
- `package.json` — `express` dep; `start` and `test` scripts; `"type":
  "module"`.
- `Dockerfile` — `node:22-alpine`, copy, `npm ci --omit=dev`, non-root user,
  `CMD ["node","server.js"]`. Port is read at runtime from `PORT`.
- `.dockerignore`, `.gitignore` — exclude `node_modules`, `.env`.
- `.env.example` — documents the three vars.
- `README.md` — build/run/curl examples.

## Docker / port configurability

Port is not baked in. `docker run -e PORT=8080 -p 8080:8080 <image>` makes
the app listen on 8080. The `EXPOSE` line is documentation only; the actual
port comes from the `PORT` env var at runtime.

## Error handling

- Missing required env at startup → log to stderr, `process.exit(1)`.
- Any wrong/absent/malformed password → `403 Forbidden` (uniform).
- express.json() parse error → caught and mapped to 403 (not surfaced as
  500/400).

## Testing

`node --test` runs `test.js` against the exported `app` (via a request to an
ephemeral listener or `app` + a light HTTP call). Four assertions cover the
full behavior matrix. No mocking framework.

## Out of scope (YAGNI)

Rate-limiting, HTTPS/TLS (terminate at a reverse proxy), auth sessions,
databases, multiple endpoints, request logging. Add when real traffic or
requirements demand them.
