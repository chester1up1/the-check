# Architecture

## Recommended stack

- Package manager: pnpm
- Monorepo: Turborepo
- Frontend: Next.js App Router + TypeScript
- UI: shadcn/ui + Tailwind CSS
- Backend: NestJS + TypeScript
- API: REST initially
- Database: Supabase Postgres
- ORM: Drizzle ORM
- Validation: Zod
- Cache: Redis
- Testing: Vitest + Playwright

## Suggested workspace layout

- `apps/web`
- `apps/api`
- `packages/shared`
- `packages/matching`
- `packages/providers`

## Core modules

### 1. Provider detection

Receives a pasted URL and determines which music service it belongs to.

### 2. Source resolver

Turns the source URL into normalized track metadata.

Expected output shape:

- provider
- providerTrackId
- title
- artists[]
- album
- durationMs
- isrc
- releaseYear
- artworkUrl

### 3. Metadata normalizer

Cleans titles and artist names for matching.

Examples:

- remove "(Official Audio)"
- normalize "feat.", "ft.", and "featuring"
- collapse extra whitespace
- standardize punctuation where useful

### 4. Provider search adapters

Each adapter searches one external platform using normalized metadata.

Suggested adapter interface:

```ts
type SearchCandidate = {
  provider: string;
  trackId: string;
  url: string;
  title: string;
  artists: string[];
  album?: string;
  durationMs?: number;
  isrc?: string;
};

interface ProviderAdapter {
  provider: string;
  canHandleUrl(url: string): boolean;
  resolveFromUrl(url: string): Promise<ResolvedTrack>;
  searchTrack(input: NormalizedTrack): Promise<SearchCandidate[]>;
}
```

### 5. Match scorer

Ranks candidates by weighted signals.

Suggested signal weights:

- ISRC exact match: very high
- title similarity: high
- primary artist similarity: high
- duration proximity: medium
- album similarity: low to medium

### 6. Match API

Single API surface for the frontend:

`POST /api/match-track`

Request:

```json
{
  "url": "https://music.youtube.com/watch?v=example"
}
```

Response:

```json
{
  "source": {},
  "matches": [],
  "confidenceThreshold": 0.72
}
```

## Design principles

- Keep provider integrations isolated.
- Prefer deterministic transforms before fuzzy scoring.
- Cache source resolution and provider search responses.
- Make scoring explainable for debugging.

## Frontend theming

- The web app uses semantic design tokens instead of component-level hardcoded colors.
- Theme tokens live in `apps/web/app/globals.css`.
- Accent palettes are switched with the root `data-accent` attribute.
- Current supported accent presets:
  - `lime`
  - `orange`
  - `red`
- Components should consume semantic tokens such as `--primary`, `--muted`, `--border`, and `--foreground` so visual restyling does not require component rewrites.
