
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
        <section className="py-12 sm:py-16 lg:py-20">
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#D978AC] mb-10 sm:mb-14">
                Дополнительно к заказу:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
                {extraServices.map((item, index) => (
                    <div key={index} className="relative pt-4">

                        {/* Tepadagi Nuqta */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#040A0A] border border-white/20"></div>

                        {/* Cards */}
                        <div className="h-full rounded-[20px] border border-white/5 bg-white/[0.03] backdrop-blur-sm px-5 sm:px-6 py-8 sm:py-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#43FFD2]/30 hover:bg-white/[0.06] shadow-lg">
                            <h3 className="text-[#43FFD2] font-bold uppercase tracking-wide text-xs sm:text-sm whitespace-pre-line leading-relaxed">{item.title}</h3>
                            <p className="mt-3 sm:mt-4 text-white/70 text-xs sm:text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

