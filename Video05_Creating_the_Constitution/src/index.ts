import { buildApp } from './app'

const port = Number(process.env.PORT ?? 3000)
const host = process.env.HOST ?? '0.0.0.0'

const app = buildApp()

app
  .listen({ port, host })
  .then((address) => {
    app.log.info(`🩺 AgentClinic is open at ${address}`)
  })
  .catch((err) => {
    app.log.error(err)
    process.exit(1)
  })
