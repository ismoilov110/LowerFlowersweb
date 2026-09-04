
const extraServices = [
    {
        title: "УДОБРЕНИЯ ДЛЯ\nСРЕЗАННЫХ ЦВЕТОВ",
        description: "При указании об этом в пожеланиях к букету, мы приложим пакетик удобрения для вас",
    },
    {
        title: "ПОДПИШЕМ\nОТКРЫТКУ",
        description: "В пожеланиях к букету укажите текст, какой хотите разместить и выберите на сайте саму открытку",
    },
    {
        title: "ФОТО БУКЕТА\nПЕРЕД ОТПРАВКОЙ",
        description: "В примечании к заказу укажите об этом и мы отправим фото готового букета перед доставкой. В праздничные дни в связи с большой загруженностью такой возможности нет",
    },
    {
        title: "БУКЕТ-СЮРПРИЗ",
        description: "Если хотите, чтобы получатель не знал, что ему вручат а также от кого, то укажите об этом в примечании к заказу",
    },
]

export default function ExtraServices() {
    return (
        <section className="py-20">
            <h2 className="text-center text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#D978AC] mb-14">
                Дополнительно к заказу:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1440px] mx-auto px-6">
                {extraServices.map((item, index) => (
                    <div key={index} className="relative pt-5">

                        {/* Tepadagi Nuqta */}
                        <div className="absolute -top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-black"></div>

                        {/* Cards */}
                        <div className="h-full rounded-[20px] border-none bg-white/[0.03] backdrop-blur-sm px-6 py-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#43FFD2]/30 hover:bg-white/[0.05]">
                            <h3 className="text-[#43FFD2] font-bold uppercase tracking-wide text-sm whitespace-pre-line leading-relaxed">{item.title}</h3>
                            <p className="mt-4 text-white/70 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>


        </section>
    )
}
