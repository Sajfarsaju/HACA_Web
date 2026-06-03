import { HomePageContent } from "@/components/sections/HomePageContent";
import { getLatestBlogsForHome } from "@/lib/blog-api";

export const metadata = {
  title: "HACA | Digital Marketing, Tech, Finance & Design Courses",
  description:
    "Build real-world skills with practical courses in digital marketing, technology, finance, and design. Learn through hands-on projects and industry-focused training.",
  openGraph: {
    title: "HACA | Digital Marketing, Tech, Finance & Design Courses",
    description:
      "Build real-world skills with practical courses in digital marketing, technology, finance, and design. Learn through hands-on projects and industry-focused training.",
    url: "https://harisandcoacademy.com/",
    siteName: "Haris & Co Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HACA | Digital Marketing, Tech, Finance & Design Courses",
    description:
      "Build real-world skills with practical courses in digital marketing, technology, finance, and design. Learn through hands-on projects and industry-focused training.",
  },
};

export default async function HomePage() {
  const homeBlogs = await getLatestBlogsForHome(3);
  return <HomePageContent homeBlogs={homeBlogs} />;
}
