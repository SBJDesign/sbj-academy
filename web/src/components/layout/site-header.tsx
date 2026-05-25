import Link from 'next/link';
import { SiteLogo } from './site-logo';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader({
  active,
}: {
  active?: 'home' | 'courses';
}) {
  return (
    <header className="site-nav sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main"
      >
        <SiteLogo />
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className={`text-sm transition-colors ${
              active === 'home' ? 'font-medium text-teal' : 'text-muted hover:text-teal'
            }`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`text-sm transition-colors ${
              active === 'courses' ? 'font-medium text-teal' : 'text-muted hover:text-teal'
            }`}
          >
            Courses
          </Link>
          <ThemeToggle />
          <Link
            href="/courses"
            className="btn-cta hidden px-3 py-1.5 text-sm sm:inline-flex"
          >
            Browse Courses →
          </Link>
        </div>
      </nav>
    </header>
  );
}
