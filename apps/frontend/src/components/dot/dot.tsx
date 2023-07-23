import styles from "./dot.module.scss";

interface DotProps {
  x?: number;
  y?: number;
  color?: string;
  onClick: (e: React.MouseEvent) => void;
}

export const Dot = ({ x, y, color, onClick }: DotProps) => {
  return (
    <div
      onClick={onClick}
      style={{ top: y, right: x, backgroundColor: color }}
      className={styles.dot}
    />
  );
};
