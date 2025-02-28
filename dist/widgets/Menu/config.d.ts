export declare const links: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
        target: string;
    }[];
    href?: undefined;
})[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
        target: string;
    }[];
    href?: undefined;
    target?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    target: string;
    items?: undefined;
})[];
export declare const MENU_HEIGHT = 64;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
