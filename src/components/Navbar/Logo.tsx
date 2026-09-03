import Logo from "@/assets/SVG/Group 33721 (1).svg";
import { Link } from "react-router-dom";

export default function Logos() {
    return (
        <div className="flex items-center">
            <Link 
                to="/" 
                className="inline-block transition-transform duration-300 hover:scale-105"
                aria-label="Lover Flower Bosh sahifa"
            >
                <img 
                    src={Logo} 
                    alt="Lover Flower" 
                    className="h-9 md:h-10 w-auto cursor-pointer object-contain" 
                />
            </Link>
        </div>
    );
}

