// Homepage composition matches Guitare templates/index.json `order`:
//   slideshow → home-deal-banner → home-custom-section →
//   home-product-carousel → home-video-banner → home-grid-banner →
//   home-featured-blog
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { DealBanner } from "@/components/sections/DealBanner";
import { CustomSection } from "@/components/sections/CustomSection";
import { ProductCarousel } from "@/components/sections/ProductCarousel";
import { VideoBanner } from "@/components/sections/VideoBanner";
import { GridBanner } from "@/components/sections/GridBanner";
import { FeaturedBlog } from "@/components/sections/FeaturedBlog";
import { guitareHome } from "@/lib/content/home";
import type { Lang } from "@/lib/i18n";

const lang: Lang = "en";

export default function HomePage() {
  return (
    <>
      <Header lang={lang} />
      <main>
        <HeroSlideshow slides={guitareHome.hero} lang={lang} autoplay={false} />
        <DealBanner content={guitareHome.dealBanner} lang={lang} />
        <CustomSection content={guitareHome.customSection} lang={lang} />
        <ProductCarousel content={guitareHome.productCarousel} lang={lang} />
        <VideoBanner content={guitareHome.videoBanner} lang={lang} />
        <GridBanner content={guitareHome.gridBanner} lang={lang} />
        <FeaturedBlog content={guitareHome.featuredBlog} lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
