import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Styles } from "@/Styles/Styles";
import {
    FooterCatalogLinks,
    FooterBouquetLinks,
    FooterNavigationLinks,
} from "@/Constants/Data";
import LogoImage from "@/assets/SVG/Group 33721 (1).svg";

/**
 * Premium dark-themed Footer component for the Lover Flower e-commerce store.
 * 
 * Design Features:
 * - Luxury boutique style
 * - Black background (#040404)
 * - Mint/cyan accent color (#43FFD2)
 * - Cormorant Garamond Serif typography for headers
 * - Geist Sans typography for links and copy
 * - Responsive layout: 5-column on desktop, 2-column on tablet, and single-column centered on mobile.
 */
export default function Footer() {
    return (
        <footer className="w-full bg-[#040404] text-white border-t border-white/10 pt-16 pb-10 font-sans select-none overflow-hidden relative">
            {/* Soft background glow overlay in the footer corner for premium depth */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#43FFD2] blur-[120px] mix-blend-screen" />
            </div>

            <div className={`${Styles.container} relative z-10`}>
                
                {/* ========================================================= */}
                {/* 1. DESKTOP & TABLET LAYOUT (2 Columns on Tablet, 5 Columns on Desktop) */}
                {/* ========================================================= */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 md:gap-x-12 lg:gap-x-8 items-start">
                    
                    {/* COLUMN 1: Logo & Company Requisites */}
                    <div className="flex flex-col h-full justify-between min-h-[220px]">
                        <div>
                            <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
                                <img 
                                    src={LogoImage} 
                                    alt="Lover Flower Logo" 
                                    className="h-16 w-auto" 
                                />
                            </Link>
                        </div>
                        
                        <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/5">
                            <h4 className="font-serif text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                                РЕКВИЗИТЫ
                            </h4>
                            <p className="text-[10.5px] text-white/40 leading-relaxed tracking-wider font-sans uppercase">
                                ИП Бортников В.А.
                                <br />
                                УНП 192334823
                                <br />
                                Свидетельство о гос. регистрации №192334823 выдано Мингорисполкомом от 25.08.2014 г.
                                <br />
                                Рег. номер в Торговом реестре РБ: 546282
                                <br />
                                Адрес для почты: ул. Тимирязева 67, Минск
                            </p>
                        </div>
                    </div>

                    {/* COLUMN 2: Catalog Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-serif text-sm font-semibold tracking-[0.2em] text-white/95 uppercase border-b border-white/10 pb-2.5">
                            КАТАЛОГ
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {FooterCatalogLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.slug}
                                        className="text-xs text-white/60 tracking-[0.08em] hover:text-[#43FFD2] hover:translate-x-1 transition-all duration-300 block uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: Bouquet Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-serif text-sm font-semibold tracking-[0.2em] text-white/95 uppercase border-b border-white/10 pb-2.5">
                            БУКЕТ
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {FooterBouquetLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.slug}
                                        className="text-xs text-white/60 tracking-[0.08em] hover:text-[#43FFD2] hover:translate-x-1 transition-all duration-300 block uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 4: General Navigation (No Title, aligned vertically) */}
                    <div className="flex flex-col gap-6">
                        {/* Title spacer block to align items vertically with Column 2 & 3 */}
                        <div className="h-[30px] border-b border-transparent hidden lg:block pb-2.5" />
                        <ul className="flex flex-col gap-3">
                            {FooterNavigationLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.slug}
                                        className="text-xs text-white/60 tracking-[0.08em] hover:text-[#43FFD2] hover:translate-x-1 transition-all duration-300 block uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 5: Contact Info & Socials */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-serif text-sm font-semibold tracking-[0.2em] text-white/95 uppercase border-b border-white/10 pb-2.5">
                            КОНТАКТЫ
                        </h3>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <a
                                href="mailto:ZAKAZ@LOVERFLOWER.BY"
                                className="text-[#43FFD2] font-semibold text-xs tracking-[0.1em] uppercase hover:text-white transition-colors duration-300 block"
                            >
                                ZAKAZ@LOVERFLOWER.BY
                            </a>
                            <span className="text-white/40 text-[9px] tracking-[0.05em] uppercase leading-none">
                                ДОСТАВКА 24/7 ПО ДОГОВОРЕННОСТИ С ОПЕРАТОРОМ
                            </span>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col gap-1">
                            <span className="text-white/90 font-medium text-xs tracking-[0.1em] uppercase">
                                УЛ. ТИМИРЯЗЕВА 67
                            </span>
                            <span className="text-white/40 text-[9px] tracking-[0.05em] uppercase leading-none">
                                10:00 ДО 21:00, БЕЗ ВЫХОДНЫХ
                            </span>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1">
                            <a
                                href="tel:+375291136969"
                                className="text-white font-semibold text-xs tracking-[0.1em] hover:text-[#43FFD2] transition-colors duration-300 block"
                            >
                                +375 (29) 113-69-69
                            </a>
                            <span className="text-white/40 text-[9px] tracking-[0.05em] uppercase leading-none">
                                ПРИЕМ ЗВОНКОВ КРУГЛОСУТОЧНО
                            </span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {/* Instagram Social Link */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#43FFD2] hover:text-[#43FFD2] hover:shadow-[0_0_15px_rgba(67,255,210,0.35)]"
                                aria-label="Instagram"
                            >
                                <svg 
                                    className="w-[15px] h-[15px]" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                </svg>
                            </a>
                            
                            {/* WhatsApp Social Link */}
                            <a
                                href="https://wa.me/375291136969"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#43FFD2] hover:text-[#43FFD2] hover:shadow-[0_0_15px_rgba(67,255,210,0.35)]"
                                aria-label="WhatsApp"
                            >
                                <svg 
                                    className="w-[15px] h-[15px]" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                                </svg>
                            </a>
                            
                            {/* Phone Call Link */}
                            <a
                                href="tel:+375291136969"
                                className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#43FFD2] hover:text-[#43FFD2] hover:shadow-[0_0_15px_rgba(67,255,210,0.35)]"
                                aria-label="Phone"
                            >
                                <Phone size={15} />
                            </a>
                        </div>

                    </div>

                </div>

                {/* ========================================================= */}
                {/* 2. MOBILE LAYOUT (Stack elements vertically, centered) */}
                {/* ========================================================= */}
                <div className="md:hidden flex flex-col items-center text-center gap-10 max-w-[360px] mx-auto px-4">
                    
                    {/* MOBILE 1. Logo */}
                    <div className="flex justify-center">
                        <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
                            <img 
                                src={LogoImage} 
                                alt="Lover Flower Logo" 
                                className="h-16 w-auto" 
                            />
                        </Link>
                    </div>

                    {/* MOBILE 2. Catalog links */}
                    <div className="w-full">
                        <h3 className="font-serif text-sm font-semibold tracking-[0.2em] text-white/90 uppercase mb-4">
                            КАТАЛОГ
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {FooterCatalogLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.slug}
                                        className="text-xs text-white/60 tracking-[0.08em] hover:text-[#43FFD2] transition-colors duration-300 block uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* MOBILE 3. Navigation links */}
                    <div className="w-full">
                        <ul className="flex flex-col gap-3">
                            {FooterNavigationLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.slug}
                                        className="text-xs text-white/60 tracking-[0.08em] hover:text-[#43FFD2] transition-colors duration-300 block uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* MOBILE 4. Email section */}
                    <div className="flex flex-col gap-1 w-full">
                        <a
                            href="mailto:ZAKAZ@LOVERFLOWER.BY"
                            className="text-[#43FFD2] font-semibold text-xs tracking-[0.08em] uppercase hover:text-white transition-colors duration-300 block"
                        >
                            ZAKAZ@LOVERFLOWER.BY
                        </a>
                        <span className="text-white/40 text-[9px] tracking-[0.05em] uppercase leading-none mt-1">
                            ДОСТАВКА 24/7 ПО ДОГОВОРЕННОСТИ С ОПЕРАТОРОМ
                        </span>
                    </div>

                    {/* MOBILE 5. Address section */}
                    <div className="flex flex-col gap-1 w-full">
                        <span className="text-white/90 font-medium text-xs tracking-[0.08em] uppercase">
                            УЛ. ТИМИРЯЗЕВА 67
                        </span>
                        <span className="text-white/40 text-[10px] tracking-[0.05em] uppercase leading-none mt-1">
                            10:00 ДО 21:00, БЕЗ ВЫХОДНЫХ
                        </span>
                    </div>

                    {/* MOBILE 6. Phone section */}
                    <div className="flex flex-col gap-1 w-full">
                        <a
                            href="tel:+375291136969"
                            className="text-white font-semibold text-xs tracking-[0.08em] hover:text-[#43FFD2] transition-colors duration-300 block"
                        >
                            +375 (29) 113-69-69
                        </a>
                        <span className="text-white/40 text-[9px] tracking-[0.05em] uppercase leading-none mt-1">
                            ПРИЕМ ЗВОНКОВ КРУГЛОСУТОЧНО
                        </span>
                    </div>

                    {/* MOBILE 7. Social icons */}
                    <div className="flex items-center gap-4 justify-center">
                        {/* Instagram Link */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#43FFD2] hover:text-[#43FFD2] hover:shadow-[0_0_15px_rgba(67,255,210,0.35)]"
                            aria-label="Instagram"
                        >
                            <svg 
                                className="w-[16px] h-[16px]" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                        </a>
                        
                        {/* WhatsApp Link */}
                        <a
                            href="https://wa.me/375291136969"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#43FFD2] hover:text-[#43FFD2] hover:shadow-[0_0_15px_rgba(67,255,210,0.35)]"
                            aria-label="WhatsApp"
                        >
                            <svg 
                                className="w-[16px] h-[16px]" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                            </svg>
                        </a>
                        
                        {/* Phone Link */}
                        <a
                            href="tel:+375291136969"
                            className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#43FFD2] hover:text-[#43FFD2] hover:shadow-[0_0_15px_rgba(67,255,210,0.35)]"
                            aria-label="Phone"
                        >
                            <Phone size={16} />
                        </a>
                    </div>

                    {/* MOBILE 8. Requisites section */}
                    <div className="w-full pt-6 border-t border-white/5">
                        <h4 className="font-serif text-xs font-semibold tracking-[0.2em] text-white/50 uppercase mb-3.5">
                            РЕКВИЗИТЫ
                        </h4>
                        <p className="text-[10px] text-white/40 leading-relaxed tracking-wider font-sans uppercase max-w-[280px] mx-auto">
                            ИП Бортников В.А.
                            <br />
                            УНП 192334823
                            <br />
                            Свидетельство о гос. регистрации №192334823 выдано Мингорисполкомом от 25.08.2014 г.
                            <br />
                            Рег. номер в Торговом реестре РБ: 546282
                        </p>
                    </div>

                </div>

                {/* ========================================================= */}
                {/* 3. COPYRIGHT SECTION (Subtle footer disclaimer) */}
                {/* ========================================================= */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <span className="text-[9.5px] text-white/30 uppercase tracking-[0.15em]">
                        © {new Date().getFullYear()} LOVER FLOWER. ВСЕ ПРАВА ЗАЩИЩЕНЫ
                    </span>
                    <a 
                        href="#" 
                        onClick={(e) => e.preventDefault()} 
                        className="text-[9.5px] text-white/30 uppercase tracking-[0.15em] hover:text-[#43FFD2] transition-colors duration-300"
                    >
                        РАЗРАБОТКА САЙТА
                    </a>
                </div>

            </div>
        </footer>
    );
}
