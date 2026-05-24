import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-footer px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-display text-lg font-bold text-teal">
            SBJ <span className="text-foreground">Academy</span>
          </div>
          <p className="mt-1 text-sm text-muted">
            Professional brand education · © SBJ Academy {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <Link href="/courses" className="hover:text-teal">
            All courses
          </Link>
          <Link href="/learn/branding" className="hover:text-teal">
            Branding
          </Link>
          <Link href="/learn/brand-analysis" className="hover:text-teal">
            Brand Analysis
          </Link>
          <Link href="/learn/business-communication" className="hover:text-teal">
            Business Communication
          </Link>
        </div>
      </div>
    </footer>
  );
}
