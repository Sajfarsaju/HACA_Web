import { HomePageContent } from "@/components/sections/HomePageContent";
import { getLatestBlogsForHome } from "@/lib/blog-api";
import { buildSitePageMetadata } from "@/lib/site-page-metadata";

export const metadata = buildSitePageMetadata({
  title: "HACA | Digital Marketing, Tech, Finance & Design Courses",
  description:
    "Build real-world skills with practical courses in digital marketing, technology, finance, and design. Learn through hands-on projects and industry-focused training.",
  canonical: "https://harisandcoacademy.com/",
  openGraphType: "website",
});

export default async function HomePage() {
  const homeBlogs = await getLatestBlogsForHome(3);
  return <HomePageContent homeBlogs={homeBlogs} />;
}
