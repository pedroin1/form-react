import { useId } from "react";
import styles from "./style.module.css";

export default function InputComponent({
  label,
  type,
  value,
  setValue,
  ...props
}) {
  const id = useId();
  return (
    <div className={styles.input_container}>
      <input
        id={id}
        placeholder={label}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
        className={styles.input_item}
      />
    </div>
  );
}
