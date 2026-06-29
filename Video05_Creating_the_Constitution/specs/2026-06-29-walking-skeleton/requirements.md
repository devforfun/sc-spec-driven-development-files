# Requirements — Walking Skeleton (Phase 1)

## Context
First slice of AgentClinic. Per `specs/roadmap.md` Phase 1, we build a **walking
skeleton**: the smallest thing that runs end to end, so every later phase has a
working app to grow from. Stack choices follow `specs/tech-stack.md` (server-side
TypeScript, Fastify, Eta templates). Tone follows `specs/mission.md` — a playful
concept clinic, real and working underneath the joke.

## Scope
A running Fastify server that serves a minimal AgentClinic home page and reports
its health.

In scope:
- Fastify server that boots cleanly on a known port.
- A base Eta layout (HTML shell) that pages render into.
- A **minimal AgentClinic home page** served at `GET /` — welcoming hero, a one-line
  description of the clinic, and a nod to what's coming (ailments, therapies,
  booking). Personality in the copy; minimal but intentional styling.
- A `/health` route returning an OK status.
- Working `dev` and `build` npm scripts.

## Out of scope (deferred to later phases)
- **Database / SQLite** — Phase 2. No data layer in this slice.
- Domain model (agents, ailments, therapies, appointments) — Phase 2+.
- Dashboard, browsing, booking — Phases 3–5.
- htmx interactivity and the full visual design system — added in their own phases.
  Only the minimum markup/styling needed for a presentable page.

## Decisions
- **Scope:** server + one rendered page + `/health`. No DB ping pulled forward.
- **Dependencies:** Fastify and Eta are not yet installed; installing/configuring
  them is the first task group (see `plan.md`).
- **Validation:** an automated smoke test is added in this phase (see
  `validation.md`), so regression coverage exists from the start.
- **Rendering:** server-side via Eta, consistent with the tech stack — no client
  framework.

## Constraints
- TypeScript strict (existing `tsconfig.json`).
- Modern browsers only.
- Keep dependencies minimal and the slice legible — this is also a teaching example.
