import NewsBlogGrid from "@/components/layout/news/NewsBlogGrid";
import NewsFeatureCards from "@/components/layout/news/NewsFeatureCards";
import NewsHero from "@/components/layout/news/NewsHero";

export default function NewsPage() {
  return (
    <main>
      <NewsHero />
      <NewsFeatureCards />
      <NewsBlogGrid />
    </main>
  );
}
