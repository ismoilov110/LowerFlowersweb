import { Styles } from "@/Styles/Styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Phone } from "lucide-react";

import Logos from "@/components/Navbar/Logo";
import UniversalNavLinks from "./UniversalNavLinks";
import UniversalNavSearch from "./UniversalNavSearch";
import BurgerButton from "@/components/Navbar/BurgerButton";
import MobileMenu from "@/components/Navbar/MobileMenu/MobileMene";
import { Button } from "../ui/button";
import { useCart } from "@/Hooks/useCarts";

/**
 * Universal Navbar Component for Inner Pages (DetialProduct, FAQ, Contacts, About, Delivery).
 * 
 * Layouts:
 * - Desktop: [LF Logo] ------- [UniversalNavLinks + UniversalNavSearch] ------- [Phone + Cart]
 * - Mobile:  [Burger Button] ------- [LF Logo] ------- [Shopping Cart] + Drawer
 */
export default function NavUniversal() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { items, openCart } = useCart()

    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <header className="sticky top-0 z-50 w-full bg-[#040A0A]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <nav className={Styles.container}>
                {/* Mobile Fullscreen Navigation Drawer */}
                <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

                {/* ========================================================= */}
                {/* 1. DESKTOP NAVBAR (lg and up) - Exact Figma Design */}
                {/* ========================================================= */}
                <div className="hidden lg:flex items-center justify-between w-full">
                    {/* Left: LF Logo */}
                    <div className="shrink-0">
                        <Logos />
                    </div>

                    {/* Center: Navigation Links + Search */}
                    <div className="flex items-center gap-6 xl:gap-10">
                        <UniversalNavLinks layout="desktop" />
                        <UniversalNavSearch />
                    </div>

                    {/* Right: Phone Call Link + Shopping Cart */}
                    <div className="flex items-center gap-6 xl:gap-8 shrink-0">
                        {/* Phone Number */}
                        <Link
                            to="tel:+375291136969"
                            className="flex items-center gap-2 text-[#43FFD2] hover:text-white transition-colors duration-300 text-[13px] xl:text-[14px] font-medium tracking-wide whitespace-nowrap"
                        >
                            <Phone size={15} className="text-[#43FFD2]" />
                            <span>+375 (29) 113-69-69</span>
                        </Link>

                        {/* Cart Button */}
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
                </div>

                {/* ========================================================= */}
                {/* 2. MOBILE & TABLET NAVBAR (less than lg) */}
                {/* ========================================================= */}
                <div className="flex lg:hidden items-center justify-between w-full h-[50px] relative z-50">
                    {/* Left: Burger Menu Button */}
                    <div className="flex items-center">
                        <BurgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>

                    {/* Center: Logo */}
                    <div className="flex items-center">
                        <Logos />
                    </div>

                    {/* Right: Shopping Cart Button */}
                    <div className="flex items-center">
                        <button
                            onClick={() => { setIsMenuOpen(false); openCart(); }}
                            className="relative cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-[#43FFD2]/30 text-white bg-transparent transition-all duration-300 hover:scale-105 hover:text-[#43FFD2] hover:border-[#43FFD2] hover:shadow-[0_0_15px_rgba(67,255,210,0.2)]"
                            aria-label="Корзина"
                        >
                            <HiOutlineShoppingBag size={20} />
                            {/* Cart count badge */}
                            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#43FFD2] text-[#040A0A] text-[9px] font-bold flex items-center justify-center shadow-[0_0_8px_#43FFD2]">
                                {totalCount}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
