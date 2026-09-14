import type { PopularProductType } from "@/Types/types"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface DetialProductGalleryProps {
    product: PopularProductType
}

export default function DetialProductGallery({ product }: DetialProductGalleryProps) {
    const images = product?.imgs && product.imgs.length > 0 ? product.imgs : []
    const [selectedImage, setSelectedImage] = useState<number>(0)
    const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])

    // Mahsulot o'zgarganda birinchi rasmga qaytarish
    useEffect(() => {
        setSelectedImage(0)
    }, [product?.id])

    // Tanlangan rasm o'zgarganda thumbnail-ni ko'rinadigan joyga scroll qilish
    useEffect(() => {
        if (thumbnailRefs.current[selectedImage]) {
            thumbnailRefs.current[selectedImage]?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            })
        }
    }, [selectedImage])

    // Yuqoriga (oldingi rasm)
    const handlePrev = () => {
        if (images.length <= 1) return
        setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))
    }

    // Pastga (keyingi rasm)
    const handleNext = () => {
        if (images.length <= 1) return
        setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    }

    if (images.length === 0) {
        return (
            <div className="w-full h-[500px] rounded-[22px] bg-[#0F0F0F] border border-white/10 flex items-center justify-center text-white/40">
                Rasm mavjud emas
            </div>
        )
    }

    return (
        <div className="flex flex-row gap-2.5 sm:gap-4 lg:gap-5 w-full items-start select-none">
            {/* Chap tomondagi Thumbnail-lar va Arrow knopkalar */}
            <div className="flex flex-col items-center w-20 sm:w-28 md:w-32 lg:w-36 flex-shrink-0 h-[380px] sm:h-[480px] lg:h-[580px]">
                {/* Yuqoriga o'tish tugmasi */}
                <button
                    type="button"
                    onClick={handlePrev}
                    disabled={images.length <= 1}
                    aria-label="Oldingi rasm"
                    className="w-full py-2 flex items-center justify-center text-white/60 hover:text-[#43FFD2] transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                    <ChevronUp className="w-6 h-6 stroke-[1.5]" />
                </button>

                {/* Vertikal Thumbnail ro'yxati */}
                <div
                    className="flex-1 w-full flex flex-col gap-3 sm:gap-4 overflow-y-auto py-1"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {images.map((imgSrc, index) => {
                        const isSelected = selectedImage === index
                        return (
                            <button
                                key={index}
                                ref={(el) => {
                                    thumbnailRefs.current[index] = el
                                }}
                                type="button"
                                onClick={() => setSelectedImage(index)}
                                className={`relative w-full h-[140px] sm:h-[190px] lg:h-[230px] flex-shrink-0 rounded-[12px] sm:rounded-[18px] overflow-hidden cursor-pointer transition-all duration-300 border ${
                                    isSelected
                                        ? "border-[#43FFD2] shadow-[0_0_20px_rgba(67,255,210,0.3)] opacity-100 scale-[0.98]"
                                        : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                                }`}
                            >
                                <img
                                    src={imgSrc}
                                    alt={`${product.title} - rasm ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </button>
                        )
                    })}
                </div>

                {/* Pastga o'tish tugmasi */}
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={images.length <= 1}
                    aria-label="Keyingi rasm"
                    className="w-full py-2 flex items-center justify-center text-white/60 hover:text-[#43FFD2] transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                    <ChevronDown className="w-6 h-6 stroke-[1.5]" />
                </button>
            </div>

            {/* O'ng tomondagi Katta Asosiy Rasm */}
            <div className="flex-1 relative h-[380px] sm:h-[480px] lg:h-[580px] rounded-[16px] sm:rounded-[22px] overflow-hidden bg-[#0A0A0A] border border-white/10 group shadow-2xl">
                <img
                    key={selectedImage}
                    src={images[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>
        </div>
    )
}
