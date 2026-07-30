import { Styles } from "@/Styles/Styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import Logos from "./Logo";
import NavbarLinks from "./NavLinks";
import NavActions from "./NavActions/NavActions";
import BurgerButton from "@/components/Navbar/BurgerButton";
import MobileMenu from "./MobileMenu/MobileMene";

/**
 * Responsive Navbar Component.
 * 
 * Layouts:
 * - Desktop (lg and up): [Logo] [NavbarLinks] [NavActions (Search, Contact)]
 * - Mobile/Tablet (less than lg): [Burger Button] [Shopping Cart Button]
 */
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={Styles.container + " relative z-50"}>
            {/* Mobile Fullscreen Navigation Drawer */}
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            {/* ========================================================= */}
            {/* 1. DESKTOP NAVBAR (lg and up) - 100% Unchanged Layout */}
            {/* ========================================================= */}
            <div
                className="
                    hidden
                    lg:grid
                    grid-cols-[auto_1fr_auto]
                    items-center
                    gap-4
                    lg:gap-8
                    xl:gap-12
                "
            >
                {/* Logo */}
                <div className="shrink-0">
                    <Logos />
                </div>

                {/* Desktop Navigation Links */}
                <div className="flex justify-center w-full">
                    <NavbarLinks />
                </div>

                {/* Right Actions (Search + Contact) */}
                <div className="flex items-center justify-end">
                    <NavActions />
                </div>
            </div>

            {/* ========================================================= */}
            {/* 2. MOBILE & TABLET NAVBAR (less than lg) */}
            {/* ========================================================= */}
            <div
                className="
                    flex
                    lg:hidden
                    items-center
                    justify-between
                    w-full
                    h-[50px]
                    relative
                    z-50
                "
            >
                {/* Left Side: Burger Menu Button */}
                <div className="flex items-center">
                    <BurgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>

                {/* Right Side: Shopping Cart Button */}
                <div className="flex items-center">
                    <Link
                        to="/cart"
                        onClick={() => setIsMenuOpen(false)}
                        className="
                            relative
                            cursor-pointer
                            flex
                            items-center
                            justify-center
                            w-10
                            h-10
                            rounded-full
                            border
                            border-[#43FFD2]/30
                            text-white
                            bg-transparent
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:text-[#43FFD2]
                            hover:border-[#43FFD2]
                            hover:shadow-[0_0_15px_rgba(67,255,210,0.2)]
                        "
                        aria-label="Корзина"
                    >
                        <HiOutlineShoppingBag size={20} />
                        {/* Cart count badge */}
                        <span
                            className="
                                absolute
                                -top-1
                                -right-1
                                w-4
                                h-4
                                rounded-full
                                bg-[#43FFD2]
                                text-[#040A0A]
                                text-[9px]
                                font-bold
                                flex
                                items-center
                                justify-center
                            "
                        >
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;