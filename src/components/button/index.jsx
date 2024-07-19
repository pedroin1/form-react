import styles from "./style.module.css";

export default function ButtonComponent({
  primary = true,
  secondary = false,
  onClick,
  children,
  ...props
}) {
  return (
    <button
      className={`${styles.button} ${
        secondary ? styles.button_secondary : styles.button_primary
      }`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
