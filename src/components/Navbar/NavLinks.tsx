import { NavbarLink } from "@/Constants/Data"
import { NavLink } from "react-router-dom"


export default function NavLinks() {

    const navClass = `
relative
inline-block
font-medium
text-[14px]
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


    return (
        <div className="flex items-center justify-between w-full">

            <ul className="flex items-center gap-[30px]">
                {NavbarLink.map(({ id, name, slug }) => (
                    <li key={id}>
                        <NavLink className={({ isActive }) =>
                            `${navClass} ${isActive
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
