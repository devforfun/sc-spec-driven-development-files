# Roadmap

High-level implementation order, in **very small phases**. We build a **walking
skeleton first** — a thin end-to-end slice that runs — then add capability in tiny,
demonstrable increments. Each phase should leave the app working and showable.

## Phase 1 — Walking skeleton
The smallest thing that runs end to end.
- Fastify server boots and serves one page.
- Server-side template renders that page.
- A health check / "it's alive" route.
- `dev` and `build` scripts work.

**Done when:** `npm run dev`, open the browser, see a rendered AgentClinic page.

## Phase 2 — Data layer
Give the skeleton a place to keep things.
- Add the database and a connection.
- Define the core schema: **agents**, **ailments**, **therapies**, **appointments**.
- Seed a little playful sample data.

**Done when:** the app reads real data from the database at startup.

## Phase 3 — Browse the clinic
Make the domain visible.
- Page listing **ailments** (with personality-rich copy).
- Page listing **therapies**.
- Link ailments to their suggested therapies.

**Done when:** a visitor can browse ailments and therapies in the browser.

## Phase 4 — The dashboard
Mary's shared view for agents and staff.
- A dashboard shell with navigation.
- Staff view: upcoming appointments at a glance.
- Agent view: my ailments / my appointments.

**Done when:** the dashboard renders both views from real data.

## Phase 5 — Book an appointment
Susan's core flow.
- Form to book an appointment (agent + ailment + therapy + time).
- Persist the booking.
- Show it back on the dashboard.
- Light htmx enhancement so booking feels instant.

**Done when:** an agent can book an appointment and see it appear.

## Phase 6 — Make it attractive
Steve's polish pass.
- Cohesive, playful visual design.
- Landing page that sells the joke and the clinic.
- Responsive, looks great on a projector and on mobile.

**Done when:** the site looks good enough to demo at a booth.

## Later (not yet scheduled)
Parked until a stakeholder asks: accounts/auth, editing & cancelling appointments,
search/filtering, notifications.
