import cn from "classnames";
import styles from "./stat.module.scss";

interface StatProps {
  hits: number;
  miss: number;
  className?: string;
}

export const Stat = ({ hits, miss, className }: StatProps) => {
  const statCN = cn(styles.stat, className);

  return (
    <div className={statCN}>
      <div className={styles.hits}>{hits}</div>
      <div className={styles.miss}>{miss}</div>
    </div>
  );
};
