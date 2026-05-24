'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex rounded-full border border-teal/25 bg-surface-2 p-1"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      type="button"
      className="flex rounded-full border border-teal/25 bg-surface-2 p-1"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <span
        className={`flex h-5 w-6 items-center justify-center rounded-full text-xs ${
          theme === 'dark' ? 'bg-teal/15 text-teal' : 'text-muted'
        }`}
      >
        🌙
      </span>
      <span
        className={`flex h-5 w-6 items-center justify-center rounded-full text-xs ${
          theme === 'light' ? 'bg-teal/15 text-teal' : 'text-muted'
        }`}
      >
        ☀️
      </span>
    </button>
  );
}
