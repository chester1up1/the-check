# AGENTS

## Project context

This project is a music sharing website for friends.

Main differentiator:
Given a song link from one platform, the app should find equivalent links on other music platforms.

Example:

- input: YouTube Music track link
- output: Spotify, Apple Music, and other provider links for the same track

## Current phase

We are in discovery and foundation setup.
There is no application code yet.

## Product priorities

1. Reliable cross-platform song matching.
2. Fast paste-to-result experience.
3. Clean sharing UX for friend groups.
4. Extensible provider architecture.

## Technical assumptions

- Prefer TypeScript across frontend and backend unless the user requests otherwise.
- Use a pnpm monorepo with Turborepo from the start.
- Build the frontend with Next.js App Router.
- Use shadcn/ui and Tailwind CSS for the web UI layer.
- Build the backend API and matching services with NestJS.
- Use Supabase Postgres as the primary database.
- Use Drizzle ORM for database access and schema management.
- Use Zod for shared runtime validation at application boundaries.
- Use Redis for cache-first matching performance and short-lived lookup data.
- Use Vitest for unit tests and Playwright for end-to-end flows.
- Design the matching engine as a provider-agnostic service.
- Do not hardcode logic for a single platform into shared matching code.
- Keep provider integrations isolated behind adapters.
- Prefer confidence scoring over binary exact-match assumptions.

## Preferred workspace shape

- `apps/web`: Next.js frontend
- `apps/api`: NestJS backend
- `packages/shared`: shared types, DTOs, schemas, and utilities
- `packages/matching`: normalization, scoring, and provider-agnostic matching logic
- `packages/providers`: provider adapters and provider-specific integration helpers

## Matching strategy

Track matching should generally use this order:

1. Parse the input URL and identify the source provider.
2. Resolve canonical metadata from the source:
   title, artists, album, duration, ISRC if available, release year.
3. Normalize metadata:
   lowercase, trim, remove noise tokens, normalize featuring syntax.
4. Search other providers using the normalized metadata.
5. Rank candidates using weighted signals:
   ISRC, title similarity, artist similarity, duration distance, album similarity.
6. Return best matches plus confidence and raw candidates when useful.

## Coding expectations

- Keep architecture simple at the start.
- Build thin vertical slices before expanding the feature set.
- Add tests around normalization and scoring early.
- Avoid coupling UI logic to provider-specific fields.
- Keep provider credentials, tokens, and rate-limit handling out of shared matching code.
- Prefer moving reusable domain logic into shared packages instead of duplicating it across apps.

## Documentation workflow

- Prefer Context7 for current library or framework documentation when implementation depends on package APIs or setup details.
- In prompts related to library usage, setup, configuration, or SDK integration, explicitly use the phrase `use context7`.

## When editing this repo

- Keep docs in sync with any architectural change.
- If a provider integration is added, document:
  input URL format, lookup method, rate limits, auth needs, and failure modes.
- If implementation starts, update README.md and docs/architecture.md first.
