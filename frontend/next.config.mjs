import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

export default function config(phase) {
  return {
    output: 'export',
    // Keep production builds from replacing a running development server's files.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
    trailingSlash: true,
    images: { unoptimized: true },
  };
}
