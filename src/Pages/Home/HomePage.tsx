import Catolog from "@/components/Catalog/Catolog";
import Hero from "@/components/Header/Hero";
import CatalogProducts from "@/components/Products/CatalogProduct/CatalogProducts";
import PopularProducts from "@/components/Products/PopularProduct/PopularProducts";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <Hero />
      <Catolog />
      <CatalogProducts />
      <PopularProducts/>
    </div>
  )
}
