import SearchButton from "./SearButton/SearchButton";
import SearchInput from "./SearchInput/SearchInput";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function NavActions() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    // Create refs for target DOM elements to allow GSAP animations
    const buttonRef = useRef<HTMLDivElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);
    const inputElementRef = useRef<HTMLInputElement>(null);
    const contactRef = useRef<HTMLDivElement>(null); // Ref for Figma contact details
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        // Measure the button's initial width to make the search input morph from that size
        const buttonWidth = buttonRef.current ? buttonRef.current.offsetWidth : 110;
        
        // 1. Set the initial state of the search input to avoid any layout flash on mount
        gsap.set(inputContainerRef.current, {
            autoAlpha: 0,
            scale: 0.95,
            width: buttonWidth || 110,
            pointerEvents: "none",
            transformOrigin: "left center", // Morph and expand rightward towards contact details
            position: "absolute",
            left: 0,
            top: "50%",
            yPercent: -50
        });

        // Set the initial state of the contact details (visible and in place)
        gsap.set(contactRef.current, {
            autoAlpha: 1,
            x: 0,
            pointerEvents: "auto"
        });

        // 2. Build the GSAP timeline for morphing search button into search input
        // Meets duration guidelines (0.4s) and uses the premium power3.out easing
        tl.current = gsap.timeline({
            paused: true,
            defaults: { duration: 0.4, ease: "power3.out" }
        })
        .to(buttonRef.current, {
            autoAlpha: 0,
            scale: 0.85,
            x: -15, // Slide left slightly on hide
            pointerEvents: "none"
        }, 0)
        .to(contactRef.current, {
            autoAlpha: 0,
            scale: 0.95,
            x: 15, // Slide right slightly on hide to clear space
            pointerEvents: "none"
        }, 0)
        .fromTo(inputContainerRef.current,
            {
                width: buttonWidth || 110,
                autoAlpha: 0,
                scale: 0.95,
                x: -15
            },
            {
                width: 320,
                autoAlpha: 1,
                scale: 1,
                x: 0,
                pointerEvents: "auto",
                onStart: () => {
                    // Snappily focus input element as soon as animation starts
                    if (inputElementRef.current) {
                        inputElementRef.current.focus();
                    }
                }
            },
            0
        );

        return () => {
            // Clean up timeline on component unmount
            if (tl.current) {
                tl.current.kill();
            }
        };
    }, []);

    // 3. Play or reverse timeline based on search open state
    useEffect(() => {
        if (!tl.current) return;

        if (isSearchOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
            // Blur the input element when closing search
            if (inputElementRef.current) {
                inputElementRef.current.blur();
            }
        }
    }, [isSearchOpen]);

    return (
        // Fixed height container ensures the Navbar does not change size or jump during transition
        <div className="relative flex items-center justify-end gap-16 h-[48px]">
            {/* Search Wrapper */}
            <div className="relative flex items-center">
                <SearchButton isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} buttonRef={buttonRef} />
                <SearchInput isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} inputContainerRef={inputContainerRef} inputElementRef={inputElementRef} />
            </div>

            {/* Contact Details (Figma Design Layout) */}
            <div ref={contactRef} className="hidden mt-5 xl:flex items-start gap-12 text-left select-none">
                {/* Column 1: Email and Delivery Info */}
                <div className="flex flex-col gap-1">
                    <Link 
                        to="mailto:ZAKAZ@LOVERFLOWER.BY" 
                        className="text-[#43FFD2] font-semibold text-[12px] tracking-[0.08em] uppercase leading-none hover:underline whitespace-nowrap"
                    >
                        ZAKAZ@LOVERFLOWER.BY
                    </Link>
                    <span className="text-[#889996] text-[10px] font-medium tracking-[0.05em] uppercase leading-none mt-1 whitespace-nowrap">
                        ДОСТАВКА 24/7 ПО ДОГОВОРЕННОСТИ С ОПЕРАТОРОМ
                    </span>
                </div>

                {/* Column 2: Address and Work Hours */}
                <div className="flex flex-col gap-1">
                    <span className="text-[#43FFD2] font-semibold text-[12px] tracking-[0.08em] uppercase leading-none whitespace-nowrap">
                        УЛ. ТИМИРЯЗЕВА 67
                    </span>
                    <span className="text-[#889996] text-[10px] font-medium tracking-[0.05em] uppercase leading-none mt-1 whitespace-nowrap">
                        10:00 ДО 21:00
                    </span>
                    <span className="text-[#889996] text-[10px] font-medium tracking-[0.05em] uppercase leading-none mt-1 whitespace-nowrap">
                        БЕЗ ВЫХОДНЫХ
                    </span>
                </div>
            </div>
        </div>
    );
}
