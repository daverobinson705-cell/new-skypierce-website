import { FloatingInputProps } from "@/types/ui";
import styles from "@/styles/components/inputfield.module.css";

const InputField = (props: FloatingInputProps) => {
    return (
        <div className={`${styles.formGroup}`}>
            <input
                type={props.type}
                name={props.name}
                title={props.label}
                className={`${styles.floatingInput} ${props.className}`}
                placeholder=" "
                required value={props.value}
                onChange={props.onChange}
            />
            <label
                htmlFor={props.label}
                className={`${styles.floatingLabel}`}>{props.label}
            </label>
        </div>
    );
};

export default InputField;