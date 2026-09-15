import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import { getProductById } from "@/API/Product";
import DetialProductGallery from "@/components/DetialProduct/DetialProductGallery";
import { Styles } from "@/Styles/Styles";
import DetialProductInfo from "@/components/DetialProduct/DetialProductInfo";
import ExtraServices from "@/components/DetialProduct/ExtraServices";
import DetialProductPayment from "@/components/DetialProduct/DetialProductPayment/DetialProductPayment";
import DetialProducts from "@/components/DetialProduct/DetialProducts";

export default function DetialProductPage() {
  const { id } = useParams();
  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-white text-lg">
        Mahsulot topilmadi
      </div>
    );
  }

  return (
    <div className="w-full pb-10">
      <Breadcrumb
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог букетов", href: "/catelogy" },
          { label: product?.category || "Популярное", href: "/catelogy?category=popular" },
          { label: product?.title || "рубиновые искры" },
        ]}
      />

      {/* Main product view: Gallery & Info */}
      <div className={`${Styles.container} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-4 sm:mt-6 lg:mt-8 items-start`}>
        <DetialProductGallery product={product} />
        <DetialProductInfo product={product} />
      </div>

      {/* Extra services and Payment/Delivery tabs */}
      <div className={Styles.container}>
        <ExtraServices />
        <DetialProductPayment />
      </div>

      {/* Recommended products ("ВАМ МОЖЕТ ПОНРАВИТЬСЯ:") */}
      <DetialProducts />
    </div>
  );
}