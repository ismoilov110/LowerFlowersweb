import { useCart } from "@/Hooks/useCarts"
import { Minus, Plus, X } from "lucide-react"


export default function CartDrawer() {

    // O'ZGARDI: savat bo'sh bo'lsa soxta ro'yxat ko'rsatiladi
    const { items, isOpen, closeCart, removeItem, increaseQuantity, decreaseQuantity } = useCart()

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <section>
            {/* Orqa fon (overlay) - panelni yopish uchun ham ishlatiladi */}
            {isOpen && (
                // O'ZGARDI: "bakdrop" -> "backdrop" (xato yozilgan edi)
                <div onClick={closeCart} className="fixed inset-0 backdrop-blur-[2px] bg-[#000000]/50 z-40 transition-opacity duration-300 cursor-pointer"></div>
            )}

            {/* yon panelning o'zi */}
            {/* O'ZGARDI: "flex flex-col" qo'shildi */}
            <aside className={`fixed top-0 right-0 z-50 flex flex-col h-full w-full max-w-[400px] overflow-hidden border-1 border-white/5 bg-[#040A0A] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* binafsha orqa fon */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,48,128,0.35),transparent_60%)]"></div>

                {/* Sarlavha */}
                {/* O'ZGARDI: "relative" qo'shildi */}
                <div className="relative mb-6 py-[30px] px-[20px] flex items-center justify-between">
                    <h2 className="text-[28px] font-bold uppercase leading-none text-[#43FFD2]">Ваша корзина</h2>
                    <button onClick={closeCart} className="text-[#43FFD2] text-2xl cursor-pointer transition-transform duration-300 hover:rotate-90"><X /></button>
                </div>

                {/* Mahsulotlar ro'yxati */}
                {/* O'ZGARDI: "relative" qo'shildi */}
                <div className="relative flex-1 overflow-y-auto border-t border-white/10">
                    {items.length === 0 ? (
                        <p className="mt-6 ml-4 text-sm text-white/50">Корзина пуста</p>
                    ) : (
                        items.map((item) => (
                            // O'ZGARDI: "px-[20px]" qo'shildi
                            <div key={item.id} className="flex gap-4 border-b border-white/10 px-[20px] py-5">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-[64px] w-[52px] shrink-0 object-cover"
                                />
                                <div className="flex flex-1 flex-col justify-between">
                                    {/* Nomi va narxi */}
                                    <div className="flex items-start justify-between gap-3">
                                        <p className="text-[13px] uppercase text-white">{item.title}</p>
                                        <p className="whitespace-nowrap text-[14px] font-bold text-[#43FFD2]">
                                            {item.price.toFixed(2)} ₽
                                        </p>
                                    </div>

                                    {/* Miqdor va o'chirish */}
                                    <div className="flex items-end justify-between">
                                        <div className="flex items-center rounded-full border border-white/15 bg-white/[0.04] p-0.5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:bg-[#43FFD2]/15 hover:text-[#43FFD2] hover:shadow-[0_0_12px_rgba(67,255,210,0.35)] active:scale-90"
                                                aria-label="Уменьшить"
                                            >
                                                <Minus size={12} />
                                            </button>
                                            <span className="w-8 select-none text-center text-[13px] font-semibold tabular-nums text-white">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:bg-[#43FFD2]/15 hover:text-[#43FFD2] hover:shadow-[0_0_12px_rgba(67,255,210,0.35)] active:scale-90"
                                                aria-label="Увеличить"
                                            > 
                                                <Plus size={12} />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="cursor-pointer text-[10px] uppercase text-white/70 underline transition-colors hover:text-[#43FFD2]"
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Umumiy summa */}
                {items.length > 0 && (
                    // O'ZGARDI: "relative px-[20px] pb-[30px]" qo'shildi
                    <div className="relative mt-6 px-[20px] pb-[30px]">
                        <p className="text-white text-sm mb-4"> Предварительный итог: <span className="font-bold">{total.toFixed(2)} so'm</span></p>
                    </div>
                )}
            </aside>
        </section>
    )
}