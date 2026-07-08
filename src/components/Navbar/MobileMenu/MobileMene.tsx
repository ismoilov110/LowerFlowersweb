import NavLinks from "../NavLinks";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({
    isOpen,
    onClose,
}: MobileMenuProps) {

    if (!isOpen) return null;

    return (
        <div
            className="
                absolute
                top-full
                left-0

                w-full

                lg:hidden
                z-50

                overflow-hidden

                border-t
                border-[#43FFD2]/20

                

                backdrop-blur-3xl

                shadow-[0_30px_80px_rgba(0,0,0,.65)]

                animate-in
                slide-in-from-top-2
                duration-300
            "
        >
            {/* Top Blur */}
            <div
                className="
                    absolute
                    -top-28
                    left-1/2
                    -translate-x-1/2

                    w-[320px]
                    h-[320px]

                    rounded-full

                    bg-[#43FFD2]/10

                    blur-[130px]

                    pointer-events-none
                "
            />

            {/* Bottom Purple Blur */}
            <div
                className="
                    absolute
                    bottom-[-180px]
                    right-[-120px]

                    w-[280px]
                    h-[280px]

                    rounded-full

                    bg-[#7D2253]/20

                    blur-[140px]

                    pointer-events-none
                "
            />

            <div
                className="
                    relative

                    px-7
                    py-8

                    bg-gradient-to-b
                    from-[#091313]/80
                    via-[#070B0B]/70
                    to-[#040606]/80

                    rounded-b-[28px]
                "
            >
                <NavLinks
                    layout="mobile"
                    onLinkClick={onClose}
                />
            </div>
        </div>
    );
}