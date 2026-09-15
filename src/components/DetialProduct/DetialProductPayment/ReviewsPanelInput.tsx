
interface ReviewsPanelInputProps {
    comment: string
    onCommentChange: (value: string) => void
    name: string
    onNameChange: (value: string) => void
    email: string
    onEmailChange: (value: string) => void
    errors: Partial<Record<"comment" | "name" | "email", string>>
}

export default function ReviewsPanelInput({ comment, onCommentChange, name, onNameChange, email, onEmailChange, errors }: ReviewsPanelInputProps) {
    return (
        <section className="mt-[20px] space-y-6">
            {/* textrea input */}
            <div>
                <label className="block text-[14px] text-white mb-2">Ваш отзыв*</label>
                <textarea
                    value={comment}
                    onChange={(e) => onCommentChange(e.target.value)}
                    placeholder="Введите комментарий"
                    rows={5}
                    className="lg:w-[540px] w-[300px]  bg-transparent border border-white/20 rounded-md px-4 py-3 text-[14px] text-white placeholder:text-white/40 outline-none focus:border-[#43FFD2] transition-colors"
                >

                </textarea>
                {errors.comment && <p className="text-red-400 text-xs mt-1">{errors.comment}</p>}
            </div>

            {/* Name input */}
            <div>
                <label className="block text-[14px] text-white mb-2">Имя*</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => onNameChange(e.target.value)}
                    placeholder="Введите ваше имя"
                    className="lg:w-[540px] w-[300px] bg-transparent border border-white/20 rounded-md px-4 py-3 text-[14px]  placeholder:text-white/40 outline-none focus:border-[#43FFD2] transition-colors"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email input */}

            <div>
                <label className="block text-[14px] text-white mb-2">
                    E-mail*
                </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => onEmailChange(e.target.value)}
                    placeholder="Введите вашу почту"
                    className="lg:w-[540px] w-[300px] bg-transparent border border-white/20 rounded-md px-4 py-3 text-[14px] text-white placeholder:text-white/40 outline-none focus:border-[#43FFD2] transition-colors"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
        </section>
    )
}
