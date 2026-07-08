import type { SearchInputProps } from "@/Types/types";
import { Search, X } from "lucide-react";

export default function SearchInput({
    isOpen,
    setIsOpen,
    inputContainerRef,
    inputElementRef,
}: SearchInputProps) {
    return (
        <div
            ref={inputContainerRef}
            aria-hidden={!isOpen}
            className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2

                flex
                items-center

                w-[260px]
                sm:w-[300px]
                lg:w-[320px]

                h-[46px]

                px-4

                rounded-full

                border
                border-[#43FFD2]/20

                bg-[#091111]/90

                backdrop-blur-xl

                shadow-[0_8px_35px_rgba(67,255,210,.18)]

                transition-all
                duration-300

                focus-within:border-[#43FFD2]
                focus-within:shadow-[0_0_35px_rgba(67,255,210,.35)]

                z-10
            "
        >
            {/* Search Icon */}

            <Search
                size={18}
                className="
                    shrink-0
                    text-[#43FFD2]
                "
            />

            {/* Input */}

            <input
                ref={inputElementRef}
                type="text"
                placeholder="Поиск цветов..."
                className="
                    flex-1

                    ml-3

                    bg-transparent

                    outline-none

                    text-[14px]
                    font-medium

                    text-white

                    placeholder:text-[#7B8A89]
                "
            />

            {/* Close Button */}

            <button
                onClick={() => setIsOpen(false)}
                className="
                    flex
                    items-center
                    justify-center

                    w-8
                    h-8

                    rounded-full

                    text-[#8A9998]

                    transition-all
                    duration-300

                    hover:bg-[#43FFD2]/10
                    hover:text-[#43FFD2]
                    hover:rotate-90
                "
            >
                <X size={16} />
            </button>
        </div>
    );
}