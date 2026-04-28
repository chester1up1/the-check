# The Check

Music sharing app for friends with cross-platform link matching.

## Product goal

Users paste a song link from one provider and get equivalent links for the same track on other platforms. The first release is optimized for fast paste-to-result UX and reliable matching confidence.

## Tech stack

- Monorepo: `pnpm` + `Turborepo`
- Frontend: `Next.js` App Router + `TypeScript`
- UI: `shadcn/ui` + `Tailwind CSS`
- Backend: `NestJS` + `TypeScript`
- Database: `Supabase Postgres`
- ORM: `Drizzle ORM`
- Validation: `Zod`
- Cache: `Redis`
- Testing: `Vitest` + `Playwright`

## Repository layout

```text
.
|- apps/
|  |- api/
|  \- web/
|- packages/
|  |- matching/
|  |- providers/
|  \- shared/
|- docs/
|- package.json
|- pnpm-workspace.yaml
\- turbo.json
```

## Apps and packages

- `apps/web`: public web app for paste, results, and sharing flows
- `apps/api`: NestJS API for provider resolution, matching, scoring, and health endpoints
- `packages/shared`: shared schemas, DTOs, and environment helpers
- `packages/matching`: normalization and confidence scoring
- `packages/providers`: provider adapter contracts and provider-specific helpers

## Design system direction

- Active UI direction: `Night Tape`
- Theme logic is token-based through CSS custom properties in `apps/web/app/globals.css`
- Accent palette can be swapped centrally through the `data-accent` attribute on the root `<html>` element
- Current preset: `orange`
- Included alternates: `lime`, `orange`, `red`

## Getting started

```bash
pnpm install
pnpm dev
```

This will eventually run both the web app and API through Turborepo. Current scaffold includes the workspace structure and starter modules, but provider integrations and database wiring are still pending.

## MVP scope

- paste a track URL
- detect source provider
- resolve canonical metadata
- search other providers
- rank candidates by confidence
- show alternative links with confidence and quick actions

## Suggested next build order

1. Wire root workspace dependencies with `pnpm install`.
2. Add Drizzle schema and Supabase database connection.
3. Implement the first vertical slice for `POST /api/match-track`.
4. Add YouTube Music, Spotify, and Apple Music adapters.
5. Connect the web form to the API and show ranked matches.
