import type { SearchButtonProps } from "@/Types/types";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchButton({
    isOpen,
    setIsOpen,
    buttonRef,
}: SearchButtonProps) {
    return (
        <div
            ref={buttonRef}
            className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2

                z-10
            "
        >
            <Button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="
                    h-[46px]
                    px-0

                    flex
                    items-center
                    gap-2

                    bg-transparent
                    shadow-none

                    text-white

                    hover:bg-transparent
                    hover:text-[#43FFD2]

                    transition-all
                    duration-300

                    cursor-pointer

                    group
                "
            >
                <Search
                    size={18}
                    className="
                        transition-all
                        duration-300
                        group-hover:scale-110
                    "
                />

                <span
                    className="
                        uppercase
                        tracking-[0.08em]

                        text-[14px]
                        font-medium

                        transition-colors
                        duration-300
                    "
                >
                    Поиск
                </span>
            </Button>
        </div>
    );
}