import { ReactNode } from "react";

export interface IDetailBox {
    title: string,
    description: string,
    icon: ReactNode,
    color?: string
}