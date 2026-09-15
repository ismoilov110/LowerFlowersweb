"use client"

interface LeafDecoritonProps {
    imageSrc: string,
    className?: string;
}

export default function LeaveDecorition({ imageSrc, className = "" }: LeafDecoritonProps) {
    return (
        <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-[480px] lg:w-[540px] xl:w-[600px] flex items-start justify-end ${className}`}>
            <img
                src={imageSrc}
                alt=""
                aria-hidden="true"
                className="w-full h-auto object-contain object-right"
            />
        </div>
    )
}