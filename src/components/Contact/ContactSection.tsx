import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Phone input formatting helper: +7 (999) 999-99-99
  const formatPhoneNumber = (value: string) => {
    // Strip all non-digit characters
    const digits = value.replace(/\D/g, "");
    
    // If empty or just starting, default to "+7 ("
    if (digits.length === 0) return "";
    
    // Extract digit parts
    // Format: +7 (XXX) XXX-XX-XX
    let formatted = "+7 ";
    
    // Skip the first digit if it is 7 or 8 (international code)
    const startIdx = (digits[0] === "7" || digits[0] === "8") ? 1 : 0;
    const coreDigits = digits.substring(startIdx);
    
    if (coreDigits.length > 0) {
      formatted += "(" + coreDigits.substring(0, 3);
    }
    if (coreDigits.length >= 4) {
      formatted += ") " + coreDigits.substring(3, 6);
    }
    if (coreDigits.length >= 7) {
      formatted += "-" + coreDigits.substring(6, 8);
    }
    if (coreDigits.length >= 9) {
      formatted += "-" + coreDigits.substring(8, 10);
    }
    
    return formatted.trim();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    // Format the text and limit length to match +7 (999) 999-99-99
    const formatted = formatPhoneNumber(inputVal);
    if (formatted.length <= 18) {
      setFormData((prev) => ({ ...prev, phone: formatted }));
      if (errors.phone) setErrors((prev) => ({ ...prev, phone: false }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const hasName = formData.name.trim().length > 0;
    // Phone should look like +7 (999) 999-99-99
    const phoneDigits = formData.phone.replace(/\D/g, "");
    // Expect 11 digits: country code (7) + 10 digits
    const hasPhone = phoneDigits.length >= 11;

    setErrors({
      name: !hasName,
      phone: !hasPhone,
    });

    if (!hasName || !hasPhone) return;

    setIsSubmitting(true);

    // Simulate API call with high-end feel
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", comment: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 xl:px-24 bg-[#0B0B0B] text-white overflow-hidden">
      {/* Background glow overlay for the entire section */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#43FFD2] blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#D978AC] blur-[180px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Wrapper with rounded corners and glass outline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch rounded-[24px] border border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden p-6 sm:p-8 md:p-12 lg:p-16 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
          
          {/* LEFT COLUMN: Large Heading & Radial Glowing Background */}
          <div className="relative lg:col-span-6 flex flex-col justify-between min-h-[300px] lg:min-h-[450px] rounded-2xl overflow-hidden p-8 md:p-10 lg:p-12 border border-white/5 bg-gradient-to-br from-black/80 to-[#0A0D0C]">
            
            {/* Embedded custom radial glows simulating Figma background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Central mint glow behind heading */}
              <div className="absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#43FFD2] opacity-[0.22] blur-[90px]" />
              {/* Pink glow in bottom-left */}
              <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] rounded-full bg-[#D978AC] opacity-[0.15] blur-[80px]" />
              {/* Dark green ambient light */}
              <div className="absolute inset-0 bg-radial-[circle_at_center] from-[#43FFD2]/5 via-transparent to-transparent" />
            </div>

            {/* Left Column Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Large Elegant Heading in Serif font */}
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-light leading-[0.95] tracking-wide text-white uppercase select-none">
                Остались
                <br />
                Вопросы?
              </h2>

              {/* Signature handwritten Overlay Text - slightly rotated */}
              <div className="relative mt-8 sm:mt-12 lg:mt-0 select-none">
                <span className="inline-block transform -rotate-[10deg] translate-x-4 lg:translate-x-16 font-signature text-5xl sm:text-6xl lg:text-[4.5rem] text-[#43FFD2]/80 font-normal leading-none tracking-normal drop-shadow-[0_4px_12px_rgba(67,255,210,0.15)] transition-all duration-500 hover:text-[#43FFD2] hover:scale-105">
                  have any questions?
                </span>
              </div>

              {/* Spacer for decorative flower images to be manually added later by the user */}
              <div className="mt-8 lg:mt-0 h-12 w-full border-t border-dashed border-white/5 flex items-center justify-between text-white/20 text-xs tracking-wider">
                <span>[SPACE FOR FOLIANTS & DECORATIVE FLOWERS]</span>
                <span className="text-[10px]">leaves overlay space</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Description & Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Header Line & Description */}
            <div className="mb-10">
              <div className="w-24 h-[1px] bg-[#43FFD2] mb-6 shadow-[0_0_8px_#43FFD2]" />
              <p className="text-[11px] sm:text-xs md:text-[13px] leading-relaxed tracking-[0.18em] text-gray-400 font-sans uppercase">
                Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной связи, и наш специалист свяжется с вами в течение 15 минут.
              </p>
            </div>

            {/* Premium Contact Form */}
            {isSubmitted ? (
              <div className="min-h-[300px] flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-[#43FFD2]/20 bg-[#43FFD2]/[0.02] backdrop-blur-xl animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#43FFD2]/10 border border-[#43FFD2]/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(67,255,210,0.2)]">
                  <svg
                    className="w-8 h-8 text-[#43FFD2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium tracking-wide mb-2">Ваша заявка принята!</h3>
                <p className="text-sm text-gray-400 max-w-sm">
                  Спасибо за обращение. Наш специалист свяжется с вами по указанному номеру телефона в течение 15 минут.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="ВАШЕ ИМЯ"
                    className={`w-full px-6 py-4.5 rounded-[18px] bg-white/[0.02] border text-white font-sans text-sm tracking-wider uppercase transition-all duration-300 placeholder:text-gray-600 placeholder:text-xs placeholder:tracking-[0.15em] outline-none ${
                      errors.name
                        ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)] bg-red-500/[0.01]"
                        : "border-white/10 group-hover:border-white/20 focus:border-[#43FFD2] focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(67,255,210,0.12)]"
                    }`}
                  />
                  {errors.name && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-red-400 tracking-wider">
                      ОБЯЗАТЕЛЬНОЕ ПОЛЕ
                    </span>
                  )}
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="+7 (977) 777-77-77"
                    className={`w-full px-6 py-4.5 rounded-[18px] bg-white/[0.02] border text-white font-sans text-sm tracking-wider transition-all duration-300 placeholder:text-gray-600 placeholder:text-xs placeholder:tracking-[0.15em] outline-none ${
                      errors.phone
                        ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)] bg-red-500/[0.01]"
                        : "border-white/10 group-hover:border-white/20 focus:border-[#43FFD2] focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(67,255,210,0.12)]"
                    }`}
                  />
                  {errors.phone && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-red-400 tracking-wider">
                      НЕКОРРЕКТНЫЙ НОМЕР
                    </span>
                  )}
                </div>

                {/* Comment Textarea */}
                <div className="group">
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="ВАШ КОММЕНТАРИЙ"
                    rows={4}
                    className="w-full px-6 py-5 rounded-[22px] bg-white/[0.02] border border-white/10 group-hover:border-white/20 focus:border-[#43FFD2] focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(67,255,210,0.12)] text-white font-sans text-sm tracking-wider uppercase transition-all duration-300 placeholder:text-gray-600 placeholder:text-xs placeholder:tracking-[0.15em] outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 md:h-16 cursor-pointer rounded-[18px] bg-[#43FFD2] text-black font-semibold text-sm tracking-[0.2em] uppercase select-none transition-all duration-300 ease-out transform hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(67,255,210,0.4)] active:scale-[0.98] active:translate-y-0 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>ОТПРАВКА...</span>
                    </div>
                  ) : (
                    "ОТПРАВИТЬ"
                  )}
                </button>

                {/* Consent text */}
                <p className="text-[10px] sm:text-xs text-gray-500 leading-normal tracking-wide text-center lg:text-left mt-4">
                  Нажимая на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с{" "}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-[#D978AC] underline underline-offset-2 decoration-[#D978AC]/40 hover:text-white hover:decoration-white transition-colors duration-300"
                  >
                    Политикой конфиденциальности
                  </a>
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
