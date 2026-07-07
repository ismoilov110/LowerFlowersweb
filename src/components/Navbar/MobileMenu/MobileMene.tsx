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

                bg-[#040A0A]

                border-t
                border-[#43FFD2]/20

                lg:hidden

                z-50
            "
        >
            <div className="px-5 py-8">

                <NavLinks
                    layout="mobile"
                    onLinkClick={onClose}
                />

            </div>
        </div>
    );
}