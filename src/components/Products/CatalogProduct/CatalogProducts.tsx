import { Styles } from "@/Styles/Styles";
import CatalogProductCard from "./CatalogProductCard";
import DetialProducts from "@/components/DetialProduct/DetialProducts";

interface CatalogProductsProps {
  title?: string;
  variant?: "catalog" | "recommended";
}

export default function CatalogProducts({
  title = "Каталог Букетов",
  variant = "catalog",
}: CatalogProductsProps = {}) {
  if (variant === "recommended" || title === "ВАМ МОЖЕТ ПОНРАВИТЬСЯ:") {
    return <DetialProducts title={title} />;
  }

  return (
    <section className={Styles.container}>
      <h2 className="mb-7 text-3xl sm:text-4xl lg:text-5xl text-white font-medium">{title}</h2>
      <CatalogProductCard />
    </section>
  );
}

export { DetialProducts };

