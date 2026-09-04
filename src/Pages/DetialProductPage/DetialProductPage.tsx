import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import { getProductById } from "@/API/Product";
import DetialProductGallery from "@/components/DetialProduct/DetialProductGallery";
import { Styles } from "@/Styles/Styles";
import DetialProductInfo from "@/components/DetialProduct/DetialProductInfo";
import ExtraServices from "@/components/DetialProduct/ExtraServices";

export default function DetialProductPage() {
  const { id } = useParams()
  const product = getProductById(Number(id))

  if (!product) {
    return (
      <div>Mahsulot topilmadi</div>
    )
  }
  return (
    <div>
      <Breadcrumb items={[
        { label: "Главная", href: "/" },
        { label: "Каталог букетов", href: "/catelogy" },
        { label: product?.category || "Популярное", href: "/catelogy?category=popular" },
        { label: product?.title || "рубиновые искры" }
      ]} />

      <div className={Styles.container + "grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8"}>
        <DetialProductGallery product={product} />
        <DetialProductInfo product={product} />
      </div>
      <ExtraServices />
    </div>
  )
}