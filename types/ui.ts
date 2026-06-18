export type ButtonProps = {
    label: any;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    title: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export interface LayoutProps {
    children: React.ReactNode;
    formmodal?: React.ReactNode;
}

export type AnimatedWrapperProps = {
    children: React.ReactNode;
    animation?: string;
    delay?: number;
    className?: string;
};

export interface FloatingInputProps {
    label: string;
    type?: string;
    name?: string;
    value?: string;
    className?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FloatingSelectProps = Omit<FloatingInputProps, "type" | "onChange"> & {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
};