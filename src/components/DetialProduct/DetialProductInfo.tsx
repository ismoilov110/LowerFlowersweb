import type { PopularProductType } from "@/Types/types"
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface DetialProductInfoProps {
    product: PopularProductType
}


export default function DetialProductInfo({ product }: DetialProductInfoProps) {
    const [Quantity, setQuantity] = useState(0)
    const navigate = useNavigate()

    const handleDecrease = () => {
        if (Quantity > 0) {
            setQuantity(Quantity - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(Quantity + 1)
    }
    return (
        <div>
            <button
                onClick={() => navigate(-1)}
                className="flex items-center cursor-pointer gap-2 text-white/60 hover:text-[#43FFD2] transition-colors duration-300"
            >
                <span><ArrowLeft /></span>назад
            </button>

            {/* Title */}

            <h1 className="text-4xl font-serif uppercase text-white mt-[20px]">
                {product?.title}
            </h1>

            {/* Price */}

            <div className="mt-4">
                <span className="font-bold text-[30px] leading-none uppercase text-[#43FFD2]">{product?.PricePopular}</span>
            </div>


            {/* Состав — hozircha statik, backend kelganda product.composition bilan almashtiriladi */}
            <p className="mt-6 text-white/80">
                <strong className="text-white">Состав:</strong> Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза
            </p>

            {/* Tavsif */}
            <p className="mt-4 text-white/70">
                Завораживающая глубина ваших чувств передана огненными красками этого букета
            </p>

            {/* Категории */}
            <p className="mt-4 text-white/80">
                <strong className="text-white">Категории:</strong> 8 марта, Букет на 14 февраля, Букет на праздник, Букеты цветов на День рождения
            </p>

            {/* Метки */}
            <p className="mt-2 text-white/80">
                <strong className="text-white">Метки:</strong> Для начальника, Мужские букеты
            </p>

            {/* Buttons */}

            {/* Tugmalar qatori */}
            <div className="mt-8 flex items-center gap-4">
                <button className="group relative flex-1 h-14 cursor-pointer overflow-hidden rounded-full border border-white/20 bg-transparent text-white uppercase font-bold tracking-[0.12em] text-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#43FFD2]/60 hover:shadow-[0_0_35px_rgba(67,255,210,0.25)] active:scale-[0.97]">
                    <span className="relative z-10 flex items-center justify-center gap-3 transition-colors duration-500 group-hover:text-black">
                        <ShoppingCart size={18} />
                        В корзину
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-[#43FFD2] transition-transform duration-500 group-hover:translate-x-0" />
                </button>

                <div className="flex items-center gap-4 h-14 rounded-full border border-white/20 bg-black/20 px-2 backdrop-blur-md">
                    <button
                        onClick={handleDecrease}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-90"
                    >
                        <Minus size={16} />
                    </button>
                    <span className="w-6 text-center text-white font-medium">{Quantity}</span>
                    <button
                        onClick={handleIncrease}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-90"
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}
