import { HomePageContent } from "@/components/sections/HomePageContent";
import { getLatestBlogsForHome } from "@/lib/blog-api";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HACA | Build Production-Grade Web Experiences",
  description: "The official website of HACA. Experience the ultimate fusion of performance, design, and developer efficiency with our production-ready tech stack.",
  openGraph: {
    title: "HACA | Build Production-Grade Web Experiences",
    description: "Enterprise-ready foundations for modern web applications.",
    type: "website",
    url: "https://haca-web.com",
  },
}

export default async function HomePage() {
  const homeBlogs = await getLatestBlogsForHome(3);
  return <HomePageContent homeBlogs={homeBlogs} />;
}
