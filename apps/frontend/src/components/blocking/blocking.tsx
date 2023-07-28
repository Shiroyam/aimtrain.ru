import styles from "./blocking.module.scss";

export const BlockingSmallScreen = () => {
  return (
    <div className={styles.blocking}>
      <p>Sorry, but this web application does not support small screens</p>
    </div>
  );
};
