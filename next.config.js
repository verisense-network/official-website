/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      trailingSlash: true,
    };
  }

  return {
    /* config options for all phases except development here */
    distDir: "docs",
    output: "export",
    crossOrigin: "anonymous",
    // trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
};
// const nextConfig = {
//   distDir: "dist",
//   output: "export",
//   crossOrigin: 'anonymous',
//   // trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// }

// module.exports = nextConfig
