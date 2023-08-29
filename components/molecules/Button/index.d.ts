/// <reference types="react" />
import type { ButtonIconDirection, FixedDarkMode } from '../../../hooks';
import type { HTMLTagProps, Size } from '../../../types';
type Theme = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'clear' | 'ghost' | 'unset';
export interface ButtonProps extends HTMLTagProps<'button'> {
    delay?: number;
    size?: Size;
    theme?: Theme;
    icon?: React.ReactNode;
    iconDirection?: ButtonIconDirection;
    shape?: 'sharp-corner' | 'rounded' | 'pill';
    loading?: boolean;
    fixedDarkMode?: FixedDarkMode;
}
export declare const Button: ({ delay, size, theme, shape, iconDirection, icon, loading, fixedDarkMode, type, children, disabled, className, onClick, ...restButtonProps }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
