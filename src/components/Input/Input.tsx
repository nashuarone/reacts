import classnames from "classnames";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  value: string;
  type: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  checked?: boolean;
  icon?: React.ReactNode;
  variant?: "default" | "filled";
  size?: "default" | "small" | "large";
  radius?: "default" | "quadro" | "circle";
}

export const Input = ({
  label,
  value,
  type,
  name,
  placeholder,
  description,
  onChange,
  error,
  required,
  disabled,
  checked,
  icon,
  variant = "default",
  size = "default",
  radius = "default",
}: InputProps) => {
  return (
    <div>
      <div>
        {label}
        {required && <span className={styles.attention}>*</span>}
      </div>
      <div>{description}</div>
      <div
        className={classnames(styles.inputField, {
          [styles.inputField__error]: error,
          [styles.inputField__inline]: type === "radio",
          [styles.inputField__small]: size === "small",
          [styles.inputField__large]: size === "large",
          [styles.inputField__filled]: variant === "filled",
          [styles.inputField__quadro]: radius === "quadro",
          [styles.inputField__circle]: radius === "circle",
        })}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          checked={checked}
        />
      </div>
      {error && <div className={styles.attention}>{error}</div>}
    </div>
  );
};
