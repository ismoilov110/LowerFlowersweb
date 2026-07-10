import HeroFlower from "@/assets/Img/Flower.img.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function HeroImage() {

  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.from(imageRef.current, {
      y: 80,
      opacity: 0,
      scale: .8,
      rotate: -8,
      duration: 1.4,
      ease: "power4.out",
    }
    );

  }, [])
  return (
    <div ref={imageRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[30%] z-10 pointer-events-none select-none">
      <img src={HeroFlower} alt="Flower" className="w-[950px] xl:w-[1150px] 2xl:w-[1300px] max-w-none object-cover" />
    </div>
  )
}
