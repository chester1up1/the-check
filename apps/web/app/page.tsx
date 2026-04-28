import { Button } from "@/components/ui/button";

const providers = ["YouTube Music", "Spotify", "Apple Music", "Deezer"];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border bg-white/70 px-4 py-2 text-sm text-[var(--muted-foreground)] backdrop-blur">
            Discovery scaffold for the matching-first music app
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance">
              Share one song link, hand everyone their own platform.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
              The Check resolves a track into canonical metadata, searches other providers, and ranks the best
              cross-platform matches by confidence.
            </p>
          </div>

          <div className="rounded-[28px] border bg-[var(--card)] p-6 shadow-[0_20px_70px_rgba(31,26,23,0.08)]">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-[var(--muted-foreground)]" htmlFor="track-url">
                Paste a track URL
              </label>
              <input
                id="track-url"
                className="w-full rounded-2xl border bg-white px-4 py-4 text-base outline-none"
                placeholder="https://music.youtube.com/watch?v=..."
                readOnly
                value=""
              />
              <div className="flex flex-wrap gap-3">
                <Button>Match track</Button>
                <Button variant="secondary">View API health</Button>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-[32px] border bg-[#171412] p-6 text-white shadow-[0_24px_80px_rgba(23,20,18,0.16)]">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">Current stack</p>
              <h2 className="mt-3 text-2xl font-semibold">Monorepo foundation is ready for the first vertical slice.</h2>
            </div>
            <ul className="grid gap-3">
              {providers.map((provider) => (
                <li
                  key={provider}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span>{provider}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">planned</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-white/8 p-4 text-sm leading-7 text-white/75">
              Next step: wire the API route, shared Zod contracts, and the first provider adapter.
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
