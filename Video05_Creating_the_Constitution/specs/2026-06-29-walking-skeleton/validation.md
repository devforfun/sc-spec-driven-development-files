# Validation — Walking Skeleton (Phase 1)

How we know this phase is done and mergeable.

## Acceptance criteria
- [ ] `npm run build` succeeds with no TypeScript errors (strict mode).
- [ ] `npm run dev` starts the server and logs that AgentClinic is open.
- [ ] `GET /` returns **200** and the server-rendered **minimal AgentClinic home
      page** (hero, clinic description, "coming soon" nod), via the base layout.
- [ ] `GET /health` returns **200** and JSON `{ "status": "ok" }`.
- [ ] The home page renders correctly in a modern browser.

## Automated test
- [ ] A smoke test (Fastify `inject`) exists and passes:
  - `GET /` → 200, content-type HTML, body contains the home page's key copy.
  - `GET /health` → 200, body parses to `{ status: "ok" }`.
- [ ] `npm test` runs the suite green.

## Manual demo check
1. `npm run dev`.
2. Open `http://localhost:<PORT>/` — see the AgentClinic page.
3. Open `/health` — see the OK JSON.

## Merge gate
Mergeable to `main` when:
- All acceptance criteria above are checked.
- `npm run build` and `npm test` both pass.
- Scope held to Phase 1 — no database or domain logic leaked in (those belong to
  Phase 2 per `specs/roadmap.md`).
