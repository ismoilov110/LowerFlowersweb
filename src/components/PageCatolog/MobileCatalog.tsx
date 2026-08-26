import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import {
  setActiveSection,
  setSelectedCategory,
  setSelectedSort,
  toggleColor,
  toggleFormat,
  toggleFlower,
  setPriceRange,
  resetFilters,
  closeActiveSection,
} from "@/Store/slices/catalogSlice";
import { products, catalogCategories } from "@/Constants/Data";
import { CheckIcon } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import ProductCard from "./ProductCard";

const COLORS = ["белый", "желтый", "зеленый", "красный", "оранжевый", "розовый", "синий"];
const FORMATS = ["букет", "в вазе", "в конверте", "в корзине", "в шляпной коробке", "в ящике", "сборные букеты"];
const FLOWERS = ["Альстромерия", "Антуриум", "Аспарагус", "Астильба", "Астранция"];

export default function MobileCatalog() {
  const dispatch = useAppDispatch();
  const {
    activeSection,
    selectedCategory,
    selectedSort,
    selectedColors,
    selectedFormats,
    priceRange,
    selectedFlowers,
  } = useAppSelector((state) => state.catalog);

  const handleToggle = (section: "filter" | "sort" | "category") => {
    dispatch(setActiveSection(section));
  };

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
    <div className="w-full flex flex-col gap-6 px-4 pb-20 relative z-20">
      {/* MOBILE CONTROLS TOGGLES */}
      <div className="flex flex-col gap-3">
        {/* Toggle Filter */}
        <div>
          <button
            type="button"
            onClick={() => handleToggle("filter")}
            className={`
              flex
              items-center
              w-fit
              text-[11px]
              uppercase
              tracking-[0.08em]
              font-medium
              transition-colors
              duration-300
              cursor-pointer
              ${activeSection === "filter" ? "text-[#43FFD2]" : "text-[#d77bab]"}
            `}
          >
            <span>ФИЛЬТР ТОВАРОВ</span>
            <span className={`ml-3 text-[10px] transition-transform duration-300 ${activeSection === "filter" ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {/* Expanded Filter Panel */}
          {activeSection === "filter" && (
            <div className="w-full bg-[#040a0a]/95 border border-white/10 rounded-[20px] p-5 flex flex-col gap-6 mt-3 transition-all duration-300">
              {/* ПО ЦВЕТУ */}
              <div>
                <h4 className="font-bold text-[13px] leading-none uppercase text-[#43FFD2] mb-4">ПО ЦВЕТУ</h4>
                <div className="grid grid-cols-2 gap-3 text-white/90 text-[11px] uppercase">
                  {COLORS.map((color) => {
                    const isChecked = selectedColors.includes(color);
                    return (
                      <label key={color} className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => dispatch(toggleColor(color))}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-all ${isChecked ? "bg-[#43FFD2] border-[#43FFD2] text-[#040A0A]" : "border-white bg-transparent"}`}>
                          {isChecked && <CheckIcon size={12} strokeWidth={3} className="text-[#040A0A]" />}
                        </div>
                        <span>{color}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <hr className="border-white/10" />

              {/* ПО ФОРМАТУ */}
              <div>
                <h4 className="font-bold text-[13px] leading-none uppercase text-[#43FFD2] mb-4">ПО ФОРМАТУ</h4>
                <div className="grid grid-cols-1 gap-3 text-white/90 text-[11px] uppercase">
                  {FORMATS.map((format) => {
                    const isChecked = selectedFormats.includes(format);
                    return (
                      <label key={format} className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => dispatch(toggleFormat(format))}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-all ${isChecked ? "bg-[#43FFD2] border-[#43FFD2] text-[#040A0A]" : "border-white bg-transparent"}`}>
                          {isChecked && <CheckIcon size={12} strokeWidth={3} className="text-[#040A0A]" />}
                        </div>
                        <span>{format}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <hr className="border-white/10" />

              {/* СТОИМОСТЬ */}
              <div>
                <h4 className="font-bold text-[13px] leading-none uppercase text-[#43FFD2] mb-4">СТОИМОСТЬ</h4>
                <Slider
                  value={priceRange}
                  onValueChange={(val) => {
                    if (Array.isArray(val)) {
                      dispatch(setPriceRange([val[0], val[1]]));
                    }
                  }}
                  min={50}
                  max={400}
                  step={2}
                  className="mt-2 [&_[data-slot=slider-range]]:bg-[#43FFD2] [&_[data-slot=slider-thumb]]:bg-[#43FFD2] [&_[data-slot=slider-thumb]]:border-[#43FFD2]"
                />
                <p className="mt-4 text-[11px] font-light uppercase text-white">
                  ЦЕНА: {priceRange[0].toFixed(2)} ₽ - {priceRange[1].toFixed(2)} ₽
                </p>
              </div>

              <hr className="border-white/10" />

              {/* ПО ЦВЕТКУ */}
              <div>
                <h4 className="font-bold text-[13px] leading-none uppercase text-[#43FFD2] mb-4">ПО ЦВЕТКУ</h4>
                <div className="grid grid-cols-2 gap-3 text-white/90 text-[11px] uppercase">
                  {FLOWERS.map((flower) => {
                    const isChecked = selectedFlowers.includes(flower);
                    return (
                      <label key={flower} className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => dispatch(toggleFlower(flower))}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-all ${isChecked ? "bg-[#43FFD2] border-[#43FFD2] text-[#040A0A]" : "border-white bg-transparent"}`}>
                          {isChecked && <CheckIcon size={12} strokeWidth={3} className="text-[#040A0A]" />}
                        </div>
                        <span>{flower}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Reset filter button */}
              <button
                type="button"
                onClick={() => dispatch(resetFilters())}
                className="
                  mt-2
                  relative group w-full overflow-hidden rounded-lg border border-white/60 bg-white/[0.02] py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-all backdrop-blur-[10px] duration-500 cursor-pointer hover:border-[#43FFD2] hover:bg-[#43FFD2]/10 hover:text-[#43FFD2] hover:shadow-[0_0_20px_rgba(67,255,210,0.15)] active:scale-[0.98]
                "
              >
                <span className="relative z-10">Сбросить фильтр</span>
              </button>
            </div>
          )}
        </div>

        {/* Toggle Sorting */}
        <div>
          <button
            type="button"
            onClick={() => handleToggle("sort")}
            className={`
              flex
              items-center
              w-fit
              text-[11px]
              uppercase
              tracking-[0.08em]
              font-medium
              transition-colors
              duration-300
              cursor-pointer
              ${activeSection === "sort" ? "text-[#43FFD2]" : "text-[#d77bab]"}
            `}
          >
            <span>СОРТИРОВКА ТОВАРОВ</span>
            <span className={`ml-3 text-[10px] transition-transform duration-300 ${activeSection === "sort" ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {activeSection === "sort" && (
            <div className="w-full bg-[#040a0a]/95 border border-white/10 rounded-[20px] p-4 flex flex-col gap-3 mt-3 transition-all duration-300">
              {[
                { value: "popular", label: "по популярности" },
                { value: "expensive", label: "сначала дорогие" },
                { value: "cheap", label: "сначала дешевые" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    dispatch(setSelectedSort(option.value));
                    dispatch(closeActiveSection());
                  }}
                  className={`text-left text-[11px] uppercase tracking-[0.06em] font-medium transition-colors py-1 cursor-pointer ${selectedSort === option.value ? "text-[#43FFD2]" : "text-white/80 hover:text-white"}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Toggle Category */}
        <div>
          <button
            type="button"
            onClick={() => handleToggle("category")}
            className={`
              flex
              items-center
              w-fit
              text-[11px]
              uppercase
              tracking-[0.08em]
              font-medium
              transition-colors
              duration-300
              cursor-pointer
              ${activeSection === "category" ? "text-[#43FFD2]" : "text-[#d77bab]"}
            `}
          >
            <span>КАТЕГОРИИ</span>
            <span className={`ml-3 text-[10px] transition-transform duration-300 ${activeSection === "category" ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {activeSection === "category" && (
            <div className="w-full bg-[#040a0a]/95 border border-white/10 rounded-[20px] p-4 mt-3 transition-all duration-300">
              <div className="flex flex-wrap gap-2 items-center">
                {catalogCategories.map((category) => {
                  const isSelected = selectedCategory === category.label;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        if (isSelected) {
                          dispatch(setSelectedCategory(null));
                        } else {
                          dispatch(setSelectedCategory(category.label));
                        }
                        dispatch(closeActiveSection());
                      }}
                      className={`
                        px-3
                        py-2
                        rounded-full
                        border
                        text-[8px]
                        font-medium
                        tracking-[0.04em]
                        uppercase
                        whitespace-nowrap
                        transition-all
                        duration-300
                        active:scale-95
                        cursor-pointer
                        ${
                          isSelected
                            ? "bg-[#43FFD2]/10 border-[#43FFD2]/50 text-[#43FFD2]"
                            : "border-white/15 bg-black/20 text-white/85 hover:bg-[#43FFD2]/10 hover:border-[#43FFD2]/40 hover:text-[#43FFD2]"
                        }
                      `}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE PRODUCT LIST */}
      <div className="grid grid-cols-1 gap-8 mt-4 w-full max-w-[340px] mx-auto">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="text-center py-10 text-white/60 text-sm">
            Товары не найдены. Попробуйте сбросить фильтры.
          </div>
        )}
      </div>
    </div>
  );
}
