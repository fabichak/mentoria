import express from 'express'
import { timingSafeEqual } from 'node:crypto'
import { pathToFileURL } from 'node:url'

export function createApp({ password, word }) {
  const app = express()
  app.use(express.json())

  const expected = Buffer.from(password, 'utf8')

  // Constant-time compare. timingSafeEqual throws on unequal-length
  // buffers, so guard length first; a length mismatch is a wrong password.
  function passwordMatches(candidate) {
    if (typeof candidate !== 'string') return false
    const got = Buffer.from(candidate, 'utf8')
    if (got.length !== expected.length) return false
    return timingSafeEqual(got, expected)
  }

  app.post('/discount', (req, res) => {
    if (passwordMatches(req.body?.password)) {
      res.type('text/plain').send(word)
    } else {
      res.status(403).send('Forbidden')
    }
  })

  // Malformed JSON body -> uniform 403; anything else is a real server error.
  app.use((err, req, res, next) => {
    if (err && err.type === 'entity.parse.failed') {
      return res.status(403).send('Forbidden')
    }
    console.error(err)
    res.status(500).send('Internal Server Error')
  })

  return app
}

// Run directly (node server.js): validate env, then listen.
const isMain = import.meta.url === pathToFileURL(process.argv[1]).href
if (isMain) {
  const password = process.env.DISCOUNT_PASSWORD
  const word = process.env.DISCOUNT_WORD
  if (!password || !word) {
    console.error('DISCOUNT_PASSWORD and DISCOUNT_WORD must be set')
    process.exit(1)
  }
  const port = Number(process.env.PORT) || 3000
  createApp({ password, word }).listen(port, () => {
    console.log(`discount API listening on ${port}`)
  })
}
