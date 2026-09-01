// Force LightningCSS to use the WASM transformer (helps on Windows)
process.env.CSS_TRANSFORMER_WASM = "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    compress: true,
    reactStrictMode: true,
    images: {
      formats: ["image/avif", "image/webp"],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      remotePatterns: [
        { protocol: "https", hostname: "media.licdn.com" },
        { protocol: "https", hostname: "images.unsplash.com" },
        { protocol: "https", hostname: "assets.aceternity.com" },
      ],
    },
    // Disable strict TypeScript checks during build
    typescript: {
      ignoreBuildErrors: true,
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          module: false,
          path: false,
        };
      }
      return config;
    },
    turbopack: {},
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "X-Frame-Options", value: "SAMEORIGIN" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          ],
        },
        {
          source: "/(.*)\\.(png|jpg|jpeg|webp|avif|svg|ico|woff2?)",
          headers: [
            { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          ],
        },
      ];
    },
  };
  
export default nextConfig;
