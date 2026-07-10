import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { FaSquarePhone, FaTelegram } from "react-icons/fa6";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

export default function HeroSocials() {
  // const socialRef = useRef<HTMLDivElement>(null);

  const socials = [
    {
      id: 1,
      to: "/instagram",
      icon: <SiInstagram />,
    },
    {
      id: 2,
      to: "/telegram",
      icon: <FaTelegram />,
    },
    {
      id: 3,
      to: "/phone",
      icon: <FaSquarePhone />,
    },
  ];

  // useEffect(() => {
  //   if (!socialRef.current) return;


  // const icons = gsap.utils.toArray<HTMLElement>(".social-icon");
  //   gsap.from(icons, {
  //     y: 2,
  //     opacity: 0,
  //     scale: 0.8,
  //     stagger: 0.15,
  //     duration: 0.8,
  //     ease: "power3.out",
  //     clearProps: "transform",
  //   });
  // }, []);

  return (
    <div
      className="
        absolute
        right-16
        top-[38%]
        z-30
        hidden
        lg:flex
        flex-col
        gap-5
        rounded-[10px]
        bg-[#00000033]/20
        py-[20px]
        px-[18px]
        backdrop-blur-[20px]
      "
    >
      {socials.map((item) => (
        <Link
          key={item.id}
          to={item.to}
          className="
            social-icon
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
  );
}