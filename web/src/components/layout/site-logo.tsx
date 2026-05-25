import Image from 'next/image';
import Link from 'next/link';

type SiteLogoProps = {
  linked?: boolean;
  showWordmark?: boolean;
  iconSize?: number;
  className?: string;
};

export function SiteLogo({
  linked = true,
  showWordmark = true,
  iconSize = 36,
  className = '',
}: SiteLogoProps) {
  const content = (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/sbj-logo.png"
        alt=""
        width={iconSize}
        height={iconSize}
        className="shrink-0 rounded-md object-contain"
        priority
      />
      {showWordmark && (
        <span className="font-display text-lg font-bold tracking-tight leading-none">
          <span className="text-teal">SBJ</span>{' '}
          <span className="text-foreground">Academy</span>
        </span>
      )}
    </span>
  );

  if (!linked) {
    return content;
  }

  return (
    <Link
      href="/"
      aria-label="SBJ Academy home"
      className="rounded-md transition-opacity hover:opacity-90"
    >
      {content}
    </Link>
  );
}
