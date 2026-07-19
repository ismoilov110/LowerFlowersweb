import type { CatalogCardType } from "@/Types/types";

interface CatalogCardProps {
  card: CatalogCardType;
  className?: string;
}

export default function CatologCard({
  card,
  className = "",
}: CatalogCardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden

        w-full
        max-w-[590px]
        min-h-[230px]

        cursor-pointer
        rounded-[20px]

        border border-white/10
        bg-[#00000033]/20
        backdrop-blur-[20px]

        p-8

        transition-[transform,border-color,box-shadow]
        duration-300
        ease-out

        hover:-translate-y-2
        hover:scale-[1.01]
        hover:border-[#43FFD2]/30
        hover:shadow-[0_20px_50px_rgba(67,255,210,0.12)]

        before:absolute
        before:left-1/2
        before:top-1/2

        before:h-[260px]
        before:w-[260px]

        before:-translate-x-1/2
        before:-translate-y-1/2

        before:rounded-full
        before:bg-[#43FFD2]/10
        before:blur-[120px]

        before:opacity-0
        before:transition-opacity
        before:duration-500

        hover:before:opacity-100

        ${className}
      `}
    >
      {/* Card Title */}
      <h2
        className="
          relative
          z-10

          text-[30px]
          font-semibold
          leading-none
          uppercase
          text-[#43FFD2]
        "
      >
        {card.title}
      </h2>

      {/* List */}
      <ul
        className="
          relative
          z-10

          mt-6
          space-y-3
        "
      >
        {card.items.map((text) => (
          <li
            key={text}
            className="
              flex
              items-center
              gap-3

              text-[20px]
              font-light
              uppercase
              text-white

              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white"></span>

            {text}
          </li>
        ))}
      </ul>

      {/* Link */}
      <p
        className="
          relative
          z-10

          mt-8
          inline-block

          text-[12px]
          font-bold
          uppercase
          tracking-[1px]

          text-[#D978AC]
          underline

          transition-all
          duration-300

          group-hover:text-[#43FFD2]
          group-hover:translate-x-1
        "
      >
        Смотреть каталог →
      </p>
    </div>
  );
}