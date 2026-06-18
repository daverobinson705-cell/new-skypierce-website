import { ButtonProps } from "@/types/ui";
import styles from "@/styles/components/button.module.css";

const Button = (props: ButtonProps) => {
    return (
        <button
            type={props.type}
            title={props.title}
            onClick={props.onClick}
            disabled={props.disabled}
            className={`${styles.button} ${props.className}`}>
            {props.icon && <span>{props.icon}</span>}
            {props.label}
        </button>
    );
};

export default Button;
