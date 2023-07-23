import styles from "./classic.module.scss";

interface ClassicFrameProps {
  children?: React.ReactNode;
  onMiss?: () => void;
}

export const ClassicFrame = ({ children, onMiss }: ClassicFrameProps) => {
  return (
    <div onClick={onMiss} className={styles.frame}>
      {children}
    </div>
  );
};
