import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import styles from "./button.module.scss";
import cn from "classnames";

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /** Apply additional styles to button */
  className?: string;

  /** Button theme */
  variant?: "filled" | "outline" | "subtle" | "default";

  /** Adds icon before button text  */
  leftIcon?: React.ReactNode;

  /** Adds icon after button text  */
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = "filled",
    children,
    rightIcon,
    leftIcon,
    ...othersProps
  } = props;

  const buttonCN = cn(styles.button, styles[variant], className);

  return (
    <button className={buttonCN} ref={ref} {...othersProps}>
      {leftIcon ? <span className={styles["icon-left"]}>{leftIcon}</span> : null}

      {children}

      {rightIcon ? <span className={styles["icon-right"]}>{rightIcon}</span> : null}
    </button>
  );
});
