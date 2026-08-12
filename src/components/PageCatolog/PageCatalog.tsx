import HeroBackground from "./HeroBackground";
import PageCatalogHero from "./PageCatalogHero";
import CatalogAside from "./CatalogAside";
import PageCatologFilter from "./PageCatologFilter";

export default function PageCatalog() {
  return (
    <section className="relative min-h-screen">
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

        {/* Catalog Hero Content */}
        <div className="relative z-20">
          <PageCatalogHero />
        </div>
        {/* Catalog Filter */}
        <PageCatologFilter />
      </div>
    </section>
  );
}
