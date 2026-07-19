import { Styles } from "@/Styles/Styles";
import CatologTitle from "./CatologTitle";
import CatologCard from "./CatologCard";
import { CatalogCards } from "@/Constants/Data";
import BackgroundEffects from "@/components/BackroundEffcetive/BackroundEffective";

export default function Catolog() {
    return (
        <section className="relative pt-130 pb-32 overflow-hidden bg-[#040A0A]">
            {/* Background Glows positioned behind the Catalog content */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <BackgroundEffects />
            </div>

            <div className={`${Styles.container} relative z-10`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                    {/* Left Column: Contains Title, Description, and the Flowers Card (Index 1) */}
                    <div className="flex flex-col gap-10 lg:gap-[80px]">
                        <CatologTitle />
                        
                        {/* Card 1: Flowers (Цветы) - left-aligned under description */}
                        {CatalogCards[1] && (
                            <CatologCard card={CatalogCards[1]} className="self-start" />
                        )}
                    </div>

                    {/* Right Column: Contains Dried Flowers Card (Index 0) and Additional Card (Index 2) */}
                    <div className="flex flex-col gap-10 lg:gap-12 lg:mt-[150px]">
                        {/* Card 2: Dried Flowers (готовые букеты из сухоцветов) - pushed right */}
                        {CatalogCards[0] && (
                            <CatologCard card={CatalogCards[0]} className="lg:ml-auto" />
                        )}

                        {/* Card 3: Additional (дополнительно) - pushed right */}
                        {CatalogCards[2] && (
                            <CatologCard card={CatalogCards[2]} className="lg:ml-auto" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
