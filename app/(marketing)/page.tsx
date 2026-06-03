import { HomePageContent } from "@/components/sections/HomePageContent";
import { getLatestBlogsForHome } from "@/lib/blog-api";
import {
    buildPlacementSlots,
    fetchPlacementGroups,
} from "@/lib/placements-api";
import { buildSitePageMetadata } from "@/lib/site-page-metadata";

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
  const placementSlots = buildPlacementSlots(placementGroups);

  return (
    <HomePageContent
      homeBlogs={homeBlogs}
      placementSlots={placementSlots}
    />
  );
}
