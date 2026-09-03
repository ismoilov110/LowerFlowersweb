import { Route, Routes } from "react-router-dom";

import MainLayout from "@/Layouts/MainLayouts";

import HomePage from "./Pages/Home/HomePage";
import DelevaryPage from "./Pages/Delevary/DelevaryPage";
import CatelogyPage from "./Pages/Catelogy/CatelogyPage";
import FAQPage from "./Pages/FAQ/FAQPage";
import ContankPage from "./Pages/Contak/ContankPage";
import AboutPage from "./Pages/About/AboutPage";
import DetialProductPage from "./Pages/DetialProductPage/DetialProductPage";

export default function App() {
    return (
        <Routes>
            {/* Main Layout */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/catelogy" element={<CatelogyPage />} />
                <Route path="/detialproduct/:id" element={<DetialProductPage />} />
                <Route path="/delivery" element={<DelevaryPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContankPage />} />
                <Route path="/faq" element={<FAQPage />} />
            </Route>
        </Routes>
    );
}