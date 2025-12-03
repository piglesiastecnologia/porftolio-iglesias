/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // você já tá usando /app
  },
  // Se usar imagens remotas, depois a gente adiciona:
  // images: {
  //   domains: ["..."],
  // },
};

export default nextConfig;
