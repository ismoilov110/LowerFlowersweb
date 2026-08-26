const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* =========================
          BACKGROUND GLOWS
      ========================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
    </div>
  );
};

export default HeroBackground;