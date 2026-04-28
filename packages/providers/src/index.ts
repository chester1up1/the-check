import type { ProviderId, ResolvedTrack } from "@the-check/shared";
import type { NormalizedTrack } from "@the-check/matching";

export type SearchCandidate = {
  provider: ProviderId;
  trackId: string;
  url: string;
  title: string;
  artists: string[];
  album?: string;
  durationMs?: number;
  isrc?: string;
};

export interface ProviderAdapter {
  provider: ProviderId;
  canHandleUrl(url: string): boolean;
  resolveFromUrl(url: string): Promise<ResolvedTrack>;
  searchTrack(input: NormalizedTrack): Promise<SearchCandidate[]>;
}
