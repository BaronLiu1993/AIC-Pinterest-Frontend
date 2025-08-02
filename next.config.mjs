/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "www.artic.edu",
          },
        ],
      },
};

export default nextConfig;
