import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";

export default function PageCatologFilter() {
  const [Price, setPrice] = useState<[number, number]>([50, 400]);

  return (
    <div className="relative w-full max-w-[340px]">
      {/* Pink glow */}
      <div
        className="
          absolute
          -top-20
          -left-32
          w-[320px]
          h-[300px]
          rounded-full
          bg-[#7D2253]/50
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Green glow */}
      <div
        className="
          absolute
          -bottom-20
          -left-32
          w-[320px]
          h-[300px]
          rounded-full
          bg-[#43FFD2]/40
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Filter */}
      <aside
        className="
          relative
          z-10
          w-full
          rounded-[20px]
          border-none
          bg-black/30
          backdrop-blur-[20px]
          px-4
          py-5
          mb-20
        "
      >
        {/* По свету */}
        <div className="mb-5">
          <h3 className="font-bold text-[14px] leading-none uppercase text-[#43FFD2]">
            По свету
          </h3>

          <ul className="mt-5 flex flex-col gap-2 font-light text-[12px] leading-none text-white uppercase">
            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              нежные
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              яркие
            </li>
          </ul>
        </div>

        {/* По цвету */}
        <div className="mt-5">
          <h3 className="font-bold text-[14px] leading-none uppercase text-[#43FFD2]">
            По цвету
          </h3>

          <ul className="mt-5 flex flex-col gap-2 font-light text-[12px] leading-none text-white uppercase">
            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              белый
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              желтый
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              зеленый
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              красный
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              оранжевый
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              розовый
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              синий
            </li>
          </ul>
        </div>

        {/* По формату */}
        <div className="mt-5">
          <h3 className="font-bold text-[14px] leading-none uppercase text-[#43FFD2]">
            По формату
          </h3>

          <ul className="mt-5 flex flex-col gap-2 font-light text-[12px] leading-none text-white uppercase">
            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              букет
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              в вазе
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              в конверте
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              в корзине
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              в шляпной коробке
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              в ящике
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              сборные букеты
            </li>
          </ul>
        </div>

        {/* Стоимость */}
        <div className="mt-8">
          <h3 className="font-bold text-[14px] leading-none uppercase text-[#43FFD2]">
            Стоимость
          </h3>

          <Slider
            value={Price}
            onValueChange={(value) => {
              // value can be a single number or an array of numbers depending on the slider
              if (Array.isArray(value)) {
                setPrice([value[0], value[1]]);
              } else {
                setPrice([value as number, value as number]);
              }
            }}
            min={50}
            max={400}
            step={2}
            className="mt-5"
          />

          <p className="mt-3 text-[12px] font-light uppercase text-white">
            ЦЕНА: {Price[0].toFixed(2)} ₽ - {Price[1].toFixed(2)} ₽
          </p>
        </div>

        {/* По цветку */}
        <div className="mt-8">
          <h3 className="font-bold text-[14px] leading-none uppercase text-[#43FFD2]">
            По цветку
          </h3>

          <ul className="mt-5 flex flex-col gap-2 font-light text-[12px] leading-none text-white uppercase">
            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              Альстромерия (2)
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              Антуриум (1)
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              Аспарагус (1)
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              Астильба (7)
            </li>

            <li className="flex items-center gap-3">
              <Checkbox className="rounded-[4px] cursor-pointer border-[0.5px] border-white" />
              Астранция (1)
            </li>
          </ul>
        </div>

        {/* Reset */}
        <button
          type="button"
          className="
            mt-6
          relative group w-full overflow-hidden rounded-lg border border-white/60 bg-white/[0.02] py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-all backdrop-blur-[10px] duration-500 cursor-pointer hover:border-[#43FFD2] hover:bg-[#43FFD2]/10 hover:text-[#43FFD2]hover:shadow-[0_0_20px_rgba(67,255,210,0.15)] active:scale-[0.98]
          "
        >
          {/* Hover light */}
          <span
            className="
      absolute
      inset-y-0
      left-[-100%]
      w-[60%]
      skew-x-[-20deg]
      bg-white/10
      transition-all
      duration-700
      group-hover:left-[130%]
    "
          />

          <span className="relative z-10">
            Сбросить фильтр
          </span>
        </button>
      </aside>
    </div>
  );
}