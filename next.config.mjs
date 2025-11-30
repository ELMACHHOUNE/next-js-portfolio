// Force LightningCSS to use the WASM transformer (helps on Windows)
process.env.CSS_TRANSFORMER_WASM = "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable strict TypeScript checks during build
    typescript: {
      ignoreBuildErrors: true,
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Add fallbacks for problematic modules in server-side context
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false, // Example: Ignore 'fs' module
          module: false, // Ignore 'module'
          path: false, // Ignore 'path'
        };
      }
      return config;
    },
    turbopack: {},
  };
  
export default nextConfig;
