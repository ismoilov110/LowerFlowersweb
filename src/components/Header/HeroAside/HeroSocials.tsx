import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { FaSquarePhone, FaTelegram,  } from "react-icons/fa6";

export default function HeroContent() {
  return (
    <div className="absolute right-16 top-[38%] z-30 hidden lg:flex flex-col gap-5 rounded-[10px] bg-[#00000033]/20 py-[20px] px-[18px] backdrop-blur-[20px]">
      <Link to="/instagram" className="flex flex-col text-[#43FFD2] transition-all duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_#43FFD2]">
        <SiInstagram />
      </Link>
      <Link to="/instagram" className="flex flex-col text-[#43FFD2] transition-all duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_#43FFD2]">
       <FaTelegram />
      </Link>
      <Link to="/instagram" className="flex flex-col text-[#43FFD2] transition-all duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_#43FFD2]">
        <FaSquarePhone />
      </Link>

    </div>
  )
}
