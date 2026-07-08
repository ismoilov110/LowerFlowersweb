import { Button } from "../ui/button";

export default function HeroTitle() {
  return (
    <div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center pt-24 md:pt-32 xl:pt-40">
        {/* Main Title */}
        <h1 className="uppercase text-white font-serif leading-[0.82] tracking-[0.04em] text-[72px] sm:text-[110px] md:text-[150px] lg:text-[180px] xl:text-[200px] ">
          <span className="block">Lover</span>
          <span className="block">Flower</span>
        </h1>
        {/* Description */}

        <p className="mt-8 max-w-[620px] text-white/80 text-[14px] md:text-[18px] leading-7 ">
          Создаём для тех, кто ценит свежесть <br className="hidden md:block" /> и изящество цветка
        </p>

        {/* Buttons */}

        <Button className="mt-12 h-[54px] px-12 rounded-full bg-[#43FFD2] text-black uppercase fons-bold text-[12px] md:text-[14px]
        tracking-[0.12em] hover:bg-[#5fffe0] transition-all duration-300 ease-in-out cursor-pointer">
           смотреть каталог
        </Button>
      </div>
    </div>
  )
}
