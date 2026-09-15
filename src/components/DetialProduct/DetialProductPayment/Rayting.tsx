import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useState } from "react"

interface RaytingProps {
    value: number,
    onChange: (value: number) => void
}

export default function Rayting({ value, onChange }: RaytingProps) {
    const [hoverValue, setHoverValue] = useState(0)

    return (
        <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <Button
                    type="button"
                    key={star}
                    onClick={() => onChange(star)}
                    onMouseEnter={() => setHoverValue(star)}
                    onMouseLeave={() => setHoverValue(0)}
                    className="text-2xl leading-none cursor-pointer"
                >
                    <span className={star <= (hoverValue || value) ? "text-yellow-500" : "text-white"}>
                        <Star />
                    </span>
                </Button>
            ))}
        </div>
    )
}