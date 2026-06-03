import { HomePageContent } from "@/components/sections/HomePageContent";
import type { PlacementGroup } from "@/components/sections/PlacementSection";
import { getLatestBlogsForHome } from "@/lib/blog-api";
import { buildSitePageMetadata } from "@/lib/site-page-metadata";

async function fetchPlacementGroups(): Promise<PlacementGroup[]> {
  const base =
    process.env.NEXT_PUBLIC_BACKEND_URL ??
    process.env.BACKEND_URL ??
    "http://127.0.0.1:5000";
  try {
    const res = await fetch(`${base}/api/placements/grouped?limit=200`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.groups) ? data.groups : [];
  } catch {
    return [];
  }
}

export const metadata = buildSitePageMetadata({
  title: "HACA | Digital Marketing, Tech, Finance & Design Courses",
  description:
    "Build real-world skills with practical courses in digital marketing, technology, finance, and design. Learn through hands-on projects and industry-focused training.",
  canonical: "https://harisandcoacademy.com/",
  openGraphType: "website",
});

export default async function HomePage() {
  const [homeBlogs, placementGroups] = await Promise.all([
    getLatestBlogsForHome(3),
    fetchPlacementGroups(),
  ]);
  return <HomePageContent homeBlogs={homeBlogs} placementGroups={placementGroups} />;
}
