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


// for CatalogCards types

export interface CatalogCardType {
    id: number;
    title: string;
    items: string[]
}


// for CatalogProducts types 

export interface CatalogProdctType {
    id: number,
    imags: string,
    name: string,
    price: string,
    
}


// for PopularProducts types

export interface PopularProductType {
    id: number
    imgs: string
    title: string
    PricePopular: string
    Category: string,
    CatergorySlug: string
}


// for breancrumbs types 

export interface BreadcrumbsType {
    label: string
    href?: string
}

// for Catalog category buttons
export interface CatalogCategoryType {
    id: number;
    label: string;
}


export interface CatalogProductType {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    isNew: boolean;
}
