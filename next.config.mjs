/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable strict TypeScript checks during build
    typescript: {
      ignoreBuildErrors: true,
    },
    // Disable ESLint checks during build
    eslint: {
      ignoreDuringBuilds: true,
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
  };
  
  export default nextConfig;
  