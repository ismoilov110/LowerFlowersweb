import CatologImg from "@/assets/Img/image 128.png";
import CatologImg2 from "@/assets/Img/image 129.png";

const HeroFlowers = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {/* LEFT FLOWER
            Figma: higher position
        */}
        <img
          src={CatologImg}
          alt="Left Flower"
          className="
            absolute

            w-[320px]
            sm:w-[480px]
            md:w-[650px]
            lg:w-[800px]
            xl:w-[900px]

            left-[-50px]
            sm:left-[-80px]
            md:left-[-120px]
            lg:left-[-150px]
            xl:left-[-180px]

            top-[-80px]
            sm:top-[-120px]
            md:top-[-150px]
            lg:top-[-180px]
            xl:top-[-220px]

            rotate-[12deg]

            transition-all
            duration-700
            ease-out
          "
        />

        {/* RIGHT FLOWER
            Figma: lower position
        */}
        <img
          src={CatologImg2}
          alt="Right Flower"
          className="
            absolute
            z-30

            w-[280px]
            sm:w-[420px]
            md:w-[580px]
            lg:w-[720px]
            xl:w-[820px]

            right-[-100px]
            sm:right-[-150px]
            md:right-[-200px]
            lg:right-[-240px]
            xl:right-[-280px]

            bottom-[-100px]
            sm:bottom-[-280px]
            md:bottom-[-320px]
            lg:bottom-[-360px]
            xl:bottom-[-420px]

            rotate-[-8deg]

            transition-all
            duration-700
            ease-out
          "
        />
      </div>
    </div>
  );
};

export default HeroFlowers;
