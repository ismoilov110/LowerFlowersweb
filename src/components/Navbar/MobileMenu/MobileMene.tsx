import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import NavLinks from "../NavLinks";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Fullscreen Mobile Drawer Menu.
 * 
 * Contains:
 * - Search bar (moved out of the main mobile header)
 * - Navigation links
 * - Social media links (Instagram, Telegram, WhatsApp)
 * - Full store contact details & requisites
 */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [searchQuery, setSearchQuery] = useState("");

    // Lock page body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle mobile search submit
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Can redirect to `/catelogy?search=...`
            onClose();
        }
    };

    // Social accounts
    const socials = [
        {
            id: 1,
            to: "/instagram",
            icon: <SiInstagram size={20} />,
            label: "Instagram"
        },
        {
            id: 2,
            to: "/telegram",
            icon: <FaTelegram size={20} />,
            label: "Telegram"
        },
        {
            id: 3,
            to: "/whatsapp",
            icon: <FaWhatsapp size={20} />,
            label: "WhatsApp"
        }
    ];

    return (
        <div
            className={`
                fixed
                inset-0
                w-full
                h-screen
                bg-[#040404]
                lg:hidden
                z-40
                overflow-y-auto
                transition-all
                duration-500
                ease-in-out
                flex
                flex-col
                px-6
                pt-24
                pb-10
                ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"}
            `}
        >
            {/* Ambient Background Blur Glows */}
            <div
                className="
                    absolute
                    -top-28
                    left-1/2
                    -translate-x-1/2
                    w-[320px]
                    h-[320px]
                    rounded-full
                    bg-[#43FFD2]/10
                    blur-[120px]
                    pointer-events-none
                "
            />
            <div
                className="
                    absolute
                    bottom-10
                    right-[-50px]
                    w-[250px]
                    h-[250px]
                    rounded-full
                    bg-[#7D2253]/15
                    blur-[100px]
                    pointer-events-none
                "
            />

            {/* Inner Content Wrapper */}
            <div className="relative z-10 flex flex-col flex-1 max-w-[400px] mx-auto w-full pt-4">
                
                {/* 1. Mobile Search Bar */}
                <form onSubmit={handleSearchSubmit} className="relative w-full mb-8">
                    <div className="flex items-center w-full h-[46px] px-5 rounded-full border border-[#43FFD2]/25 bg-[#091111]/95 focus-within:border-[#43FFD2] focus-within:shadow-[0_0_20px_rgba(67,255,210,0.18)] transition-all duration-300">
                        <Search size={18} className="text-[#43FFD2] shrink-0" />
                        <input
                            type="text"
                            placeholder="Поиск цветов..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 ml-3 bg-transparent outline-none text-sm text-white placeholder:text-[#7B8A89]"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery("")}
                                className="text-white/40 hover:text-white p-1"
                                aria-label="Очистить"
                            >
                                <X size={15} />
                            </button>
                        )}
                    </div>
                </form>

                {/* 2. Navigation Links */}
                <div className="w-full mb-6">
                    <NavLinks
                        layout="mobile"
                        onLinkClick={onClose}
                    />
                </div>

                {/* Spacer to push contacts to the bottom */}
                <div className="flex-grow" />

                {/* 3. Social Media Links */}
                <div className="flex items-center gap-6 justify-center my-6">
                    {socials.map((item) => (
                        <Link
                            key={item.id}
                            to={item.to}
                            onClick={onClose}
                            className="
                                w-11
                                h-11
                                rounded-full
                                border
                                border-[#43FFD2]/20
                                bg-[#00000033]
                                flex
                                items-center
                                justify-center
                                text-[#43FFD2]
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:text-white
                                hover:border-[#43FFD2]
                                hover:shadow-[0_0_15px_rgba(67,255,210,0.35)]
                            "
                            aria-label={item.label}
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>

                {/* 4. Contact Information Section */}
                <div className="flex flex-col gap-6 border-t border-white/5 pt-8 text-center select-none">
                    
                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <a
                            href="mailto:ZAKAZ@LOVERFLOWER.BY"
                            className="text-[#43FFD2] font-semibold text-xs tracking-[0.1em] uppercase hover:text-white transition-colors duration-300"
                        >
                            ZAKAZ@LOVERFLOWER.BY
                        </a>
                        <span className="text-[#889996] text-[10px] tracking-[0.05em] uppercase leading-none mt-1">
                            ДОСТАВКА 24/7 ПО ДОГОВОРЕННОСТИ С ОПЕРАТОРОМ
                        </span>
                    </div>

                    {/* Address & Hours */}
                    <div className="flex flex-col gap-1">
                        <span className="text-white/90 font-medium text-xs tracking-[0.1em] uppercase">
                            УЛ. ТИМИРЯЗЕВА 67
                        </span>
                        <span className="text-[#889996] text-[10px] tracking-[0.05em] uppercase leading-none mt-1">
                            10:00 ДО 21:00, БЕЗ ВЫХОДНЫХ
                        </span>
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1">
                        <a
                            href="tel:+375291136969"
                            className="text-white font-semibold text-xs tracking-[0.1em] hover:text-[#43FFD2] transition-colors duration-300"
                        >
                            +375 (29) 113-69-69
                        </a>
                        <span className="text-[#889996] text-[10px] tracking-[0.05em] uppercase leading-none mt-1">
                            ПРИЕМ ЗВОНКОВ КРУГЛОСУТОЧНО
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}