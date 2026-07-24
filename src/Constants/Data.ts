// Navbar Links

import type { CatalogCardType, CatalogProdctType, PopularProductType } from "@/Types/types"

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

import ProductImage from "../assets/Img/Flower.image.jpg"

// CatalogProducts Datas

export const CatalogProduct: CatalogProdctType[] = [
    {
        id: 0,
        imags: ProductImage,
        name: "Солнечный день",
        price: "250 000 so'm"
    },

    {
        id: 2,
        imags: ProductImage,
        name: "Нежность",
        price: "250 000 so'm"
    },
    {
        id: 3,
        imags: ProductImage,
        name: "Романтика",
        price: "450 000 so'm"
    },
    {
        id: 4,
        imags: ProductImage,
        name: "Магия любви",
        price: "390 000 so'm"
    },
    {
        id: 5,
        imags: ProductImage,
        name: "Весеннее настроение",
        price: "320 000 so'm"
    },
    {
        id: 6,
        imags: ProductImage,
        name: "Облако счастья",
        price: "560 000 so'm"
    },
]


// PopularProducts Datas
import PopularImgs from "@/assets/Img/ChatGPT Image 24 июл. 2026 г., 15_11_19.png"
import PopularImgs2 from "@/assets/Img/ChatGPT Image 24 июл. 2026 г., 15_10_33.png"
import PopularImgs3 from "@/assets/Img/ChatGPT Image 24 июл. 2026 г., 15_08_49.png"
import PopularImgs4 from "@/assets/Img/ChatGPT Image 24 июл. 2026 г., 15_06_17.png"

export const PopularsProduct: PopularProductType[] = [
    {
        id: 0,
        imgs: PopularImgs,
        title: "Розовая Симфония",
        PricePopular: "300 000 so'm"
    },
    {
        id: 1,
        imgs: PopularImgs2,
        title: "Лунный Свет",
        PricePopular: "250 000 so'm"
    },
    {
        id: 2,
        imgs: PopularImgs3,
        title: "Весенний Рассвет",
        PricePopular: "450 000 so'm"
    },
    {
        id: 3,
        imgs: PopularImgs4,
        title: "Королевская Роза",
        PricePopular: "390 000 so'm"
    },
    {
        id: 4,
        imgs: PopularImgs4,
        title: "Магия Цветов",
        PricePopular: "320 000 so'm"
    },
    {
        id: 5,
        imgs: PopularImgs4,
        title: "Белое Облако",
        PricePopular: "560 000 so'm"
    },
    {
        id: 6,
        imgs: PopularImgs4,
        title: "Солнечный день",
        PricePopular: "760 000 so'm"
    },
    {
        id: 7,
        imgs: PopularImgs4,
        title: "Нежность",
        PricePopular: "1000 000 so'm"
    },
    {
        id: 8,
        imgs: PopularImgs4,
        title: "Романтика",
        PricePopular: "2000 000 so'm"
    },


]