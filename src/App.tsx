import { Route, Routes } from "react-router-dom";

import MainLayout from "@/Layouts/MainLayouts";

import HomePage from "./Pages/Home/HomePage";
import DelevaryPage from "./Pages/Delevary/DelevaryPage";
import CatelogyPage from "./Pages/Catelogy/CatelogyPage";
import FAQPage from "./Pages/FAQ/FAQPage";
import ContankPage from "./Pages/Contak/ContankPage";
import AboutPage from "./Pages/About/AboutPage";

export default function App() {
    return (
        <Routes>

            {/* Main Layout */}
            <Route path="/" element={<MainLayout />}>

                <Route index element={<HomePage />} />

                <Route path="/catelogy" element={<CatelogyPage />} />

                <Route path="/delevary" element={<DelevaryPage />} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/contak" element={<ContankPage />} />

                <Route path="/faq" element={<FAQPage />} />

            </Route>

        </Routes>
    );
}