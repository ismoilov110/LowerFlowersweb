// Navbar Links

import type { CatalogCardType, CatalogProdctType, PopularProductType, CatalogCategoryType, CatalogProductType } from "@/Types/types"

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

// Catalog products data for the catalog page

import ProductImage1 from "@/assets/Img/image 114.png"
import ProductImage2 from "@/assets/Img/image 130.png"
import ProductImage3 from "@/assets//Img/image 131.png"
import ProductImage4 from "@/assets/Img/image 132.png"
import ProductImage5 from "@/assets/Img/image 133.png"
import ProductImage6 from "@/assets/Img/image 134.png"
import ProductImage7 from "@/assets/Img/image 135.png"
import ProductImage8 from "@/assets/Img/image 136.png"
import ProductImage9 from "@/assets/Img/image 137.png"
import ProductImage10 from "@/assets/Img/image 138.png"
import ProductImage11 from "@/assets/Img/image 139.png"
import ProductImage12 from "@/assets/Img/image 140.png"

export const products: CatalogProductType[] = [
  {
    id: 0,
    title: "Лучший день",
    price: 167000,
    image: ProductImage1,
    category: "Розы",
    isNew: true,
  },
  {
    id: 1,
    title: "Нежность",
    price: 185000,
    image: ProductImage2,
    category: "Розы",
    isNew: true,
  },
  {
    id: 2,
    title: "Облако любви",
    price: 210000,
    image: ProductImage3,
    category: "Гортензии",
    isNew: false,
  },
  {
    id: 3,
    title: "Розовое утро",
    price: 195000,
    image: ProductImage4,
    category: "Пионы",
    isNew: false,
  },
  {
    id: 4,
    title: "Белые тюльпаны",
    price: 145000,
    image: ProductImage5,
    category: "Тюльпаны",
    isNew: false,
  },
  {
    id: 5,
    title: "Авторский букет",
    price: 250000,
    image: ProductImage6,
    category: "Авторские букеты",
    isNew: true,
  },
  {
    id: 6,
    title: "Персиковое настроение",
    price: 178000,
    image: ProductImage7,
    category: "Розы",
    isNew: false,
  },
  {
    id: 7,
    title: "Белая мечта",
    price: 220000,
    image: ProductImage8,
    category: "Розы",
    isNew: true,
  },
  {
    id: 8,
    title: "Весенний букет",
    price: 155000,
    image: ProductImage9,
    category: "Тюльпаны",
    isNew: false,
  },
  {
    id: 9,
    title: "Розовая нежность",
    price: 189000,
    image: ProductImage10,
    category: "Пионы",
    isNew: false,
  },
  {
    id: 10,
    title: "Голубая мечта",
    price: 230000,
    image: ProductImage11,
    category: "Гортензии",
    isNew: true,
  },
  {
    id: 11,
    title: "Любовь с первого взгляда",
    price: 270000,
    image: ProductImage12,
    category: "Авторские букеты",
    isNew: false,
  },
  {
    id: 12,
    title: "Утренний свет",
    price: 165000,
    image: ProductImage12,
    category: "Розы",
    isNew: false,
  },
  {
    id: 13,
    title: "Пудровая композиция",
    price: 205000,
    image: ProductImage11,
    category: "Пионы",
    isNew: true,
  },
  {
    id: 14,
    title: "Лавандовая мечта",
    price: 175000,
    image: ProductImage10,
    category: "Авторские букеты",
    isNew: false,
  },
  {
    id: 15,
    title: "Нежный рассвет",
    price: 160000,
    image: ProductImage10,
    category: "Тюльпаны",
    isNew: false,
  },
  {
    id: 16,
    title: "Королевские розы",
    price: 290000,
    image: ProductImage11,
    category: "Розы",
    isNew: true,
  },
  {
    id: 17,
    title: "Летний сад",
    price: 215000,
    image: ProductImage9,
    category: "Авторские букеты",
    isNew: false,
  },
  {
    id: 18,
    title: "Белоснежная нежность",
    price: 180000,
    image: ProductImage8,
    category: "Розы",
    isNew: false,
  },
  {
    id: 19,
    title: "Яркое настроение",
    price: 198000,
    image: ProductImage9,
    category: "Тюльпаны",
    isNew: true,
  },
  {
    id: 20,
    title: "Розовый закат",
    price: 225000,
    image: ProductImage10,
    category: "Пионы",
    isNew: false,
  },
  {
    id: 21,
    title: "Сиреневая любовь",
    price: 235000,
    image: ProductImage11,
    category: "Гортензии",
    isNew: false,
  },
  {
    id: 22,
    title: "Цветочное облако",
    price: 255000,
    image: ProductImage12,
    category: "Авторские букеты",
    isNew: true,
  },
  {
    id: 23,
    title: "Весеннее утро",
    price: 150000,
    image: ProductImage12,
    category: "Тюльпаны",
    isNew: false,
  },
  {
    id: 24,
    title: "Малиновая нежность",
    price: 190000,
    image: ProductImage11,
    category: "Розы",
    isNew: false,
  },
  {
    id: 25,
    title: "Пионовая любовь",
    price: 245000,
    image: ProductImage10,
    category: "Пионы",
    isNew: true,
  },
  {
    id: 26,
    title: "Небесная композиция",
    price: 260000,
    image: ProductImage9,
    category: "Гортензии",
    isNew: false,
  },
  {
    id: 27,
    title: "Цветочный комплимент",
    price: 175000,
    image: ProductImage8,
    category: "Авторские букеты",
    isNew: false,
  },
  {
    id: 28,
    title: "Розовая мечта",
    price: 215000,
    image: ProductImage9,
    category: "Розы",
    isNew: true,
  },
  {
    id: 29,
    title: "Идеальный подарок",
    price: 280000,
    image: ProductImage10,
    category: "Авторские букеты",
    isNew: false,
  },
];