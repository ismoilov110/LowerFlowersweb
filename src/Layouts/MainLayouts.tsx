import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/Navbar";
import BackgroundEffects from "@/components/BackroundEffcetive/BackroundEffective";
// import Footer from "@/components/Footer/Footer";

export default function MainLayout() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#040A0A]">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <BackgroundEffects />
            </div>

            {/* Main Content */}
            <div className="relative z-10">

                {/* Header */}
                <Navbar />

                {/* Current Page */}
                <Outlet />

                {/* Footer */}
                {/* <Footer /> */}

            </div>
        </main>
    );
}