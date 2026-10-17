import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

export default function config(phase) {
  return {
    // Runs as a Node.js server so the contact and careers forms can send email (see app/api/inquiry).
    // Keep production builds from replacing a running development server's files.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
    trailingSlash: true,
    images: { unoptimized: true },
    poweredByHeader: false,
  };
}
