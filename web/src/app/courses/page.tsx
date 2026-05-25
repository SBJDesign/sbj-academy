import Image from 'next/image';
import Link from 'next/link';
import { PhotoFrame } from '@/components/marketing/photo-frame';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { catalog } from '@/lib/courses';
import { sitePhotos } from '@/lib/site-photos';

export const metadata = {
  title: 'All Courses',
};

export default function CoursesPage() {
  const available = catalog.filter((c) => c.available);
  const upcoming = catalog.filter((c) => !c.available);

  return (
    <>
      <SiteHeader active="courses" />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <PhotoFrame
            src={sitePhotos.focused.src}
            alt={sitePhotos.focused.alt}
            priority
            className="photo-banner aspect-[21/9] min-h-[200px] w-full sm:min-h-[260px]"
            sizes="100vw"
            imageClassName="object-cover object-[center_30%]"
          />
          <div className="photo-banner-overlay absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-24 text-center sm:px-6 sm:pb-12">
              <span className="inline-block rounded-full border border-teal/25 bg-teal/10 px-3 py-1 text-[11px] uppercase tracking-widest text-teal">
                Course catalogue
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground drop-shadow-sm">
                All <span className="text-teal">courses</span>
              </h1>
              <p className="mx-auto mt-3 max-w-lg text-text-body">
                Free professional courses with quizzes, worksheets, and progress tracking.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-widest text-teal">
            Available now
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {available.map((course) => (
              <article
                key={course.slug}
                className="card-elevated flex flex-col overflow-hidden"
              >
                {course.coverImage ? (
                  <div className="relative h-44 w-full shrink-0 border-b border-border">
                    <Image
                      src={course.coverImage}
                      alt={course.coverImageAlt ?? course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-3xl drop-shadow-md" aria-hidden>
                      {course.icon}
                    </span>
                  </div>
                ) : null}
                <div className="flex-1 p-6">
                  {!course.coverImage ? (
                    <span className="block text-3xl">{course.icon}</span>
                  ) : null}
                  <p className="text-[10px] uppercase tracking-widest text-teal">Live course</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold">{course.title}</h2>
                  <p className="mt-2 text-sm text-text-body">{course.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {course.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-teal/25 bg-teal/10 px-2 py-0.5 text-[10px] text-teal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 border-t border-border pt-4 text-center text-xs">
                    <div>
                      <span className="font-display text-lg font-semibold text-teal">
                        {course.modules}
                      </span>
                      <p className="text-muted">Modules</p>
                    </div>
                    <div>
                      <span className="font-display text-lg font-semibold text-teal">
                        {course.quizCount}
                      </span>
                      <p className="text-muted">Quizzes</p>
                    </div>
                    <div>
                      <span className="font-display text-lg font-semibold text-teal">
                        {course.duration}
                      </span>
                      <p className="text-muted">Content</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border p-4">
                  <Link
                    href={`/learn/${course.slug}`}
                    className="btn-cta block w-full py-2.5 text-center text-sm"
                  >
                    Start course free →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {upcoming.length > 0 ? (
            <>
              <p className="mb-4 mt-12 text-[11px] font-medium uppercase tracking-widest text-teal">
                Coming soon
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {upcoming.map((c) => (
                  <div
                    key={c.slug}
                    className="flex flex-col items-center rounded-2xl border border-dashed border-border p-6 text-center"
                  >
                    <span className="text-3xl">{c.icon}</span>
                    <p className="mt-2 font-medium">{c.title}</p>
                    <p className="mt-1 text-sm text-muted">{c.description}</p>
                    <span className="mt-3 rounded-full border border-teal/25 bg-teal/10 px-3 py-1 text-[10px] uppercase text-teal">
                      Coming soon
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
