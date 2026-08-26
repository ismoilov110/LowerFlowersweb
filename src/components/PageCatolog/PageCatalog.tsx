import HeroBackground from "./HeroBackground";
import HeroFlowers from "./HeroFlowers";
import PageCatalogHero from "./PageCatalogHero";
import CatalogAside from "./CatalogAside";
import PageCatologFilter from "./PageCatologFilter";
import PageCatologProducts from "./PageCatologProducts";
import MobileCatalog from "./MobileCatalog";

export default function PageCatalog() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* =========================
          BACKGROUND
      ========================== */}
      <HeroBackground />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px]">
        {/* Catalog Action Panel */}
        <CatalogAside />

        {/* Catalog Hero Content with scoped flowers */}
        <div className="relative">
          <HeroFlowers />
          <div className="relative z-20">
            <PageCatalogHero />
          </div>
        </div>

        {/* DESKTOP & TABLET VIEW (md and up) */}
        <div className="hidden md:grid grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-6 lg:gap-10 mt-6 px-4 md:px-6">
          {/* Catalog Filter */}
          <PageCatologFilter />

          {/* Catalog Products */}
          <PageCatologProducts />
        </div>

        {/* MOBILE VIEW (below md) */}
        <div className="block md:hidden">
          <MobileCatalog />
        </div>
      </div>
    </section>
  );
}
