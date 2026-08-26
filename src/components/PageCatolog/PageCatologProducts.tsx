import { useAppSelector } from "@/Store/hooks";
import { products } from "@/Constants/Data";
import ProductCard from "./ProductCard";

export default function PageCatologProducts() {
  const {
    selectedCategory,
    selectedSort,
    selectedColors,
    selectedFormats,
    priceRange,
    selectedFlowers,
  } = useAppSelector((state) => state.catalog);

  // Category mapping helper
  const matchCategory = (productCategory: string, selectedCategoryLabel: string) => {
    const pCat = productCategory.toLowerCase();
    const sLabel = selectedCategoryLabel.toLowerCase();

    if (sLabel.includes("розы") && pCat.includes("розы")) return true;
    if (sLabel.includes("пионы") && pCat.includes("пионы")) return true;
    if (sLabel.includes("тюльпаны") && pCat.includes("тюльпан")) return true;
    if (sLabel.includes("гортензии") && pCat.includes("гортенз")) return true;
    if (sLabel.includes("авторские") && pCat.includes("авторск")) return true;
    if (sLabel.includes("сборные") && pCat.includes("сборн")) return true;

    return sLabel.includes(pCat) || pCat.includes(sLabel);
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    // 1. Category Filter
    if (selectedCategory) {
      if (!matchCategory(product.category, selectedCategory)) {
        return false;
      }
    }

    // 2. Price Filter
    const priceInThousands = product.price / 1000;
    if (priceInThousands < priceRange[0] || priceInThousands > priceRange[1]) {
      return false;
    }

    // 3. Colors Filter
    if (selectedColors.length > 0) {
      const titleLower = product.title.toLowerCase();
      const matchesColor = selectedColors.some((color) => {
        const c = color.toLowerCase();
        if (c === "белый" && (titleLower.includes("бел") || titleLower.includes("облако"))) return true;
        if (c === "желтый" && (titleLower.includes("желт") || titleLower.includes("солнеч"))) return true;
        if (c === "зеленый" && (titleLower.includes("зелен") || titleLower.includes("сад"))) return true;
        if (c === "красный" && (titleLower.includes("красн") || titleLower.includes("малин") || titleLower.includes("любовь"))) return true;
        if (c === "оранжевый" && (titleLower.includes("оранж") || titleLower.includes("персик"))) return true;
        if (c === "розовый" && (titleLower.includes("розов") || titleLower.includes("пудров") || titleLower.includes("нежн"))) return true;
        if (c === "синий" && (titleLower.includes("син") || titleLower.includes("голуб") || titleLower.includes("небес"))) return true;
        return false;
      });
      if (!matchesColor) return false;
    }

    // 4. Formats Filter
    if (selectedFormats.length > 0) {
      const titleLower = product.title.toLowerCase();
      const catLower = product.category.toLowerCase();
      const matchesFormat = selectedFormats.some((format) => {
        const f = format.toLowerCase();
        if (f.includes("букет") && (titleLower.includes("букет") || catLower.includes("букет"))) return true;
        if (f.includes("композиция") && (titleLower.includes("композиц") || catLower.includes("композиц"))) return true;
        if (f.includes("коробке") && (titleLower.includes("коробк") || titleLower.includes("шкатулк"))) return true;
        return titleLower.includes(f) || catLower.includes(f);
      });
      if (!matchesFormat) return false;
    }

    // 5. Flowers Filter
    if (selectedFlowers.length > 0) {
      const titleLower = product.title.toLowerCase();
      const catLower = product.category.toLowerCase();
      const matchesFlower = selectedFlowers.some((flower) => {
        const fl = flower.toLowerCase();
        if (fl.includes("роза") && (titleLower.includes("роз") || catLower.includes("роз"))) return true;
        if (fl.includes("пион") && (titleLower.includes("пион") || catLower.includes("пион"))) return true;
        if (fl.includes("тюльпан") && (titleLower.includes("тюльпан") || catLower.includes("тюльпан"))) return true;
        if (fl.includes("гортензи") && (titleLower.includes("гортенз") || catLower.includes("гортенз"))) return true;
        return titleLower.includes(fl) || catLower.includes(fl);
      });
      if (!matchesFlower) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === "expensive") return b.price - a.price;
    if (selectedSort === "cheap") return a.price - b.price;
    return a.id - b.id; // по популярности
  });

  return (
    <section className="relative z-20 mb-[250px]">
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-white/60 text-base uppercase tracking-wider">
          Товары не найдены. Попробуйте сбросить фильтры.
        </div>
      )}
    </section>
  );
}
