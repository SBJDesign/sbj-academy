import { PhotoFrame } from '@/components/marketing/photo-frame';
import { sitePhotos } from '@/lib/site-photos';

const tiles = [
  {
    key: 'hero',
    photo: sitePhotos.hero,
    caption: 'Learn with confidence',
    className: 'col-span-2 row-span-2 min-h-[220px] sm:min-h-[280px]',
  },
  {
    key: 'laptop',
    photo: sitePhotos.laptop,
    caption: 'Learn anywhere',
    className: 'col-span-1 min-h-[140px] sm:min-h-[160px]',
  },
  {
    key: 'coding',
    photo: sitePhotos.coding,
    caption: 'Hands-on practice',
    className: 'col-span-1 min-h-[140px] sm:min-h-[160px]',
  },
  {
    key: 'focused',
    photo: sitePhotos.focused,
    caption: 'Stay in the flow',
    className: 'col-span-2 min-h-[160px] sm:min-h-[180px]',
  },
] as const;

export function LearnerShowcase() {
  return (
    <section className="border-b border-border bg-surface-2/50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-medium uppercase tracking-widest text-teal">Community</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight">
          Learning that looks like <span className="text-teal">real life</span>
        </h2>
        <p className="mt-3 max-w-2xl text-text-body">
          Practical courses for professionals, founders, and students — with clear lessons, quizzes,
          and certificates you can share.
        </p>

        <div className="photo-mosaic mt-10 grid grid-cols-2 gap-3 sm:gap-4">
          {tiles.map((tile) => (
            <figure key={tile.key} className={`photo-mosaic-item ${tile.className}`}>
              <PhotoFrame
                src={tile.photo.src}
                alt={tile.photo.alt}
                unoptimized={tile.key === 'hero'}
                className="h-full w-full"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <figcaption className="photo-mosaic-caption">{tile.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
