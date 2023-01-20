const {
  PHASE_PRODUCTION_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/dist/shared/lib/constants');

module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  if (phase == PHASE_PRODUCTION_SERVER || phase == PHASE_PRODUCTION_BUILD) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      basePath: '/securityedu',
    };
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
  };
};
