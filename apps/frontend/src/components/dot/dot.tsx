import styles from "./dot.module.scss";

interface DotProps {
  x?: number;
  y?: number;
  size: number;
  color?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Dot = ({ x, y, color, onClick, size }: DotProps) => {
  return (
    <div
      onClick={onClick}
      style={{ top: y, right: x, backgroundColor: color, width: size, height: size }}
      className={styles.dot}
    />
  );
};
