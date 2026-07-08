import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function HeroPhone() {
  return (
    <div className="absolute right-12 top-[58%]  hidden lg:flex flex-col items-start z-30">
      <p className=" text-[#43FFD2] text-[16px] font-light tracking-wide transition-all duration-300 hover:text-white"> +375 (29) 113-69-69</p>

      <Button className="flex items-center gap-2 mt-3 cursor-pointer  text-[#43FFD2] rounded-[10px] backdrop-blur-[20px] bg-[#00000033]/20 py-[10px] px-[18px] transition-all duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_#43FFD2] uppercase text-[14px] leading-none tracking-[0.12em] font-bold transition-all duration-300 hover:text-white ">
        <Phone size={15} />
        Заказать звонок
      </Button>
    </div>
  )
}
