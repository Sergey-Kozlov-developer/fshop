import type { ReactNode } from "react";

export interface IHamburgerMenuListNav {
    id: number;
    path: string;
    title: string;
    icon?: ReactNode;
}

export interface IHamburgerMenuProps {
    icon: ReactNode;
    listNav: IHamburgerMenuListNav[];
    triggerClassName?: string;
    contentClassName?: string;
    onItemClick?: () => void;
}
