import { NavLink } from "react-router-dom";
import { DetialProductNavLinks } from "@/Constants/Data";

interface UniversalNavLinksProps {
    layout?: "desktop" | "mobile";
    onLinkClick?: () => void;
}

export default function UniversalNavLinks({
    layout = "desktop",
    onLinkClick,
}: UniversalNavLinksProps) {
    // Filter out "Главная" since Logo on the left serves as the Home link
    const links = DetialProductNavLinks.filter((link) => link.slug !== "/");

    if (layout === "mobile") {
        return (
            <ul className="flex flex-col gap-2">
                {links.map(({ id, name, slug }) => (
                    <li
                        key={id}
                        className="group border-b border-white/5 last:border-none"
                    >
                        <NavLink
                            to={slug}
                            onClick={onLinkClick}
                            className={({ isActive }) =>
                                `flex items-center justify-between py-4 text-[16px] uppercase font-medium tracking-[0.08em] transition-all duration-300 ${
                                    isActive
                                        ? "text-[#43FFD2]"
                                        : "text-white/80 hover:text-[#43FFD2]"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`transition-all duration-300 ${
                                            isActive
                                                ? "translate-x-2 text-[#43FFD2]"
                                                : "group-hover:translate-x-2"
                                        }`}
                                    >
                                        {name}
                                    </span>

                                    <div
                                        className={`h-[6px] w-[6px] rounded-full transition-all duration-300 ${
                                            isActive
                                                ? "bg-[#43FFD2] shadow-[0_0_12px_#43FFD2]"
                                                : "bg-white/10 group-hover:bg-[#43FFD2]"
                                        }`}
                                    />
                                </>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        );
    }

    // Desktop layout
    return (
        <ul className="flex items-center gap-6 xl:gap-8">
            {links.map(({ id, name, slug }) => (
                <li key={id}>
                    <NavLink
                        to={slug}
                        className={({ isActive }) =>
                            `relative inline-block uppercase text-[12px] xl:text-[13px] font-medium tracking-[0.08em] leading-none transition-colors duration-300 py-1 ${
                                isActive
                                    ? "text-[#43FFD2] after:w-full"
                                    : "text-white/90 hover:text-[#43FFD2] after:w-0 hover:after:w-full"
                            } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#43FFD2] after:transition-all after:duration-300`
                        }
                    >
                        {name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
