import { CatalogProduct } from "@/Constants/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CatalogProductCard() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{
        clickable: true,
      }}
      loop={true}
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className="w-full pb-12"
    >
      {CatalogProduct.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="group relative h-[310px] overflow-hidden rounded-[20px] border border-white/10 bg-[#0F0F0F] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#D978AC] hover:shadow-[0_0_35px_rgba(217,120,172,0.45)]">
            {/* Image */}
            <img
              src={item.imags}
              alt={item.name}
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-5 left-5 z-10">
              <h3 className="text-[22px] font-semibold leading-none text-white transition-all duration-300 group-hover:text-[#43FFD2]">
                {item.name}
              </h3>

              <p className="mt-2 text-[16px] text-white">
                {item.price}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}