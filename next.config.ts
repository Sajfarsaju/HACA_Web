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
      {
        source: "/finance-school",
        destination: "/not-available",
        permanent: false,
      },
      {
        source: "/finance-school/:path*",
        destination: "/not-available",
        permanent: false,
      },
      {
        source: "/web-development-mastery",
        destination: "/not-available",
        permanent: false,
      },
      {
        source: "/creators-club",
        destination: "/not-available",
        permanent: false,
      },
      {
        source: "/performance-marketing-mastery",
        destination: "/not-available",
        permanent: false,
      },
      {
        source: "/performance-marketing-mastery/:path*",
        destination: "/not-available",
        permanent: false,
      },
      {
        source: "/branding-pitch-for-clients",
        destination: "/not-available",
        permanent: false,
      },
      {
        source: "/branding-pitch-for-clients/:path*",
        destination: "/not-available",
        permanent: false,
      },
      {
        source: "/blog/what-is-tax-planning",
        destination: "/article-not-available",
        permanent: false,
      },
      {
        source: "/blog/non-cash-expenses",
        destination: "/article-not-available",
        permanent: false,
      },
      {
        source: "/blog/career-in-accounting-and-finance",
        destination: "/article-not-available",
        permanent: false,
      },
      {
        source: "/blog/what-is-financial-planning",
        destination: "/article-not-available",
        permanent: false,
      },
      {
        source: "/blog/top-4-tools-used-in-accounting",
        destination: "/article-not-available",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
