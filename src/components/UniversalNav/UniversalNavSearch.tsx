import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UniversalNavSearch() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    // Close on click outside or Escape key
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/catelogy?search=${encodeURIComponent(query.trim())}`);
            setIsOpen(false);
            setQuery("");
        }
    };

    return (
        <div ref={containerRef} className="relative flex items-center">
            {!isOpen ? (
                // Closed state: Search button matching Figma design
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-1.5 text-white/90 hover:text-[#43FFD2] uppercase text-[12px] xl:text-[13px] font-medium tracking-[0.08em] transition-colors duration-300 cursor-pointer group py-1"
                >
                    <Search size={15} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>Поиск</span>
                </button>
            ) : (
                // Open state: clean input field
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center h-[36px] w-[200px] xl:w-[240px] px-3 rounded-full border border-[#43FFD2]/40 bg-[#091111]/95 shadow-[0_0_15px_rgba(67,255,210,0.15)] transition-all duration-300"
                >
                    <Search size={14} className="text-[#43FFD2] shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Поиск цветов..."
                        className="flex-1 ml-2 bg-transparent text-xs text-white placeholder:text-[#7B8A89] outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setIsOpen(false);
                            setQuery("");
                        }}
                        className="p-1 text-white/40 hover:text-white transition-colors cursor-pointer"
                        aria-label="Yopish"
                    >
                        <X size={14} />
                    </button>
                </form>
            )}
        </div>
    );
}
