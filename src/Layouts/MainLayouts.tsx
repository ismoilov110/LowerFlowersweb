import { Outlet, useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar/Navbar";
import NavUniversal from "@/components/UniversalNav/NavUniversal";
import BackgroundEffects from "@/components/BackroundEffcetive/BackroundEffective";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/Context/CartContext";
import CartDrawer from "@/components/ShopCart/CartDrawer";

export default function MainLayout() {
    const location = useLocation();

    const isHeroLayout = location.pathname === "/" || location.pathname === "/catelogy";

    return (
        <CartProvider>
            <main className="relative min-h-screen overflow-hidden bg-[#040A0A] text-white">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <BackgroundEffects />
                </div>

                <div className="relative z-10 flex flex-col min-h-screen">
                    {isHeroLayout ? <Navbar /> : <NavUniversal />}

                    <div className="flex-1 w-full">
                        <Outlet />
                    </div>

                    <Footer />
                </div>
            </main>
            <CartDrawer />
        </CartProvider>
    );
}