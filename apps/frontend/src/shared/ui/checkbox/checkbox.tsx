import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import styles from "./checkbox.module.scss";
import cn from "classnames";

export interface CheckboxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /** Checkbox left label */
  leftLabel?: string;

  /** Checkbox right label */
  rightLabel?: string;

  /** Apply additional styles to checkbox */
  className?: string;

  /** Checkbox theme */
  variant?: "outline" | "default";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    className,
    id,
    variant = "outline",
    leftLabel,
    rightLabel,
    ...othersProps
  } = props;

  const inputCN = cn(styles.checkbox, styles[variant], className);

  return (
    <div className={styles.container}>
      {leftLabel && (
        <label className={styles["left-label"]} htmlFor={id}>
          {leftLabel}
        </label>
      )}

      <input type="checkbox" id={id} className={inputCN} ref={ref} {...othersProps} />

      {rightLabel && (
        <label className={styles["right-label"]} htmlFor={id}>
          {rightLabel}
        </label>
      )}
    </div>
  );
});
