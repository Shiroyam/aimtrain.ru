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
        <a
          href="https://metrika.yandex.ru/stat/?id=98707984&amp;from=informer"
          target="_blank"
          rel="nofollow"
        >
          <img
            src="https://metrika-informer.com/informer/98707984/2_0_FFFFFFFF_EFEFEFFF_0_pageviews"
            alt="Яндекс.Метрика"
            title="Яндекс.Метрика: данные за сегодня (просмотры)"
            className="ym-advanced-informer"
            data-cid="98707984"
            data-lang="ru"
          />
        </a>
      </div>
    </footer>
  );
};
