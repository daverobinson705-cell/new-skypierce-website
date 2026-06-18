import { FloatingInputProps } from "@/types/ui";
import styles from "@/styles/components/inputfield.module.css";

const TextArea = (props: FloatingInputProps) => {
    return (
        <div className={`${styles.formGroup}`}>
            <textarea
                title={props.label}
                name={props.name}
                className={`${styles.floatingInput} ${props.className}`}
                placeholder=" "
                required value={props.value}
            />
            <label
                htmlFor={props.label}
                className={`${styles.floatingLabel}`}>{props.label}
            </label>
        </div>
    );
};

export default TextArea;