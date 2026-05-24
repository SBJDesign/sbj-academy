import Link from 'next/link';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';

const curriculum = [
  { n: '01', title: 'What is a Brand?', tag: 'Foundation' },
  { n: '02', title: 'Brand Strategy', tag: 'Foundation' },
  { n: '03', title: 'Brand Positioning', tag: 'Foundation' },
  { n: '04', title: 'Visual Identity', tag: 'Identity' },
  { n: '05', title: 'Brand Voice & Tone', tag: 'Identity' },
  { n: '06', title: 'Brand Storytelling', tag: 'Identity' },
  { n: '07', title: 'Brand Experience', tag: 'Growth' },
  { n: '08', title: 'Brand Architecture', tag: 'Growth' },
  { n: '09', title: 'Rebranding & Evolution', tag: 'Growth' },
  { n: '10', title: 'Measuring Brand Equity', tag: 'Mastery' },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader active="home" />
      <main>
        <section className="relative overflow-hidden border-b border-border px-4 py-20 text-center sm:px-6 sm:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(54,201,194,0.08), transparent 70%)',
            }}
          />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-4 py-1 text-[11px] font-medium uppercase tracking-widest text-teal">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              Free · No sign-up required
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Build a brand that
              <br />
              <span className="text-teal">people remember</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg font-light text-text-body">
              Interactive courses with modules, quizzes, worksheets, and certificates —
              built on a modern learning platform.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/learn/branding"
                className="rounded-xl bg-teal px-6 py-3 text-sm font-medium text-navy hover:opacity-90"
              >
                Start Branding Course →
              </Link>
              <Link
                href="/courses"
                className="rounded-xl border border-border px-6 py-3 text-sm text-text-body hover:border-teal hover:text-teal"
              >
                Browse all courses
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-border pt-8">
              {[
                ['10', 'Modules'],
                ['40+', 'Quiz questions'],
                ['2', 'Courses live'],
                ['Free', 'Forever'],
              ].map(([num, label]) => (
                <div key={label}>
                  <span className="font-display text-2xl font-semibold text-teal">{num}</span>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="curriculum" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-[11px] font-medium uppercase tracking-widest text-teal">Curriculum</p>
          <h2 className="mt-2 font-display text-3xl font-bold">
            Branding Mastery — <span className="text-teal">10 modules</span>
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {curriculum.map((m) => (
              <div
                key={m.n}
                className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-teal/30"
              >
                <span className="font-display text-2xl font-bold text-teal/30">{m.n}</span>
                <p className="mt-1 font-medium">{m.title}</p>
                <span className="mt-2 inline-block rounded-full border border-teal/25 bg-teal/10 px-2 py-0.5 text-[10px] text-teal">
                  {m.tag}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/learn/branding" className="text-sm font-medium text-teal hover:underline">
              Open full course player →
            </Link>
          </div>
        </section>

        <section className="border-y border-border bg-surface px-4 py-16 text-center sm:px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold">
              Ready to <span className="text-teal">start learning?</span>
            </h2>
            <p className="mt-3 text-text-body">
              Progress saves automatically in your browser. Pick a course and begin module 1.
            </p>
            <Link
              href="/courses"
              className="mt-6 inline-block rounded-xl bg-teal px-8 py-3 font-medium text-navy hover:opacity-90"
            >
              View course catalogue
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
