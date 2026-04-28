import type { MatchCandidate, ResolvedTrack } from "@the-check/shared";

export type NormalizedTrack = {
  title: string;
  artists: string[];
  album?: string;
  durationMs?: number;
  isrc?: string;
};

export function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/\((official audio|official video|lyrics?)\)/g, "")
    .replace(/\b(feat\.?|ft\.?|featuring)\b/g, "feat")
    .replace(/[.,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeTrack(track: Pick<ResolvedTrack, "title" | "artists" | "album" | "durationMs" | "isrc">): NormalizedTrack {
  return {
    title: normalizeText(track.title),
    artists: track.artists.map(normalizeText),
    album: track.album ? normalizeText(track.album) : undefined,
    durationMs: track.durationMs,
    isrc: track.isrc?.trim().toUpperCase()
  };
}

export function scoreCandidate(source: NormalizedTrack, candidate: NormalizedTrack): number {
  if (source.isrc && candidate.isrc && source.isrc === candidate.isrc) {
    return 0.99;
  }

  const titleScore = source.title === candidate.title ? 0.5 : 0;
  const artistScore = source.artists[0] && source.artists[0] === candidate.artists[0] ? 0.3 : 0;
  const albumScore = source.album && candidate.album && source.album === candidate.album ? 0.1 : 0;
  const durationScore =
    source.durationMs && candidate.durationMs && Math.abs(source.durationMs - candidate.durationMs) <= 2000 ? 0.1 : 0;

  return Number(Math.min(titleScore + artistScore + albumScore + durationScore, 0.98).toFixed(2));
}

export function rankCandidates(source: ResolvedTrack, candidates: MatchCandidate[]): MatchCandidate[] {
  const normalizedSource = normalizeTrack(source);

  return [...candidates]
    .map((candidate) => ({
      ...candidate,
      confidence: scoreCandidate(
        normalizedSource,
        normalizeTrack({
          title: candidate.title,
          artists: candidate.artists,
          album: candidate.album,
          durationMs: candidate.durationMs,
          isrc: candidate.isrc
        })
      )
    }))
    .sort((left, right) => right.confidence - left.confidence);
}
