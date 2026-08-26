import { useAppDispatch, useAppSelector } from "@/Store/hooks";
import {
  toggleColor,
  toggleFormat,
  toggleFlower,
  setPriceRange,
  resetFilters,
} from "@/Store/slices/catalogSlice";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";

const COLORS = [
  { value: "белый", label: "белый" },
  { value: "желтый", label: "желтый" },
  { value: "зеленый", label: "зеленый" },
  { value: "красный", label: "красный" },
  { value: "оранжевый", label: "оранжевый" },
  { value: "розовый", label: "розовый" },
  { value: "синий", label: "синий" },
];

const FORMATS = [
  { value: "букет", label: "букет" },
  { value: "в вазе", label: "в вазе" },
  { value: "в конверте", label: "в конверте" },
  { value: "в корзине", label: "в корзине" },
  { value: "в шляпной коробке", label: "в шляпной коробке" },
  { value: "в ящике", label: "в ящике" },
  { value: "сборные букеты", label: "сборные букеты" },
];

const FLOWERS = [
  { value: "Альстромерия", label: "Альстромерия (2)" },
  { value: "Антуриум", label: "Антуриум (1)" },
  { value: "Аспарагус", label: "Аспарагус (1)" },
  { value: "Астильба", label: "Астильба (7)" },
  { value: "Астранция", label: "Астранция (1)" },
];

export default function PageCatologFilter() {
  const dispatch = useAppDispatch();
  const { selectedColors, selectedFormats, priceRange, selectedFlowers } = useAppSelector(
    (state) => state.catalog
  );

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
            {COLORS.map((color) => {
              const isChecked = selectedColors.includes(color.value);
              return (
                <li key={color.value} className="flex items-center gap-3">
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => dispatch(toggleColor(color.value))}
                    className="rounded-[4px] cursor-pointer border-[0.5px] border-white"
                  />
                  {color.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* По формату */}
        <div className="mt-5">
          <h3 className="font-bold text-[14px] leading-none uppercase text-[#43FFD2]">
            По формату
          </h3>

          <ul className="mt-5 flex flex-col gap-2 font-light text-[12px] leading-none text-white uppercase">
            {FORMATS.map((format) => {
              const isChecked = selectedFormats.includes(format.value);
              return (
                <li key={format.value} className="flex items-center gap-3">
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => dispatch(toggleFormat(format.value))}
                    className="rounded-[4px] cursor-pointer border-[0.5px] border-white"
                  />
                  {format.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Стоимость */}
        <div className="mt-8">
          <h3 className="font-bold text-[14px] leading-none uppercase text-[#43FFD2]">
            Стоимость
          </h3>

          <Slider
            value={priceRange}
            onValueChange={(val) => {
              if (Array.isArray(val)) {
                dispatch(setPriceRange([val[0], val[1]]));
              }
            }}
            min={50}
            max={400}
            step={2}
            className="mt-5"
          />

          <p className="mt-3 text-[12px] font-light uppercase text-white">
            ЦЕНА: {(priceRange[0] * 1000).toLocaleString()} ₽ - {(priceRange[1] * 1000).toLocaleString()} ₽
          </p>
        </div>

        {/* По цветку */}
        <div className="mt-8">
          <h3 className="font-bold text-[14px] leading-none uppercase text-[#43FFD2]">
            По цветку
          </h3>

          <ul className="mt-5 flex flex-col gap-2 font-light text-[12px] leading-none text-white uppercase">
            {FLOWERS.map((flower) => {
              const isChecked = selectedFlowers.includes(flower.value);
              return (
                <li key={flower.value} className="flex items-center gap-3">
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => dispatch(toggleFlower(flower.value))}
                    className="rounded-[4px] cursor-pointer border-[0.5px] border-white"
                  />
                  {flower.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Reset */}
        <button
          type="button"
          onClick={() => dispatch(resetFilters())}
          className="
            mt-6
            relative group w-full overflow-hidden rounded-lg border border-white/60 bg-white/[0.02] py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-all backdrop-blur-[10px] duration-500 cursor-pointer hover:border-[#43FFD2] hover:bg-[#43FFD2]/10 hover:text-[#43FFD2] hover:shadow-[0_0_20px_rgba(67,255,210,0.15)] active:scale-[0.98]
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

          <span className="relative z-10">Сбросить фильтр</span>
        </button>
      </aside>
    </div>
  );
}