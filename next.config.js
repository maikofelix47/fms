/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  return {
    env: {
      DATABASE_URL: process.env.DATABASE_URL,
      API_URL: process.env.API_URL,
    },
  };
};

module.exports = nextConfig;
