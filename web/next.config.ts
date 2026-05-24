import type { NextConfig } from 'next';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin the app root to web/ so parent repo lockfiles do not confuse the build on Vercel
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
