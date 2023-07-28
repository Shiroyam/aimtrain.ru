import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import styles from "./input.module.scss";
import cn from "classnames";

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /** Apply additional styles to input */
  className?: string;

  /** Input theme */
  variant?: "filled" | "default";

  /** Input label */
  label?: string;

  /** Validation error */
  error?: boolean;

  /** Validation error text */
  errorText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    variant = "default",
    className,
    label,
    id,
    error,
    errorText,
    ...othersProps
  } = props;

  const inputCN = cn(styles.input, styles[variant], className, { [styles.error]: error });

  return (
    <>
      {label ? (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      ) : null}

      <input id={id} className={inputCN} ref={ref} {...othersProps} />

      {errorText ? <div className={styles["error-text"]}>{errorText}</div> : null}
    </>
  );
});
