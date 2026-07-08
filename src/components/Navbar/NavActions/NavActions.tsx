import SearchButton from "./SearButton/SearchButton";
import SearchInput from "./SearchInput/SearchInput";

import { useEffect,  useRef,  useState } from "react";
import gsap from "gsap";

import { Link } from "react-router-dom";

export default function NavActions() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const buttonRef = useRef<HTMLDivElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const inputElementRef = useRef<HTMLInputElement>(null);

    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!buttonRef.current || !inputContainerRef.current) return;

        gsap.set(inputContainerRef.current, {
            autoAlpha: 0,
            scale: 0.92,
            x: -15,
            pointerEvents: "none",
            position: "absolute",
            left: 0,
            top: "50%",
            yPercent: -50,
        });

        tl.current = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.35,
                ease: "power3.out",
            },
        });

        tl.current
            .to(
                buttonRef.current,
                {
                    autoAlpha: 0,
                    scale: 0.9,
                    duration: 0.25,
                    pointerEvents: "none",
                },
                0
            )
            .to(
                inputContainerRef.current,
                {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    pointerEvents: "auto",

                    onStart: () => {
                        inputElementRef.current?.focus();
                    },
                },
                0
            );

        return () => {
            tl.current?.kill();
        };
    }, []);

    useEffect(() => {
        if (!tl.current) return;

        if (isSearchOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
            inputElementRef.current?.blur();
        }
    }, [isSearchOpen]);

    return (
        <div className="flex items-center gap-10">

            {/* Search */}

            <div className="relative w-[110px] h-[46px]">

                <SearchButton
                    isOpen={isSearchOpen}
                    setIsOpen={setIsSearchOpen}
                    buttonRef={buttonRef}
                />

                <SearchInput
                    isOpen={isSearchOpen}
                    setIsOpen={setIsSearchOpen}
                    inputContainerRef={inputContainerRef}
                    inputElementRef={inputElementRef}
                />

            </div>

            {/* Contact */}

            <div className="hidden xl:flex items-start gap-10">

                <div className="flex flex-col gap-1">

                    <Link
                        to="mailto:ZAKAZ@LOVERFLOWER.BY"
                        className="text-[#43FFD2] text-[12px] font-semibold uppercase tracking-[.08em]"
                    >
                        ZAKAZ@LOVERFLOWER.BY
                    </Link>

                    <span className="text-[#889996] text-[10px] uppercase">
                        ДОСТАВКА 24/7
                    </span>

                </div>

                <div className="flex flex-col gap-1">

                    <span className="text-[#43FFD2] text-[12px] font-semibold uppercase tracking-[.08em]">
                        УЛ. ТИМИРЯЗЕВА 67
                    </span>

                    <span className="text-[#889996] text-[10px]">
                        10:00 ДО 21:00
                    </span>

                    <span className="text-[#889996] text-[10px]">
                        БЕЗ ВЫХОДНЫХ
                    </span>

                </div>

            </div>

        </div>
    );
}