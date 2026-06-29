import path from 'node:path'
import Fastify, { type FastifyInstance } from 'fastify'
import fastifyView from '@fastify/view'
import { Eta } from 'eta'

/**
 * Builds the AgentClinic Fastify app: view engine + routes, no network listen.
 * Kept separate from `index.ts` so tests can `inject` without binding a port.
 */
export function buildApp(): FastifyInstance {
  const app = Fastify({
    logger: true,
  })

  // Server-side rendering via Eta, with a shared base layout.
  app.register(fastifyView, {
    engine: { eta: new Eta() },
    root: path.join(__dirname, 'views'),
    layout: 'layout.eta',
  })

  // Home: the minimal AgentClinic front desk.
  app.get('/', async (_request, reply) => {
    return reply.view('home.eta', {
      title: 'AgentClinic — relief for over-prompted agents',
    })
  })

  // Health: is the clinic open?
  app.get('/health', async () => {
    return { status: 'ok' }
  })

  return app
}
