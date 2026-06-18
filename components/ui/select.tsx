import { FloatingSelectProps } from "@/types/ui"
import styles from "@/styles/components/inputfield.module.css";

const SelectField = (props: FloatingSelectProps & { options: { value: string; label: string }[] }) => {
    return (
        <div className={`${styles.formGroup} w-full`}>
            <select
                title={props.label}
                className={`${styles.floatingInput} ${props.className}`} required
                name={props.name}
                value={props.value} onChange={props.onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void}
            >
                <option value="" disabled hidden></option>
                {props.options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label
                htmlFor={props.label}
                className={`${styles.floatingLabel}`}>
                {props.label}
            </label>
        </div>
    );
};

export default SelectField;
