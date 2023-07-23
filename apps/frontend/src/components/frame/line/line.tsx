import styles from "./line.module.scss";

interface LineFrameProps {
  children?: React.ReactNode;
  onMiss?: () => void;
}

export const LineFrame = ({ onMiss, children }: LineFrameProps) => {
  return (
    <div onClick={onMiss} className={styles.frame}>
      <div className={styles.line} />
      {children}
      <div className={styles.wall} />
    </div>
  );
};
