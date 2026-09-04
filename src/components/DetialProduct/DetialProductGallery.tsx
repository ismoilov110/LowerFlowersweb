import type { PopularProductType } from "@/Types/types"

interface DetialProductGalleryProps {
    product: PopularProductType
}

export default function DetialProductGallery({ product }: DetialProductGalleryProps) {
    return (
        <div className="w-full relative h-[500px] rounded-[22px] overflow-hidden bg-[#0F0F0F] border border-white/10">
            <img src={product.imgs[0]} alt={product.title} className="w-full h-full object-cover" />
        </div>
    )
}
