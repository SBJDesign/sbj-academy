import type { ModuleGuide } from '@/lib/types';

export function ModuleGuidePanel({ guide }: { guide: ModuleGuide }) {
  return (
    <aside className="module-guide mb-8 space-y-4" aria-label="Module overview">
      <section className="guide-card guide-plain">
        <p className="guide-label">In plain English</p>
        <p className="guide-text">{guide.plainEnglish}</p>
      </section>

      <section className="guide-card guide-analogy">
        <p className="guide-label">Real-life analogy</p>
        <p className="guide-text">{guide.analogy}</p>
      </section>

      <section className="guide-card guide-outcomes">
        <p className="guide-label">After this module you will</p>
        <ul className="guide-list">
          {guide.youWillLearn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
