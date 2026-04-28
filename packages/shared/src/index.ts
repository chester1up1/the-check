import { z } from "zod";

export const providerIdSchema = z.enum(["youtube-music", "spotify", "apple-music", "deezer"]);

export const resolvedTrackSchema = z.object({
  provider: providerIdSchema,
  providerTrackId: z.string(),
  url: z.string().url(),
  title: z.string(),
  artists: z.array(z.string()).min(1),
  album: z.string().optional(),
  durationMs: z.number().int().positive().optional(),
  isrc: z.string().optional(),
  releaseYear: z.number().int().optional(),
  artworkUrl: z.string().url().optional()
});

export const matchRequestSchema = z.object({
  url: z.string().url()
});

export const matchCandidateSchema = z.object({
  provider: providerIdSchema,
  trackId: z.string(),
  url: z.string().url(),
  title: z.string(),
  artists: z.array(z.string()).min(1),
  album: z.string().optional(),
  durationMs: z.number().int().positive().optional(),
  isrc: z.string().optional(),
  confidence: z.number().min(0).max(1)
});

export const matchResponseSchema = z.object({
  source: resolvedTrackSchema,
  matches: z.array(matchCandidateSchema),
  confidenceThreshold: z.number().min(0).max(1)
});

export const apiRuntimeSchema = z.object({
  ok: z.boolean(),
  service: z.literal("api"),
  timestamp: z.string()
});

export type ProviderId = z.infer<typeof providerIdSchema>;
export type ResolvedTrack = z.infer<typeof resolvedTrackSchema>;
export type MatchRequest = z.infer<typeof matchRequestSchema>;
export type MatchCandidate = z.infer<typeof matchCandidateSchema>;
export type MatchResponse = z.infer<typeof matchResponseSchema>;
