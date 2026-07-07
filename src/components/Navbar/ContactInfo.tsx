import type { ContactInfoProps } from "@/Types/types";
import { Link } from "react-router-dom";

export default function ContactInfo({ layout = "desktop", contactRef }: ContactInfoProps) {
    if (layout === "mobile") {
        return (
            <div ref={contactRef} className="flex flex-col gap-6 text-left select-none">
                {/* Column 1: Email and Delivery Info (Mobile Version) */}
                <div className="flex flex-col gap-1">
                    <a 
                        href="mailto:ZAKAZ@LOVERFLOWER.BY" 
                        className="text-[#43FFD2] font-semibold text-[14px] tracking-[0.08em] uppercase leading-none hover:underline"
                    >
                        ZAKAZ@LOVERFLOWER.BY
                    </a>
                    <span className="text-[#889996] text-[11px] font-medium tracking-[0.05em] uppercase leading-none mt-1">
                        ДОСТАВКА 24/7 ПО ДОГОВОРЕННОСТИ С ОПЕРАТОРОМ
                    </span>
                </div>

                {/* Column 2: Address and Work Hours (Mobile Version) */}
                <div className="flex flex-col gap-1">
                    <span className="text-[#43FFD2] font-semibold text-[14px] tracking-[0.08em] uppercase leading-none">
                        УЛ. ТИМИРЯЗЕВА 67
                    </span>
                    <span className="text-[#889996] text-[11px] font-medium tracking-[0.05em] uppercase leading-none mt-1">
                        10:00 ДО 21:00
                    </span>
                    <span className="text-[#889996] text-[11px] font-medium tracking-[0.05em] uppercase leading-none mt-1">
                        БЕЗ ВЫХОДНЫХ
                    </span>
                </div>
            </div>
        );
    }

    // Default Desktop layout (keeps the exact same styling as in Figma design)
    return (
        <div ref={contactRef} className="hidden xl:flex items-start gap-12 text-left select-none">
            {/* Column 1: Email and Delivery Info */}
            <div className="flex flex-col gap-1">
                <Link 
                    to="mailto:ZAKAZ@LOVERFLOWER.BY" 
                    className="text-[#43FFD2] font-semibold text-[12px] tracking-[0.08em] uppercase leading-none hover:underline whitespace-nowrap"
                >
                    ZAKAZ@LOVERFLOWER.BY
                </Link>
                <span className="text-[#889996] text-[10px] font-medium tracking-[0.05em] uppercase leading-none mt-1 whitespace-nowrap">
                    ДОСТАВКА 24/7 ПО ДОГОВОРЕННОСТИ С ОПЕРАТОРОМ
                </span>
            </div>

            {/* Column 2: Address and Work Hours */}
            <div className="flex flex-col gap-1">
                <span className="text-[#43FFD2] font-semibold text-[12px] tracking-[0.08em] uppercase leading-none whitespace-nowrap">
                    УЛ. ТИМИРЯЗЕВА 67
                </span>
                <span className="text-[#889996] text-[10px] font-medium tracking-[0.05em] uppercase leading-none mt-1 whitespace-nowrap">
                    10:00 ДО 21:00
                </span>
                <span className="text-[#889996] text-[10px] font-medium tracking-[0.05em] uppercase leading-none mt-1 whitespace-nowrap">
                    БЕЗ ВЫХОДНЫХ
                </span>
            </div>
        </div>
    );
}
