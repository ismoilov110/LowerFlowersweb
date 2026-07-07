import type { BurgerButtonProps } from "@/Types/types";
import { Menu, X } from "lucide-react";

export default function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            className="
                flex items-center justify-center
                w-[40px] h-[40px]
                text-white
                bg-transparent
                border border-[#43FFD2]/30
                rounded-full
                cursor-pointer
                transition-all
                duration-300
                hover:text-[#43FFD2]
                hover:border-[#43FFD2]
                hover:scale-105
                focus:outline-none
            "
        >
            {isOpen ? <X size={20} className="transition-transform duration-300 rotate-90" /> : <Menu size={20} />}
        </button>
    );
}
