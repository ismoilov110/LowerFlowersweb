import { Button } from "@/components/ui/button";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from "@/Hooks/useCarts";

export default function HeroCart() {
  const { openCart, items } = useCart()
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <div className="absolute right-12 bottom-12 hidden lg:flex items-center justify-center gap-3 z-30">
      <Button onClick={openCart} className="relative cursor-pointer flex items-center justify-center w-14 h-14 rounded-[10px] backdrop-blur-[20px] bg-[#00000033]/20 transition-all duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_#43FFD2]  ">
        <HiOutlineShoppingBag size={24} className="text-white" />
        {/* Badge */}
        <span
          className="absolute
                        top-2
                        right-2
                        w-5
                        h-4
                        rounded-full

                        bg-[#43FFD2]

                        text-[#040A0A]

                        text-[11px]
                        font-bold

                        flex
                        items-center
                        justify-center
                    "
        >
         {totalCount}
        </span>
      </Button>
    </div>
  )
}
