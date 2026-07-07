import { NavbarLink } from "@/Constants/Data"
import { NavLink } from "react-router-dom"


interface NavLinksProps {
    layout?: "desktop" | "mobile";
    onLinkClick?: () => void;
}

export default function NavLinks({ layout = "desktop", onLinkClick }: NavLinksProps) {

    const navClass = `
relative
inline-block
font-medium
leading-none

transition-all
duration-300

hover:text-[#43FFD2]
hover:-translate-y-[2px]

after:absolute
after:left-0
after:bottom-[-6px]
after:h-[2px]
after:bg-[#43FFD2]
after:transition-all
after:duration-300
`;

    if (layout === "mobile") {
        return (
            <div className="flex flex-col w-full">
                <ul className="flex flex-col gap-6 items-start">
                    {NavbarLink.map(({ id, name, slug }) => (
                        <li key={id}>
                            <NavLink 
                                onClick={onLinkClick}
                                className={({ isActive }) =>
                                    `${navClass} text-[18px] ${isActive
                                        ? "text-[#43FFD2] after:w-full"
                                        : "text-white after:w-0 hover:after:w-full"
                                    }`
                                } 
                                to={slug}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-between w-full">

            <ul className="flex items-center gap-[30px]">
                {NavbarLink.map(({ id, name, slug }) => (
                    <li key={id}>
                        <NavLink className={({ isActive }) =>
                            `${navClass} text-[14px] ${isActive
                                ? "text-[#43FFD2] after:w-full"
                                : "text-white after:w-0 hover:after:w-full"
                            }`
                        } to={slug}>{name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
