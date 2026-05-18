import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/marketing-course-in-calicut",
        destination: "/digital-marketing-course-in-calicut",
        permanent: true,
      },
      {
        source: "/marketing-course-in-calicut/:path*",
        destination: "/digital-marketing-course-in-calicut/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
