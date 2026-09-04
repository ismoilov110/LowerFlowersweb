import { Button } from "@/components/ui/button";
import { PopularsProduct } from "@/Constants/Data";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PopularProductCard() {
    const navigate = useNavigate()
    const [isLiked, setIsLiked] = useState<number[]>([])

    const handleToggleLike = (id: number) => {
        if (isLiked.includes(id)) {
            setIsLiked(prev => prev.filter(item => item !== id))
        } else {
            setIsLiked(prev => [...prev, id])
        }
    }
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {
                PopularsProduct.map((item) => {
                    return <div key={item.id} onClick={() => navigate(`/detialproduct/${item.id}`)} className="group relative h-[340px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0F0F0F] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#43FFD2]/40 hover:shadow-[0_0_35px_rgba(67,255,210,0.15)]">
                        {/* Imgs */}
                        <img
                            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                            src={item.imgs[0]}
                            alt={item.title}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/35"></div>

                        {/* Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                        {/* Heart icon */}

                        <Button onClick={(e) => {
                            e.stopPropagation();
                            handleToggleLike(item.id);
                        }}
                            className={"absolute top-4 right-4 cursor-pointer z-20 flex h-10 w-10  items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:border-[#D978AC] hover:bg-[#D978AC]/20"}

                        >
                            <Heart size={20} className={`transition-colors duration-300 ${isLiked.includes(item.id) ? 'text-[#D978AC] fill-[#D978AC]' : 'text-white hover:text-[#D978AC]'}`} />
                        </Button>

                        {/* Context */}
                        <div className="absolute bottom-4 left-4 right-4 z-20">
                            <h3 className="text-[20px] font-semibold text-white transition-colors duration-300n group-hover:text-[#43FFD2]">{item.title}</h3>

                            <div className="mt-3 flex items-center justify-between">
                                <p className="text-lg font-medium text-white">{item.PricePopular}</p>
                                <button className="flex cursor-pointer h-11 w-11 items-center justify-center rounded-xl bg-[#43FFD2] text-black transition-all duration-300 hover:scale-110 hover:bg-[#66FFE5]">
                                    <ShoppingCart size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
