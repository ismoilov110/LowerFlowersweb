import { Styles } from "@/Styles/Styles"
import NavbarLinks from "@/components/Navbar/NavLinks"
import Logos from "./Logo"

const Navbar = () => {
    return (
        <nav className={Styles.container}>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                <Logos />
                <NavbarLinks />
            </div>
        </nav>
    )
}


export default Navbar