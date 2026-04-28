import { Button } from "@/components/ui/button";

const feed = [
  {
    user: "Maya",
    sharedAt: "2h ago",
    title: "Here With Me",
    artist: "d4vd",
    album: "Romantic Homicide",
    quote: "Late night drives. Windows down. This one never hits any less.",
    match: "95% match",
    artwork: "from-[#5f0d15] via-[#9d1024] to-[#180709]"
  },
  {
    user: "Jordan",
    sharedAt: "5h ago",
    title: "CHIHIRO",
    artist: "Billie Eilish",
    album: "Hit Me Hard And Soft",
    quote: "Her best vocal performance to date. Unreal.",
    match: "90% match",
    artwork: "from-[#2c4353] via-[#4f6d7f] to-[#10161f]"
  }
];

const recommendations = [
  { title: "Happiness", artist: "Sampha", score: "92%" },
  { title: "Luther", artist: "Kendrick Lamar & SZA", score: "91%" },
  { title: "Pink + White", artist: "Frank Ocean", score: "89%" },
  { title: "Feel No Ways", artist: "Drake", score: "88%" }
];

const tabs = ["For you", "Following", "Close friends", "Trending"];
const providers = ["Spotify", "Apple Music", "YouTube Music"];

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-4 md:px-6 md:py-8">
      <section className="mx-auto max-w-[1500px] rounded-[32px] border bg-[var(--background-panel)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <div className="hidden border-b border-[var(--border)] px-10 py-7 text-sm text-[var(--muted-foreground)] lg:flex lg:items-center lg:justify-between">
          <div className="space-y-1">
            <p className="font-semibold uppercase tracking-[0.22em] text-[var(--foreground)]">The Check</p>
            <p>Cross-platform music sharing for friend groups.</p>
          </div>
          <p className="font-[var(--font-display)] text-3xl text-[var(--primary)]">Music worth passing on.</p>
          <div className="rounded-full border px-4 py-2 text-[var(--accent)]">Night Tape</div>
        </div>

        <div className="grid min-h-[880px] lg:grid-cols-[240px_minmax(0,1fr)_280px]">
          <aside className="hidden border-r border-[var(--border)] lg:flex lg:flex-col lg:justify-between">
            <div className="space-y-8 p-8">
              <div className="space-y-4">
                <div className="font-[var(--font-display)] text-5xl font-semibold leading-none tracking-tight text-[var(--foreground)]">
                  the
                  <br />
                  Check
                </div>
                <div className="h-1.5 w-24 rounded-full bg-[var(--primary)] shadow-[0_0_24px_var(--primary-soft)]" />
              </div>

              <nav className="space-y-2 text-sm">
                {["Home", "Explore", "Activity", "Messages", "Friends", "Playlists", "Profile"].map((item, index) => (
                  <div
                    key={item}
                    className={[
                      "flex items-center justify-between rounded-2xl border px-4 py-3 transition-colors",
                      index === 0
                        ? "border-[var(--primary-soft)] bg-[rgba(255,255,255,0.03)] text-[var(--primary)]"
                        : "border-transparent text-[var(--muted-foreground)] hover:border-[var(--border)] hover:bg-white/4 hover:text-[var(--foreground)]"
                    ].join(" ")}
                  >
                    <span>{item}</span>
                    {item === "Activity" ? (
                      <span className="rounded-full bg-[var(--primary)] px-2 py-0.5 text-xs text-[var(--primary-foreground)]">3</span>
                    ) : null}
                  </div>
                ))}
              </nav>
            </div>

            <div className="space-y-6 border-t border-[var(--border)] p-8">
              <div className="rounded-3xl border bg-[var(--muted)] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">Your vibe</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--foreground)]">
                    Eclectic
                  </span>
                  <span className="text-[var(--primary)]">||||</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary)]">
                  S
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)]">Sam</p>
                  <p className="text-sm text-[var(--muted-foreground)]">View profile</p>
                </div>
              </div>
            </div>
          </aside>

          <section className="border-[var(--border)] lg:border-r">
            <div className="space-y-6 p-4 md:p-6 lg:p-8">
              <div className="flex items-center justify-between lg:hidden">
                <div>
                  <p className="font-[var(--font-display)] text-3xl font-semibold leading-none">The Check</p>
                  <div className="mt-2 h-1.5 w-18 rounded-full bg-[var(--primary)]" />
                </div>
                <div className="rounded-full border px-3 py-1 text-xs text-[var(--accent)]">Night Tape</div>
              </div>

              <div className="rounded-[28px] border bg-[var(--card)] p-3 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 rounded-full border bg-[rgba(255,255,255,0.02)] px-4 py-3">
                  <span className="text-[var(--muted-foreground)]">↗</span>
                  <input
                    className="min-w-0 flex-1 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
                    id="track-url"
                    placeholder="Paste a track link"
                    readOnly
                    value=""
                  />
                  <Button className="h-11 w-11 shrink-0 px-0">➜</Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    className={[
                      "rounded-full border px-4 py-2 text-sm transition-colors",
                      index === 0
                        ? "border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary)]"
                        : "border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    ].join(" ")}
                    type="button"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {feed.map((post) => (
                  <article key={post.title} className="rounded-[28px] border bg-[var(--card)] p-4 shadow-[var(--shadow-card)] md:p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] font-semibold text-[var(--primary)]">
                          {post.user.slice(0, 1)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-[var(--foreground)]">{post.user}</span>
                            <span className="text-[var(--primary)]">✦</span>
                          </div>
                          <p className="text-sm text-[var(--muted-foreground)]">{post.sharedAt} • Shared a track</p>
                        </div>
                      </div>
                      <span className="text-[var(--muted-foreground)]">•••</span>
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]">
                      <div
                        className={`aspect-square rounded-[24px] bg-gradient-to-br ${post.artwork} shadow-[var(--shadow-card)]`}
                      />

                      <div className="space-y-4">
                        <div>
                          <h2 className="font-[var(--font-display)] text-3xl font-semibold leading-tight text-[var(--foreground)]">
                            {post.title}
                          </h2>
                          <p className="mt-1 text-lg text-[var(--foreground)]">{post.artist}</p>
                          <p className="mt-1 text-sm uppercase tracking-[0.24em] text-[var(--accent)]">{post.album}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 text-sm">
                          {providers.map((provider) => (
                            <span key={provider} className="rounded-full border bg-[var(--muted)] px-3 py-2 text-[var(--muted-foreground)]">
                              {provider}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button className="min-w-[220px] justify-between">
                            <span>Open on my platform</span>
                            <span>↗</span>
                          </Button>
                          <Button variant="secondary">Other links</Button>
                        </div>

                        <p className="max-w-xl text-[15px] leading-7 text-[var(--muted-foreground)]">“{post.quote}”</p>

                        <div className="flex items-center justify-between gap-4">
                          <span className="rounded-full border border-[rgba(77,166,255,0.24)] bg-[rgba(77,166,255,0.08)] px-3 py-2 text-sm text-[var(--accent)]">
                            {post.match}
                          </span>
                          <div className="flex items-center gap-5 text-sm text-[var(--muted-foreground)]">
                            <span>♡ 24</span>
                            <span>◌ 7</span>
                            <span>↗</span>
                            <span>▯</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <aside className="hidden lg:block">
            <div className="space-y-6 p-8">
              <section className="rounded-[28px] border bg-[var(--card)] p-5 shadow-[var(--shadow-card)]">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-[var(--foreground)]">For you</h3>
                  <span className="text-sm text-[var(--accent)]">View all</span>
                </div>
                <div className="space-y-3">
                  {recommendations.map((item, index) => (
                    <div key={item.title} className="flex items-center gap-3">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feed[index % feed.length]?.artwork ?? "from-[#333] to-[#111]"}`} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-[var(--foreground)]">{item.title}</p>
                        <p className="truncate text-sm text-[var(--muted-foreground)]">{item.artist}</p>
                      </div>
                      <span className="rounded-full border border-[rgba(77,166,255,0.24)] bg-[rgba(77,166,255,0.08)] px-2 py-1 text-xs text-[var(--accent)]">
                        {item.score}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border bg-[var(--card)] p-5 shadow-[var(--shadow-card)]">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-[var(--foreground)]">Friends are listening</h3>
                  <span className="text-sm text-[var(--accent)]">View all</span>
                </div>
                <div className="space-y-4">
                  {["Spencer", "India", "Jonah", "Maya"].map((name, index) => (
                    <div key={name} className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--muted)] text-sm text-[var(--foreground)]">
                        {name.slice(0, 1)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-[var(--foreground)]">{name}</p>
                        <p className="truncate text-sm text-[var(--muted-foreground)]">
                          Listening to {recommendations[index]?.title ?? "Something new"}
                        </p>
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
