import CatologImg from "@/assets/Img/image 128.png";
import CatologImg2 from "@/assets/Img/image 129.png";

const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* =========================
          BACKGROUND GLOWS
      ========================== */}
      <div className="absolute inset-0 z-0">
        {/* Top Right Magenta Glow */}
        <div
          className="
            absolute
            -right-[10vw]
            -top-[10vh]
            h-[75vw]
            w-[75vw]
            max-h-[900px]
            max-w-[900px]
            rounded-full
            blur-[160px]
            md:blur-[200px]
            lg:blur-[240px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(161, 42, 99, 0.35) 0%, rgba(161, 42, 99, 0) 70%)",
          }}
        />

        {/* Bottom Left Pink / Purple Glow */}
        <div
          className="
            absolute
            -bottom-[15vh]
            -left-[15vw]
            h-[85vw]
            w-[85vw]
            max-h-[1000px]
            max-w-[1000px]
            rounded-full
            blur-[180px]
            md:blur-[220px]
            lg:blur-[260px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(122, 24, 74, 0.35) 0%, rgba(122, 24, 74, 0) 70%)",
          }}
        />
      </div>

      {/* =========================
          FLOWERS
      ========================== */}
      <div className="relative z-0 mx-auto h-full w-full max-w-[1440px]">
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

            left-[-120px]
            sm:left-[-180px]
            md:left-[-240px]
            lg:left-[-280px]
            xl:left-[-320px]

            top-[-120px]
            sm:top-[-220px]
            md:top-[-260px]
            lg:top-[-300px]
            xl:top-[-340px]

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

export default HeroBackground;