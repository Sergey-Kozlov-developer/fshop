import type { ReactNode } from "react";

interface ICardSavingZone {
    id: number;
    title: string;
    subTitle: string;
    sale: string;
    arrowDown: ReactNode;
    img: string;
}

export interface CardSavingZoneProps {
    item: ICardSavingZone;
}
