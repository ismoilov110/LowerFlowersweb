import { Styles } from "@/Styles/Styles";
import HeroTitle from "./HeroTitle";
import HeroImage from "./HeroImage";
import HeroAside from "./HeroAside/HeroAside";

export default function Hero() {
    return (
        <header>
            <div className={Styles.container}>
                <HeroImage />
                <HeroTitle />
                <HeroAside />
            </div>
        </header>
    )
}
