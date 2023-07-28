import cn from "classnames";
import styles from "./stat.module.scss";

export interface StatProps {
  hits: number;
  miss: number;
  time: number;
  className?: string;
}

export const Stat = ({ hits, miss, time, className }: StatProps) => {
  const statCN = cn(styles.stat, className);

  return (
    <div className={statCN}>
      <div className={styles.hits}>{hits}</div>
      <div className={styles.time}>{time}s</div>
      <div className={styles.miss}>{miss}</div>
    </div>
  );
};
