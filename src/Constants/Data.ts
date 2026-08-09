// Navbar Links

import type { CatalogCardType, CatalogProdctType, PopularProductType, CatalogCategoryType } from "@/Types/types"

export const NavbarLink = [
    {
        id: 0,
        name: "Главная",
        slug: "/"
    },
    {
        id: 1,
        name: "Каталог",
        slug: "/catelogy"
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

// Footer Links Type Definition
export interface FooterLink {
    id: number;
    name: string;
    slug: string;
}

// Catalog category links for Column 2
export const FooterCatalogLinks: FooterLink[] = [
    { id: 0, name: "Популярное", slug: "/catelogy?filter=popular" },
    { id: 1, name: "Сухоцветы", slug: "/catelogy?filter=dried-flowers" },
    { id: 2, name: "Букеты роз", slug: "/catelogy?filter=roses" },
    { id: 3, name: "Композиции из цветов", slug: "/catelogy?filter=compositions" },
    { id: 4, name: "Индивидуальный букет", slug: "/catelogy?filter=individual" },
    { id: 5, name: "Букет на праздник", slug: "/catelogy?filter=holiday" },
    { id: 6, name: "Упаковка подарков", slug: "/catelogy?filter=gift-wrapping" },
    { id: 7, name: "Шары", slug: "/catelogy?filter=balloons" },
    { id: 8, name: "Открытки", slug: "/catelogy?filter=postcards" },
    { id: 9, name: "Конверты", slug: "/catelogy?filter=envelopes" }
];

// Bouquet recipient links for Column 3
export const FooterBouquetLinks: FooterLink[] = [
    { id: 0, name: "Для девушки", slug: "/catelogy?recipient=girl" },
    { id: 1, name: "Для мужчины", slug: "/catelogy?recipient=man" },
    { id: 2, name: "Для жены", slug: "/catelogy?recipient=wife" },
    { id: 3, name: "Для мамы", slug: "/catelogy?recipient=mom" },
    { id: 4, name: "Для коллеги", slug: "/catelogy?recipient=colleague" },
    { id: 5, name: "Для начальника", slug: "/catelogy?recipient=boss" },
    { id: 6, name: "Для дочки", slug: "/catelogy?recipient=daughter" },
    { id: 7, name: "Для детей", slug: "/catelogy?recipient=kids" },
    { id: 8, name: "Для женщины", slug: "/catelogy?recipient=woman" }
];

// General navigation links for Column 4
export const FooterNavigationLinks: FooterLink[] = [
    { id: 0, name: "Доставка и оплата", slug: "/delivery" },
    { id: 1, name: "О нас", slug: "/about" },
    { id: 2, name: "FAQ", slug: "/faq" },
    { id: 3, name: "Контакты", slug: "/contacts" },
    { id: 4, name: "Для корпоративных клиентов", slug: "/corporate" }
];

// Catalog Category Buttons Data
export const catalogCategories: CatalogCategoryType[] = [
  { id: 0, label: "БУКЕТЫ ИЗ ГИПСОФИЛ" },
  { id: 1, label: "БУКЕТЫ ИЗ РОМАШЕК" },
  { id: 2, label: "БУКЕТЫ ИЗ ХРИЗАНТЕМ" },
  { id: 3, label: "КОМНАТНЫЕ ЦВЕТЫ В ГОРШКАХ" },
  { id: 4, label: "МОНОБУКЕТЫ" },
  { id: 5, label: "СБОРНЫЕ БУКЕТЫ" },
  { id: 6, label: "БУКЕТ НА ПРАЗДНИК" },
  { id: 7, label: "КОМПОЗИЦИИ ИЗ ЦВЕТОВ" },
  { id: 8, label: "КОНВЕРТЫ" },
  { id: 9, label: "ОТКРЫТКИ" },
  { id: 10, label: "ПОДАРКИ" },
  { id: 11, label: "БУКЕТЫ ИЗ СУХОЦВЕТОВ" },
  { id: 12, label: "ШАРЫ" },
  { id: 13, label: "ПОПУЛЯРНОЕ" },
  { id: 14, label: "БУКЕТЫ РОЗ" },
  { id: 15, label: "ЦВЕТЫ НА ПОХОРОНЫ" },
  { id: 16, label: "УПАКОВКА ПОДАРКОВ" }
];