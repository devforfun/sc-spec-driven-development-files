# Tech Stack

AgentClinic is built on **server-side TypeScript**. Pages are rendered on the
server; the browser gets fast, attractive HTML with light progressive enhancement.
This keeps the stack small, popular, and easy to demo — one codebase, no separate
SPA build to reason about.

## Recommended framework: Fastify

**Web framework: [Fastify](https://fastify.dev/)** — recommended.

Rationale:
- **Popular & well-supported** — one of the most widely used Node web frameworks,
  with a large plugin ecosystem.
- **TypeScript-first** — excellent types out of the box, matching Mary's ask for a
  popular TypeScript stack.
- **Fast and reliable** — low overhead, sensible defaults, great for a snappy demo.
- **Serves both roles** — renders the dashboard *and* exposes any JSON endpoints we
  need, from a single server.

*Considered and set aside:* Next.js / SvelteKit (heavier, more frontend-centric
than this server-rendered concept needs) and bare Express (less TypeScript-native,
fewer batteries included than Fastify).

## The full stack

| Concern        | Choice                                  | Why |
| -------------- | --------------------------------------- | --- |
| Language       | **TypeScript** (strict)                 | Stakeholder requirement; safety + great DX |
| Runtime        | **Node.js (LTS)**                       | Ubiquitous, boring-in-a-good-way |
| Web framework  | **Fastify**                             | Popular, fast, TS-first (see above) |
| Database       | **SQLite** (via `better-sqlite3`)       | Zero-setup, single file, perfect for demos and teaching |
| HTML rendering | **Eta** server-side templates           | Tiny, fast, TS-friendly templating engine |
| Interactivity  | **htmx** (progressive enhancement)      | Dynamic dashboard without an SPA; stays server-side |
| Styling        | **Modern CSS** (a small CSS framework for fast polish) | Attractive in a modern browser with little effort (Steve's ask) |
| Build/tooling  | **tsc** + npm scripts                   | Already configured; no extra bundler complexity |

## Principles

- **Server-rendered first.** HTML comes from the server; JavaScript enhances, it
  doesn't run the show.
- **Few moving parts.** Favor small, well-known libraries over large frameworks so
  the project stays legible for students and quick to launch at a booth.
- **Modern browsers only.** No legacy-browser shims; target current evergreen
  browsers on desktop and mobile.
- **Zero-infrastructure data.** SQLite is a single local file — no database server
  to install or run, so the app spins up instantly at a booth or on a student's
  laptop.
- **Boring where it counts, playful where it shows.** Conventional, reliable
  plumbing; personality in the UI and copy.
