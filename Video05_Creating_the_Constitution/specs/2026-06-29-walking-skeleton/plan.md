# Plan — Walking Skeleton (Phase 1)

Numbered task groups. Each leaves the project in a working state.

## 1. Dependencies & tooling
- Add runtime deps: `fastify`, `eta`, and `@fastify/view` (Eta integration).
- Confirm dev deps: `typescript` (present); add `tsx` (or `ts-node`) for a dev runner.
- Add npm scripts:
  - `dev` — run the server from TypeScript with reload.
  - `build` — `tsc` to `dist/`.
  - `start` — run the built server.
- Sanity check: `npm run build` compiles the existing `src/index.ts`.

## 2. Fastify server
- Replace `src/index.ts` boilerplate with a Fastify server.
- Bind to a configurable port (env `PORT`, default e.g. 3000).
- Register the Eta view engine via `@fastify/view`.
- Log a clear "AgentClinic is open" message on listen.

## 3. Page rendering & base layout
- Create a base Eta layout under `src/views/` (HTML shell: `<head>`, title,
  minimal static styling) that pages render into.
- Wire up `GET /` to render a view through this layout.
- Confirm a rendered HTML response comes back end to end.

## 4. Minimal AgentClinic home page
- Build the actual home page view rendered at `GET /`.
- Content: a welcoming hero ("relief for over-prompted agents"), a one-line
  description of the clinic, and a nod to what's coming (ailments, therapies,
  booking — "coming soon").
- Copy carries personality per the mission; keep markup and styling minimal but
  intentional so it's presentable in a modern browser.

## 5. Health route
- Add `GET /health` returning `{ status: "ok" }` (JSON, 200).

## 6. Smoke test
- Add a test using Fastify's `inject` to assert:
  - `GET /` → 200 and HTML containing the home page's key copy.
  - `GET /health` → 200 and `status: "ok"`.
- Add a `test` npm script.

## 7. Verify & document
- Run `npm run build` (strict passes) and `npm test` (green).
- Manually confirm `npm run dev` serves `/` and `/health` in a browser.
- Note anything deferred for Phase 2 (the data layer).
