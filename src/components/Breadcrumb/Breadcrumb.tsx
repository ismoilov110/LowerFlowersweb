import { Link } from "react-router-dom";
import type { BreadcrumbsType } from "@/Types/types";
import { Styles } from "@/Styles/Styles";

interface BreadcrumbProps {
  items: BreadcrumbsType[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav
      className={`${Styles.container} relative z-30 flex flex-col m-auto`}
      aria-label="breadcrumb"
    >
      <ol className="flex items-center gap-2 pl-6 md:pl-10 lg:pl-16">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={item.label}
              className="flex items-center gap-2 font-black text-[12px]"
            >
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}

              {!isLast && (
                <span className="text-white/40">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;