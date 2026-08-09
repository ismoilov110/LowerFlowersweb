import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { FaWhatsapp, FaViber } from "react-icons/fa6";
import { Phone } from "lucide-react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

export default function CatalogAside() {
  const socials = [
    {
      id: 1,
      to: "/instagram",
      icon: <SiInstagram />,
      label: "Instagram",
    },
    {
      id: 2,
      to: "/whatsapp",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
    },
    {
      id: 3,
      to: "/viber",
      icon: <FaViber />,
      label: "Viber",
    },
  ];

  return (
    <div className="absolute right-4 xl:right-8 top-[220px] z-30 hidden lg:flex flex-col items-center gap-6">
      {/* 1. Social icons vertically stacked */}
      <div
        className="
          flex
          flex-col
          gap-5
          rounded-[10px]
          bg-[#00000033]/20
          py-[20px]
          px-[18px]
          backdrop-blur-[20px]
          border
          border-white/5
        "
      >
        {socials.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            aria-label={item.label}
            className="
              flex
              items-center
              justify-center
              text-[#43FFD2]
              text-[20px]
              transition-all
              duration-300
              hover:scale-110
              hover:text-white
              hover:drop-shadow-[0_0_10px_#43FFD2]
            "
          >
            {item.icon}
          </Link>
        ))}
      </div>

      {/* 2. Phone number below social icons */}
      <div className="flex flex-col items-center gap-3">
        <Link
          to="tel:+375291136969"
          className="
            text-[#43FFD2]
            text-[16px]
            font-light
            tracking-wide
            transition-all
            duration-300
            hover:text-white
          "
        >
          +998 77 055 55 55
        </Link>

        {/* 3. "ЗАКАЗАТЬ ЗВОНОК" button below phone number */}
        <Button
          className="
            flex
            items-center
            gap-2
            cursor-pointer
            text-[#43FFD2]
            rounded-[10px]
            backdrop-blur-[20px]
            bg-[#00000033]/20
            py-[10px]
            px-[18px]
            transition-all
            duration-300
            hover:scale-110
            hover:text-white
            hover:drop-shadow-[0_0_10px_#43FFD2]
            uppercase
            text-[14px]
            leading-none
            tracking-[0.12em]
            font-bold
            border
            border-white/5
          "
        >
          <Phone size={15} />
          ЗАКАЗАТЬ ЗВОНОК
        </Button>
      </div>

      {/* 4. Shopping bag/cart below call button */}
      <div className="flex items-center justify-center">
        <Button
          className="
            relative
            cursor-pointer
            flex
            items-center
            justify-center
            w-14
            h-14
            rounded-[10px]
            backdrop-blur-[20px]
            bg-[#00000033]/20
            border
            border-white/5
            transition-all
            duration-300
            hover:scale-110
            hover:text-white
            hover:drop-shadow-[0_0_10px_#43FFD2]
          "
        >
          <HiOutlineShoppingBag size={24} className="text-white" />
          {/* Badge "5" overlapping the top-right area */}
          <span
            className="
              absolute
              -top-1.5
              -right-1.5
              w-5
              h-5
              rounded-full
              bg-[#43FFD2]
              text-[#040A0A]
              text-[11px]
              font-bold
              flex
              items-center
              justify-center
              shadow-[0_0_8px_#43FFD2]
            "
          >
            5
          </span>
        </Button>
      </div>
    </div>
  );
}
