"use client"

import { useState } from "react";
import Rayting from "./Rayting";
import ReviewsPanelInput from "./ReviewsPanelInput";
import { reivewsSchemas, type ReviewFormValues } from "@/schemas/reivewsSchemas";

type ReviewFormErrors = Partial<Record<keyof ReviewFormValues, string>>

export default function ReviewsPanel() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState<ReviewFormErrors>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const result = reivewsSchemas.safeParse({ rating, comment, name, email })

    if (!result.success) {
      const fieldErrors: ReviewFormErrors = {}
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ReviewFormValues
        fieldErrors[fieldName] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    console.log("Yuborilyapti:", result.data)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <p className="fonts-[400] text-[14px] leading-none text-white">Отзывов пока нет</p>

      <div className="mt-[60px]">
        <h3 className="fonts-[400] text-[14px] leading-none text-[#43FFD2] uppercase">Будьте первым, кто оставил отзыв на "Рубиновые искры"</h3>
        <p className="fonts-[400] text-[14px] leading-none text-white py-3">Ваш адрес email не будет опубликован. Обязательные поля помечены *</p>
      </div>

      <div className="mt-[20px]">
        <Rayting value={rating} onChange={setRating} />
        {errors.rating && <p className="text-red-400 text-xs mt-1">{errors.rating}</p>}
      </div>

      {/* Bu yerda ReviewsPanelInput o'zgarishsiz ishlatiladi */}
      <ReviewsPanelInput
        comment={comment}
        onCommentChange={setComment}
        name={name}
        onNameChange={setName}
        email={email}
        onEmailChange={setEmail}
        errors={errors}
      />

      <button
        type="submit"
        className="w-full max-w-[540px] relative overflow-hidden rounded-md bg-gradient-to-r from-[#43FFD2] to-[#2DE0A8] px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-black shadow-[0_8px_24px_rgba(67,255,210,0.25)] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(67,255,210,0.4)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer mt-2"
      >
        Отправить
      </button>
      <p className="mt-[10px] font-medium w-full max-w-[342px] text-[10px] leading-relaxed text-white/80">
        Нажимая на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с{" "}
        <span className="font-medium text-[10px] underline text-[#D978AC] hover:text-[#43FFD2] cursor-pointer transition-colors">
          Политикой конфиденциальности
        </span>
      </p>
    </form>
  )
}