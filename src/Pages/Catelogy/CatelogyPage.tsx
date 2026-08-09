import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import PageCatalog from "@/components/PageCatolog/PageCatalog";

export default function CatelogyPage() {
  return (
    <div>
      <Breadcrumb items={[
        { label: "Главная", href: "/" },
        { label: "Каталог" }
      ]} />
      <PageCatalog/>
    </div>
  )
}
