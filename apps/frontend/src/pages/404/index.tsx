import { Footer, Header } from "widgets";
import styles from "./home.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.content}>
      <Header />
      <main className={styles.main}>
        <p>
          <span>404</span> Page not found
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
