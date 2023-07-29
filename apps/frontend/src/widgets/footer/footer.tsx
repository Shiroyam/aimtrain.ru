import { ReactComponent as GitHub } from "./github.svg";
import { ReactComponent as License } from "./license.svg";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.ul}>
          <li>
            <a href="https://github.com/Shiroyam/aimtrain.ru/tree/master" target="_blank">
              <GitHub className={styles.git} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Shiroyam/aimtrain.ru/blob/master/LICENSE"
              target="_blank"
            >
              <License className={styles.license} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
