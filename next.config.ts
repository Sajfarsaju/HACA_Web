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
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
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
      // Blog URL redirects — old category-prefixed or shortened slugs
      // Both with and without trailing slash to avoid intermediate 308 hop
      {
        source: "/blog/design-school/15-best-figma-plugins",
        destination: "/blog/15-best-figma-plugins",
        permanent: true,
      },
      {
        source: "/blog/design-school/15-best-figma-plugins/",
        destination: "/blog/15-best-figma-plugins",
        permanent: true,
      },
      {
        source: "/blog/what-is-quality-score-in-google-ads",
        destination: "/blog/what-is-quality-score-in-google-ads-how-to-improve-it",
        permanent: true,
      },
      {
        source: "/blog/what-is-quality-score-in-google-ads/",
        destination: "/blog/what-is-quality-score-in-google-ads-how-to-improve-it",
        permanent: true,
      },
      {
        source: "/blog/career-guidance/skills-vs-college-degree-which-one-actually-gets-you-a-job-in-2026",
        destination: "/blog/skills-vs-college-degree-which-one-actually-gets-you-a-job-in-2026",
        permanent: true,
      },
      {
        source: "/blog/career-guidance/skills-vs-college-degree-which-one-actually-gets-you-a-job-in-2026/",
        destination: "/blog/skills-vs-college-degree-which-one-actually-gets-you-a-job-in-2026",
        permanent: true,
      },
      {
        source: "/blog/design-school/top-5-graphic-design-courses",
        destination: "/blog/top-5-graphic-design-courses",
        permanent: true,
      },
      {
        source: "/blog/design-school/top-5-graphic-design-courses/",
        destination: "/blog/top-5-graphic-design-courses",
        permanent: true,
      },
      {
        source: "/blog/digital-marketing/what-are-the-advantages-of-crm",
        destination: "/blog/what-are-the-advantages-of-crm",
        permanent: true,
      },
      {
        source: "/blog/digital-marketing/what-are-the-advantages-of-crm/",
        destination: "/blog/what-are-the-advantages-of-crm",
        permanent: true,
      },
      {
        source: "/blog/performance-marketing-mastery",
        destination: "/blog/performance-marketing-benefits",
        permanent: true,
      },
      {
        source: "/blog/performance-marketing-mastery/",
        destination: "/blog/performance-marketing-benefits",
        permanent: true,
      },
      {
        source: "/blog/professional-courses-in-dubai",
        destination: "/blog/top-8-most-demanding-professional-courses-in-dubai-for-2024",
        permanent: true,
      },
      {
        source: "/blog/professional-courses-in-dubai/",
        destination: "/blog/top-8-most-demanding-professional-courses-in-dubai-for-2024",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
