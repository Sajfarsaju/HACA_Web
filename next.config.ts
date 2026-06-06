import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const noIndexPaths = [
      "/web-development-mastery",
      "/performance-marketing-mastery",
      "/performance-marketing-mastery/:path*",
      "/branding-pitch-for-clients",
      "/branding-pitch-for-clients/:path*",
    ];
    return noIndexPaths.map((source) => ({
      source,
      headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
    }));
  },
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
        source: "/creative-design-and-communication",
        destination: "/graphic-designing-course-in-calicut",
        permanent: true,
      },
      {
        source: "/creative-design-and-communication/:path*",
        destination: "/graphic-designing-course-in-calicut",
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
      {
        source: "/digital-marketing-course-in-ernakulam",
        destination: "/digital-marketing-course-in-kochi",
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-ernakulam/:path*",
        destination: "/digital-marketing-course-in-kochi",
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-kottayam",
        destination: "/digital-marketing-course-in-kerala",
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-kottayam/:path*",
        destination: "/digital-marketing-course-in-kerala",
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-alappuzha",
        destination: "/digital-marketing-course-in-kerala",
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-alappuzha/:path*",
        destination: "/digital-marketing-course-in-kerala",
        permanent: true,
      },
      {
        source: "/web-development-mastery",
        destination: "/marketing-school",
        permanent: false,
      },
      {
        source: "/performance-marketing-mastery",
        destination: "/marketing-school",
        permanent: false,
      },
      {
        source: "/performance-marketing-mastery/:path*",
        destination: "/marketing-school",
        permanent: false,
      },
      {
        source: "/branding-pitch-for-clients",
        destination: "/design-school",
        permanent: false,
      },
      {
        source: "/branding-pitch-for-clients/:path*",
        destination: "/design-school",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
