import type { SearchButtonProps } from "@/Types/types";
import { Button } from "../../../ui/button";
import { Search } from "lucide-react";


export default function SearchButton({ isOpen, setIsOpen, buttonRef }: SearchButtonProps) {
    return (
        <div ref={buttonRef} className="flex items-center justify-center gap-2">
            <Button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 bg-transparent cursor-pointer text-white transition-all duration-300  hover:text-[#43FFD2]
        hover:-translate-y-[2px]">
                <Search size={18}/>
                <p className="font-medium text-[14px] leading-none uppercase text-white tracking-[0.08em]">поиск</p>
            </Button>
        </div>
    )
}
