# Integration Strategy

## Target providers for first iteration

- YouTube Music
- Spotify
- Apple Music

## Integration notes

### YouTube Music

- Input links are likely to be common in early use.
- Metadata access may be indirect depending on available APIs.
- We may need a hybrid approach:
  URL parsing, page metadata extraction, or API-backed lookup.

### Spotify

- Search APIs are strong and suitable for candidate lookup.
- ISRC can be very valuable when available.

### Apple Music

- Search quality is good, but auth and storefront handling should be planned early.

## Canonical resolution preference

When possible, resolve these fields from the source link:

- track title
- primary artists
- album
- duration
- ISRC
- release year

## Candidate ranking rules

- Exact ISRC should usually win immediately.
- Near-exact title plus artist plus close duration is a strong fallback.
- Live, remix, karaoke, sped-up, and cover variants should be penalized unless explicitly present in the source metadata.

## Failure handling

- If source metadata is incomplete, still search using the strongest available fields.
- If several candidates are close, return multiple results with confidence.
- If no confident match exists, return a structured "not found" state instead of guessing.

## Operational concerns

- Rate limits will matter.
- Caching should be added early.
- Provider-specific errors should not break the entire response.
