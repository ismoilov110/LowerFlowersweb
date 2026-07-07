import { Styles } from "@/Styles/Styles";

import Logos from "./Logo";
import NavbarLinks from "./NavLinks";
import NavActions from "./NavActions/NavActions";
import BurgerButton from "@/components/Navbar/BurgerButton";
import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMene";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className={Styles.container + " relative z-50"}>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <div
                className="
                    grid
                    grid-cols-[auto_1fr_auto]
                    items-center

                    gap-4
                    lg:gap-8
                    xl:gap-12
                "
            >
                {/* ================= Logo ================= */}
                <div className="shrink-0">
                    <Logos />
                </div>

                {/* ================= Desktop Navigation ================= */}
                <div
                    className="
                        hidden
                        lg:flex

                        justify-center
                        w-full
                    "
                >
                    <NavbarLinks />
                </div>

                {/* ================= Right Side ================= */}
                <div className="flex items-center justify-end">
                    <NavActions />

                    {/* Burger faqat Mobile va Tablet uchun */}
                    <div className="ml-4 lg:hidden">
                        <BurgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;