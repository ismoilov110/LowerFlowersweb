// Navbar Links

import type { CatalogCardType } from "@/Types/types"

export const NavbarLink = [
    {
        id: 0,
        name: "Главная",
        slug: "/"
    },
    {
        id: 1,
        name: "Каталог",
        slug: "/catalog"
    },
    {
        id: 2,
        name: "Доставка и оплата",
        slug: "/delivery"
    },
    {
        id: 3,
        name: "О нас",
        slug: "/about"
    },
    {
        id: 4,
        name: "Контакты",
        slug: "/contacts"
    },
    {
        id: 5,
        name: "FAQ",
        slug: "/faq"
    }
]


// CatologCard data

export const CatalogCards: CatalogCardType[] = [
    {
        id: 0,
        title: "готовые букеты из сухоцветов",
        items: [
            "букеты",
            "для интерьера",
            "Композиции"
        ]
    },
    {
        id: 1,
        title: "Цветы",
        items: [
            "Сборные букеты",
            "Монобукеты",
            "Композиции из цветов",
            "розы",
            "свадебные"
        ]
    },

    {
        id: 2,
        title: "дополнительно",
        items: [
            "шары",
            "игрушки",
            "открытки",
            "розы",
            "упаковка"
        ]
    },

]