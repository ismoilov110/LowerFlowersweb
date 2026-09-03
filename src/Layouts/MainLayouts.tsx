import { Outlet, useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar/Navbar";
import NavUniversal from "@/components/UniversalNav/NavUniversal";
import BackgroundEffects from "@/components/BackroundEffcetive/BackroundEffective";
import Footer from "@/components/Footer/Footer";

export default function MainLayout() {
    const location = useLocation();

    // Home (/) and Catalog (/catelogy) pages use the Hero Navbar
    // Other pages (detialproduct, faq, contacts, about, delivery) use UniversalNav
    const isHeroLayout = location.pathname === "/" || location.pathname === "/catelogy";

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#040A0A] text-white">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <BackgroundEffects />
            </div>

            {/* Main Content Layout with Sticky Navbar and Footer */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Header: Hero Navbar for Home/Catalog, UniversalNav for Detail/FAQ/Contacts etc. */}
                {isHeroLayout ? <Navbar /> : <NavUniversal />}

                {/* Current Page Content */}
                <div className="flex-1 w-full">
                    <Outlet />
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </main>
    );
}
