/* eslint-disable */

import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ICommonButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    className?: string;
    icon?: ReactNode;
    href?: string;
}