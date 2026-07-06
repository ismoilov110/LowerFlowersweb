import Logo from "@/assets/SVG/Group 33721 (1).svg"
import { Link } from "react-router-dom"

export default function Logos() {
    return (
        <div>
            <Link to="/">
                <img src={Logo} alt="LowerFlowers" className="cursor-pointer" />
            </Link>
        </div>
    )
}
