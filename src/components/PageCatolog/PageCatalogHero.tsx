import { useState, useRef, useEffect } from "react";
import { catalogCategories } from "@/Constants/Data";
import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import { setSelectedCategory, setSelectedSort } from "@/Store/slices/catalogSlice";

const sortOptions = [
  { value: "popular", label: "ПО ПОПУЛЯРНОСТИ" },
  { value: "expensive", label: "СНАЧАЛА ДОРОГИЕ" },
  { value: "cheap", label: "СНАЧАЛА ДЕШЕВЫЕ" },
];

export default function PageCatalogHero() {
  const dispatch = useAppDispatch();
  const { selectedCategory, selectedSort } = useAppSelector((state) => state.catalog);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-12">
      {/* Dark glassmorphic card container */}
      <div
        className="
          w-full
          bg-[#040a0a]/50
          backdrop-blur-[20px]
          rounded-[24px]
          border
          border-white/10
          p-6
          md:p-10
          lg:p-14
          flex
          flex-col
          gap-6
          md:gap-8
          shadow-2xl
        "
      >
        {/* Title */}
        <div className="flex flex-col font-serif uppercase text-white leading-none">
          <span
            className="
              text-[42px]
              sm:text-[64px]
              md:text-[84px]
              lg:text-[104px]
              xl:text-[112px]
              font-light
              tracking-[0.04em]
              self-start
              leading-[0.9]
            "
          >
            КАТАЛОГ
          </span>

          <span
            className="
              text-[42px]
              sm:text-[64px]
              md:text-[84px]
              lg:text-[104px]
              xl:text-[112px]
              font-light
              tracking-[0.04em]
              self-end
              leading-[0.9]
              mt-2
              md:mr-8
            "
          >
            БУКЕТОВ
          </span>
        </div>

        {/* Description */}
        <div
          className="
            self-end
            w-full
            md:max-w-[520px]
            md:mr-8
            text-left
            text-white/80
            text-[11px]
            md:text-[13px]
            font-light
            tracking-[0.08em]
            uppercase
            leading-relaxed
            mt-2
          "
        >
          В НАШЕМ МАГАЗИНЕ САМЫЙ БОЛЬШОЙ ВЫБОР БУКЕТОВ ДЛЯ ЛЮБЫХ
          <br className="hidden md:block" /> СОБЫТИЙ:
        </div>

        {/* ================================================= */}
        {/* DESKTOP CATEGORIES & SORTING */}
        {/* ================================================= */}

        <div className="hidden md:flex justify-between items-end gap-6 mt-6 md:mt-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2.5 md:gap-3 justify-start items-center max-w-[75%] lg:max-w-[80%]">
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
                  }}
                  className={`
                    px-4
                    py-2
                    rounded-full
                    border
                    text-[10px]
                    md:text-[11px]
                    font-medium
                    tracking-[0.06em]
                    uppercase
                    transition-all
                    duration-300
                    cursor-pointer
                    ${
                      isSelected
                        ? "bg-[#43FFD2]/10 border-[#43FFD2]/50 text-[#43FFD2] scale-[1.03]"
                        : "border-white/10 bg-[#00000022]/10 backdrop-blur-[10px] text-white/85 hover:bg-[#43FFD2]/10 hover:border-[#43FFD2]/30 hover:text-[#43FFD2] hover:scale-[1.03]"
                    }
                  `}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Sorting Dropdown */}
          <div ref={dropdownRef} className="relative z-30 shrink-0">
            <button
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="
                px-5
                py-2.5
                rounded-full
                border
                border-white/10
                bg-[#00000022]/10
                backdrop-blur-[10px]
                text-white
                text-[10px]
                md:text-[11px]
                font-medium
                tracking-[0.06em]
                uppercase
                flex
                items-center
                gap-2
                cursor-pointer
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-[#00000033]/20
              "
            >
              <span>{sortOptions.find(o => o.value === selectedSort)?.label || "ПО ПОПУЛЯРНОСТИ"}</span>
              <span className={`text-[8px] transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {isSortOpen && (
              <div
                className="
                  absolute
                  right-0
                  mt-2
                  w-[200px]
                  rounded-[16px]
                  border
                  border-white/10
                  bg-[#040a0a]/95
                  backdrop-blur-[20px]
                  py-2
                  shadow-2xl
                  flex
                  flex-col
                  gap-1
                "
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      dispatch(setSelectedSort(option.value));
                      setIsSortOpen(false);
                    }}
                    className={`
                      w-full
                      text-left
                      px-4
                      py-2
                      text-[10px]
                      md:text-[11px]
                      font-medium
                      tracking-[0.06em]
                      uppercase
                      transition-colors
                      cursor-pointer
                      ${
                        selectedSort === option.value
                          ? "text-[#43FFD2] bg-white/5"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}