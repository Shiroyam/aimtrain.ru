import { Children, forwardRef, useState } from "react";
import styles from "./tabs.module.scss";
import cn from "classnames";

export interface TabsProps {
  /** Apply additional styles to tabs */
  children?: React.ReactElement<TabProps>[];

  /** Spacing between tabs (in pixels) */
  spacing?: number;

  /** Content to be rendered within the tabs */
  className?: string;

  /** Index of the active tab in the children array */
  active?: number;
}

export interface TabProps {
  children: React.ReactNode;

  className?: string;
}

export const Tabs = forwardRef<HTMLUListElement, TabsProps>((props, ref) => {
  const { children, className, spacing, active } = props;

  const [state, setState] = useState(active);

  const tabsCN = cn(styles.tabs, className);

  const _children = Children.toArray(children);

  return (
    <ul ref={ref} style={{ gap: spacing }} className={tabsCN}>
      {_children.map((value, index) => {
        const tabCN = cn(styles.li, { [styles.active]: state === index });

        return (
          <li onClick={() => setState(index)} className={tabCN} key={index}>
            {value}
          </li>
        );
      })}
    </ul>
  );
});

export const Tab = ({ children, className }: TabProps) => {
  const tabCN = cn(styles.tab, className);

  return <div className={tabCN}>{children}</div>;
};
