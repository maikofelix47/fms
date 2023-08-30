/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  return {
    env: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
  };
};

module.exports = nextConfig;
