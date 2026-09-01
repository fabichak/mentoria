# Discount API

One endpoint, `POST /discount`. Send the password, get the configured word
back; send anything wrong, get `403 Forbidden`.

## Configuration (env vars)

| Var | Required | Default | Meaning |
|-----|----------|---------|---------|
| `PORT` | no | `3000` | Port the server listens on |
| `DISCOUNT_PASSWORD` | yes | — | Correct password |
| `DISCOUNT_WORD` | yes | — | Word returned on success |

Copy `.env.example` to `.env` and fill in values.

## Run with Docker

```bash
docker build -t discount-api .
docker run --rm -e DISCOUNT_PASSWORD=MENTORIA-CODE-LEADERSHIP -e DISCOUNT_WORD=MARTIN10 \
  -e PORT=5001 -p 5001:8080 discount-api
```

## Run locally (Node 22+)

```bash
npm install
DISCOUNT_PASSWORD=s3cret DISCOUNT_WORD=BLACKFRIDAY PORT=8080 npm start
```

## Try it

```bash
# Correct password -> the word, HTTP 200
curl -s -X POST https://api.martinfabichak.com/discount \
  -H 'content-type: application/json' \
  -d '{"password":"s3cret"}'
# -> BLACKFRIDAY

# Wrong password -> HTTP 403
curl -s -o /dev/null -w '%{http_code}\n' -X POST localhost:8080/discount \
  -H 'content-type: application/json' \
  -d '{"password":"nope"}'
# -> 403
```

## Test

```bash
npm test
```
