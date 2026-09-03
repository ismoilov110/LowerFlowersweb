import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import { getProductById } from "@/API/Product";

export default function DetialProductPage() {
  const {id} = useParams()
  const product = getProductById(Number(id))

  if (!product) {
    return (
      <div>Mahsulot topilmadi</div>
    )
  }
  return (
    <div >
      <Breadcrumb items={[
        { label: "Главная", href: "/" },
        { label: "Каталог букетов", href: "/catelogy" },
        { label: product?.Category || "Популярное", href: "/catelogy?category=popular" },
        { label: product?.title || "рубиновые искры" }
      ]} />
    </div>
  )
}