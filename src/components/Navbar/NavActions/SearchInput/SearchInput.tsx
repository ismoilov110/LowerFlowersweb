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
                flex items-center

                w-[320px]
                h-[48px]

                px-4

                rounded-full

                border border-[#43FFD2]/30

                bg-[#0A1111]/90

                backdrop-blur-xl

                shadow-[0_0_25px_rgba(67,255,210,0.15)]

                transition-[border-color,box-shadow]
                duration-300

                focus-within:border-[#43FFD2]

                focus-within:shadow-[0_0_45px_rgba(67,255,210,0.35)]
            "
        >

            {/* Search Icon */}

            <Search
                size={18}
                className="text-[#43FFD2]"
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

                    text-white

                    placeholder:text-gray-400
                "
            />

            {/* Close */}

            <button

                onClick={() => setIsOpen(false)}

                className="
                    ml-2

                    transition-all

                    duration-300

                    hover:text-[#43FFD2]

                    hover:rotate-90
                "
            >
                <X size={18} />
            </button>

        </div>

    );
}