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
      {
        source: "/digital-marketing-course-in-kottayam",
        destination: "/digital-marketing-course-in-kerala",
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-kottayam/:path*",
        destination: "/digital-marketing-course-in-kerala/:path*",
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-alappuzha",
        destination: "/digital-marketing-course-in-kerala",
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-alappuzha/:path*",
        destination: "/digital-marketing-course-in-kerala/:path*",
        permanent: true,
      },
      {
        source: "/creative-design-and-communication",
        destination: "/graphic-designing-course-in-kerala",
        permanent: true,
      },
      {
        source: "/creative-design-and-communication/:path*",
        destination: "/graphic-designing-course-in-kerala/:path*",
        permanent: true,
      },
      {
        source: "/introduction-to-graphic-design",
        destination: "/graphic-design-classes-online",
        permanent: true,
      },
      {
        source: "/introduction-to-graphic-design/:path*",
        destination: "/graphic-design-classes-online/:path*",
        permanent: true,
      },
      {
        source: "/main-page",
        destination: "/",
        permanent: true,
      },
      {
        source: "/guest-mentor",
        destination: "/mentors",
        permanent: true,
      },
      {
        source: "/guest-mentor/:path*",
        destination: "/mentors/:path*",
        permanent: true,
      },
      {
        source: "/student",
        destination: "/success-story",
        permanent: true,
      },
      {
        source: "/student/:path*",
        destination: "/success-story/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
