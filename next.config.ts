import type { NextConfig } from "next";

// Security headers applied to every response. Tuned for a public portfolio:
//   - HSTS forces HTTPS on future visits (the reverse proxy / Traefik handles
//     the actual TLS — this locks browsers in once they've seen one response).
//   - DENY framing prevents clickjacking.
//   - nosniff stops MIME-type confusion attacks.
//   - strict-origin-when-cross-origin limits what the Referer leaks.
//   - Permissions-Policy closes browser APIs we don't use so a future
//     dependency update can't silently start using them.
// CSP intentionally omitted for now — it tends to break Next.js inline
// hydration scripts and Tailwind's injected styles without careful tuning.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  // The local preview is opened from 127.0.0.1 while Next serves the app
  // from localhost. Allow the dev HMR resource to connect in that setup.
  allowedDevOrigins: ["127.0.0.1"],

  async headers() {
    return [
      {
        // GLB, texture, image and audio files are content-addressed by the
        // revision query strings used by the room. Let the browser/CDN keep
        // them for a year so repeat visits do not download the whole room.
        source: "/room-engine/:path*",
        headers: [
          ...securityHeaders,
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
