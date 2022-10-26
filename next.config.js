const { PHASE_PRODUCTION_SERVER } = require('next/dist/shared/lib/constants');

module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  if (phase == PHASE_PRODUCTION_SERVER) {
    return {
      basePath: '/securityedu',
    };
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
  };
};
