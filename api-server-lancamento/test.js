import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { createApp } from './server.js'

const PASSWORD = 's3cret-pw'
const WORD = 'BLACKFRIDAY'

let server, base

before(async () => {
  server = createApp({ password: PASSWORD, word: WORD }).listen(0)
  await new Promise((resolve) => server.once('listening', resolve))
  base = `http://127.0.0.1:${server.address().port}`
})

after(() => new Promise((resolve) => server.close(resolve)))

function post(body) {
  return fetch(`${base}/discount`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body,
  })
}

test('correct password returns the word as plain text', async () => {
  const res = await post(JSON.stringify({ password: PASSWORD }))
  assert.equal(res.status, 200)
  assert.match(res.headers.get('content-type'), /text\/plain/)
  assert.equal(await res.text(), WORD)
})

test('wrong password returns 403 Forbidden', async () => {
  const res = await post(JSON.stringify({ password: 'wrong' }))
  assert.equal(res.status, 403)
  assert.equal(await res.text(), 'Forbidden')
})

test('missing password returns 403', async () => {
  const res = await post(JSON.stringify({}))
  assert.equal(res.status, 403)
})

test('empty password returns 403', async () => {
  const res = await post(JSON.stringify({ password: '' }))
  assert.equal(res.status, 403)
})

test('non-string password returns 403', async () => {
  const res = await post(JSON.stringify({ password: 12345 }))
  assert.equal(res.status, 403)
})

test('malformed JSON returns 403', async () => {
  const res = await post('{ not valid json')
  assert.equal(res.status, 403)
})
