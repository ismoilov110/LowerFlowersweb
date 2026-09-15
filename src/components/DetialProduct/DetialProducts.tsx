
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Styles } from "@/Styles/Styles";
import { recommendedProducts } from "@/Constants/Data";
import type { RecommendedProductType } from "@/Types/types";
import { Check } from "lucide-react";

interface DetialProductsProps {
  title?: string;
  items?: RecommendedProductType[];
}

export default function DetialProducts({
  title = "ВАМ МОЖЕТ ПОНРАВИТЬСЯ:",
  items = recommendedProducts,
}: DetialProductsProps) {
  const navigate = useNavigate();
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const handleAddToCart = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (!addedIds.includes(id)) {
      setAddedIds((prev) => [...prev, id]);
      setTimeout(() => {
        setAddedIds((prev) => prev.filter((item) => item !== id));
      }, 1500);
    }
  };

  const handleProductClick = (id: number) => {
    // Navigate to product detail and scroll to top smoothly
    navigate(`/detialproduct/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={`${Styles.container} my-14 sm:my-20 lg:my-24 select-none`}>
      {/* Section Header with decorative horizontal line and center diamond accent */}
      <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.1em] uppercase text-[#43FFD2] whitespace-nowrap">
          {title}
        </h2>

        {/* Decorative line spanning to the right */}
        <div className="relative flex-1 flex items-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-[#43FFD2]/60 via-[#43FFD2]/30 to-transparent" />
          {/* Subtle center ornament diamond */}
          <div className="absolute left-1/4 -translate-x-1/2 w-2 h-2 rotate-45 border border-[#43FFD2]/70 bg-[#040A0A]" />
        </div>
      </div>

      {/* Product Cards Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
        {items.map((product) => {
          const isAdded = addedIds.includes(product.id);

          return (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="group flex flex-col items-center cursor-pointer transition-all duration-500"
            >
              {/* Image Box */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[3px] bg-[#0F0F0F] border border-white/10 transition-all duration-500 group-hover:border-[#43FFD2]/40 group-hover:shadow-[0_0_25px_rgba(67,255,210,0.15)] group-hover:-translate-y-1.5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* SALE Circular Badge (Green) */}
                {product.isSale && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#10B981] flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] tracking-wider">
                    SALE
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="mt-4 sm:mt-5 text-center text-sm sm:text-[15px] font-medium tracking-wide uppercase text-white transition-colors duration-300 group-hover:text-[#43FFD2]">
                {product.title}
              </h3>

              {/* Prices */}
              <div className="mt-1.5 flex items-center justify-center gap-2.5">
                <span className="text-sm sm:text-base font-semibold text-white">
                  {product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-xs sm:text-sm text-white/40 line-through font-normal">
                    {product.oldPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart Button (Rectangular outline style matching Figma) */}
              <button
                type="button"
                onClick={(e) => handleAddToCart(e, product.id)}
                className={`mt-3 sm:mt-4 w-full max-w-[160px] py-2 px-3 sm:px-4 rounded-[2px] border text-[11px] sm:text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 active:scale-95 ${
                  isAdded
                    ? "border-[#43FFD2] bg-[#43FFD2] text-black shadow-[0_0_15px_rgba(67,255,210,0.4)]"
                    : "border-white/30 text-white hover:border-[#43FFD2] hover:bg-[#43FFD2] hover:text-black hover:shadow-[0_0_15px_rgba(67,255,210,0.25)]"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={14} className="stroke-[2.5]" />
                    В КОРЗИНЕ
                  </>
                ) : (
                  "В КОРЗИНУ"
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

