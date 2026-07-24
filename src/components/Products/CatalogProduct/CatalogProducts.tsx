import { Styles } from "@/Styles/Styles";
import CatalogProductCard from "./CatalogProductCard";

export default function CatalogProducts() {
  return (
    <section className={Styles.container}>
      <h2 className="mb-7 text-5xl text-white font-medium">Каталог Букетов</h2>
      <CatalogProductCard />
    </section>
  )
}
