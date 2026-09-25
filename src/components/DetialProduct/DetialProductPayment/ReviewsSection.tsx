"use client"

import { useEffect, useState } from "react"
import { type ReviewFormValues } from "@/schemas/reivewsSchemas"
import ReviewsPanel from "./ReviewsPanel"

// Tip
interface Review extends ReviewFormValues {
  id: number
  date: string
}

// Statik 4 ta mavjud comment
const STATIC_REVIEWS: Review[] = [
  {
    id: 1,
    rating: 5,
    name: "Анна",
    email: "anna@example.com",
    comment: "Букет просто восхитительный! Цветы свежие, упаковка идеальная. Очень довольна покупкой.",
    date: "12.03.2025",
  },
  {
    id: 2,
    rating: 4,
    name: "Михаил",
    email: "mikhail@example.com",
    comment: "Хороший букет, доставили вовремя. Цветы красивые, но один бутон был немного помят.",
    date: "28.02.2025",
  },
  {
    id: 3,
    rating: 5,
    name: "Елена",
    email: "elena@example.com",
    comment: "Заказывала в подарок подруге — она была в восторге! Буду заказывать ещё.",
    date: "15.01.2025",
  },
  {
    id: 4,
    rating: 3,
    name: "Дмитрий",
    email: "dmitriy@example.com",
    comment: "В целом нормально, но ожидал чуть больше за эту цену. Доставка была быстрой.",
    date: "03.01.2025",
  },
]

const STORAGE_KEY = "reviews"

// Yordamchi: sanani DD.MM.YYYY formatda olish
function formatDate(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0")
  const mm = String(d.getMonth() + 1).padStart(2, "0")
  const yyyy = d.getFullYear()
  return `${dd}.${mm}.${yyyy}`
}

// Yulduzchalarni ko'rsatish
function Stars({ value }: { value: number }) {
  return (
    <span className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= value ? "text-yellow-400" : "text-white/20"}>
          ★
        </span>
      ))}
    </span>
  )
}

// Asosiy component
export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(STATIC_REVIEWS)

  // Birinchi yuklanganda localStorage'dagi foydalanuvchi reviewlarini o'qib qo'shamiz
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const userReviews: Review[] = JSON.parse(stored)
        setReviews([...STATIC_REVIEWS, ...userReviews])
      }
    } catch {
      // localStorage o'qishda xato bo'lsa — faqat staticlar ko'rinadi
    }
  }, [])

  const handleNewReview = (data: ReviewFormValues) => {
    const newReview: Review = {
      ...data,
      id: Date.now(),
      date: formatDate(new Date()),
    }

    // Faqat foydalanuvchi qo'shgan yangi reviewlarni localStorage'ga saqlaymiz
    setReviews((prev) => {
      const userReviews = prev.filter((r) => !STATIC_REVIEWS.find((s) => s.id === r.id))
      const updatedUserReviews = [...userReviews, newReview]
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUserReviews))
      } catch {
        // localStorage yozishda xato
      }
      return [...STATIC_REVIEWS, ...updatedUserReviews]
    })
  }

  return (
    <div className="mt-10">
      {/* Reviewlar ro'yxati */}
      <div className="space-y-6 mb-10">
        {reviews.map((review) => (
          <div key={review.id} className="border border-white/10 rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-sm font-semibold">{review.name}</span>
              <span className="text-white/40 text-xs">{review.date}</span>
            </div>
            <Stars value={review.rating} />
            <p className="mt-2 text-white/80 text-sm leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Yangi review yozish formasi */}
      <ReviewsPanel onNewReview={handleNewReview} />
    </div>
  )
}
