import { DetailedHTMLProps, SelectHTMLAttributes, forwardRef } from "react";
import styles from "./select.module.scss";
import cn from "classnames";

export interface SelectProps
  extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  /** Apply additional styles to select */
  className?: string;

  /** Select theme */
  variant?: "filled" | "default";
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, variant = "default", ...othersProps } = props;

  const selectCN = cn(styles.select, className, styles[variant]);

  return <select className={selectCN} ref={ref} {...othersProps} />;
});
