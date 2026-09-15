import { z } from "zod"

export const reivewsSchemas = z.object({
  rating: z
    .number()
    .min(1, { message: "Пожалуйста, поставьте оценку" }),

  comment: z.string()
    .trim()
    .min(1, { message: "Отзыв не может быть пустым" })
    .min(10, { message: "Отзыв должен содержать минимум 10 символов" }),

  name: z
    .string()
    .trim()
    .min(1, { message: "Введите имя" }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Введите email" })
    .email({ message: "Некорректный email" })
})


export type ReviewFormValues = z.infer<typeof reivewsSchemas>