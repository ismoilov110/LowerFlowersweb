import { catalogCategories } from "@/Constants/Data";

export default function PageCatalogHero() {
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

        {/* Categories Grid (Naturally Wrapping) */}
        <div className="flex flex-wrap gap-2.5 md:gap-3 mt-6 md:mt-8 justify-start items-center">
          {catalogCategories.map((category) => (
            <button
              key={category.id}
              className="
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-[#00000022]/10
                backdrop-blur-[10px]
                text-white/85
                text-[10px]
                md:text-[11px]
                font-medium
                tracking-[0.06em]
                uppercase
                transition-all
                duration-300
                hover:bg-[#43FFD2]/10
                hover:border-[#43FFD2]/30
                hover:text-[#43FFD2]
                hover:scale-[1.03]
                cursor-pointer
              "
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
