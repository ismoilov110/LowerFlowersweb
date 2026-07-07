export interface SearchButtonProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    buttonRef?: React.Ref<HTMLDivElement>;
}


export interface SearchInputProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    inputContainerRef?: React.Ref<HTMLDivElement>;
    inputElementRef?: React.Ref<HTMLInputElement>;
}

export interface ContactInfoProps {
    layout?: "desktop" | "mobile";
    contactRef?: React.Ref<HTMLDivElement>;
}

export interface BurgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface NavbarLayoutProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
}