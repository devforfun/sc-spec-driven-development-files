import { test, after, before } from 'node:test'
import assert from 'node:assert/strict'
import type { FastifyInstance } from 'fastify'
import { buildApp } from '../src/app'

let app: FastifyInstance

before(async () => {
  app = buildApp()
  await app.ready()
})

after(async () => {
  await app.close()
})

test('GET / serves the AgentClinic home page', async () => {
  const res = await app.inject({ method: 'GET', url: '/' })

  assert.equal(res.statusCode, 200)
  assert.match(res.headers['content-type'] ?? '', /text\/html/)
  assert.match(res.body, /Relief for over-prompted agents/)
  assert.match(res.body, /Coming soon/)
})

test('GET /health reports the clinic is open', async () => {
  const res = await app.inject({ method: 'GET', url: '/health' })

  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.json(), { status: 'ok' })
})
