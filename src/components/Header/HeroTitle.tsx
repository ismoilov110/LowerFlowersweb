import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";

export default function HeroTitle() {

  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  // const buttonRef = useRef<HTMLButtonElement>(null)


  useEffect(() => {
    const letters = titleRef.current?.querySelectorAll(".letter")

    if (!letters) return

    gsap.from(letters, {
      y: 120,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",

    });

    gsap.from(descRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "power3.out",
      filter: "blur(10px)"
    })

  }, [])
  return (
    <div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center pt-24 md:pt-32 xl:pt-40">
        {/* Main Title */}
        <h1 ref={titleRef} className="uppercase text-white font-serif leading-[0.82] tracking-[0.04em] text-[70px] sm:text-[110px] md:text-[150px] lg:text-[180px] xl:text-[200px] ">
          <span className="block">
            {"LOVER".split("").map((letter, index) => (
              <span
                key={index}
                className="letter inline-block"
              >
                {letter}
              </span>
            ))}
          </span>
          <span className="block">
            {"Flower".split("").map((letter, index) => (
              <span
                key={index}
                className="letter inline-block"
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
        {/* Description */}

        <p ref={descRef} className="mt-8 max-w-[620px] text-white/80 text-[14px] md:text-[18px] leading-7 ">
          Создаём для тех, кто ценит свежесть <br className="hidden md:block" /> и изящество цветка
        </p>

        {/* Buttons */}

        <Button className="group relative overflow-hidden mt-12 h-[56px] px-12 rounded-full bg-[#43FFD2] text-black hover:text-white uppercase font-bold tracking-[0.12em] cursor-pointer transition-al duration-500 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(67,255,210,.45)]active:scale-[0.97]">
          смотреть каталог
        </Button>
      </div>
    </div>
  )
}
