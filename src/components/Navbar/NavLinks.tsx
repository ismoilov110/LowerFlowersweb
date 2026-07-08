import { NavbarLink } from "@/Constants/Data";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
    layout?: "desktop" | "mobile";
    onLinkClick?: () => void;
}

export default function NavLinks({
    layout = "desktop",
    onLinkClick,
}: NavLinksProps) {

    const desktopClass = `
        relative
        inline-block

        text-[14px]
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
            <ul className="flex flex-col gap-2">

                {NavbarLink.map(({ id, name, slug }) => (

                    <li
                        key={id}
                        className="
                            group

                            border-b
                            border-white/5

                            last:border-none
                        "
                    >

                        <NavLink
                            to={slug}
                            onClick={onLinkClick}
                            className={({ isActive }) =>
                                `
                                flex
                                items-center
                                justify-between

                                py-5

                                text-[18px]
                                font-medium
                                tracking-wide

                                transition-all
                                duration-300

                                ${
                                    isActive
                                        ? "text-[#43FFD2]"
                                        : "text-white hover:text-[#43FFD2]"
                                }
                            `
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`
                                            transition-all
                                            duration-300

                                            ${
                                                isActive
                                                    ? "translate-x-2"
                                                    : "group-hover:translate-x-2"
                                            }
                                        `}
                                    >
                                        {name}
                                    </span>

                                    <div
                                        className={`
                                            h-[8px]
                                            w-[8px]

                                            rounded-full

                                            transition-all
                                            duration-300

                                            ${
                                                isActive
                                                    ? "bg-[#43FFD2] shadow-[0_0_15px_#43FFD2]"
                                                    : "bg-white/20 group-hover:bg-[#43FFD2]"
                                            }
                                        `}
                                    />
                                </>
                            )}
                        </NavLink>

                    </li>

                ))}

            </ul>
        );
    }

    return (
        <div className="flex items-center justify-between w-full">

            <ul className="flex items-center gap-[30px]">

                {NavbarLink.map(({ id, name, slug }) => (

                    <li key={id}>

                        <NavLink
                            to={slug}
                            className={({ isActive }) =>
                                `
                                ${desktopClass}

                                ${
                                    isActive
                                        ? "text-[#43FFD2] after:w-full"
                                        : "text-white after:w-0 hover:after:w-full"
                                }
                            `
                            }
                        >
                            {name}
                        </NavLink>

                    </li>

                ))}

            </ul>

        </div>
    );
}