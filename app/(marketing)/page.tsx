import { HomePageContent } from "@/components/sections/HomePageContent";
import { getLatestBlogsForHome } from "@/lib/blog-api";
import type { Metadata } from "next"
import type { PlacementGroup } from "@/components/sections/PlacementSection";

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
  const [homeBlogs, placementGroups] = await Promise.all([
    getLatestBlogsForHome(3),
    fetchPlacementGroups(),
  ]);
  return <HomePageContent homeBlogs={homeBlogs} placementGroups={placementGroups} />;
}
