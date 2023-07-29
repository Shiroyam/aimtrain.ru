import { Footer, Header } from "widgets";
import { Settings } from "features/settings";
import styles from "./settings.module.scss";

const SettingsPage = () => {
  return (
    <div className={styles.content}>
      <Header />
      <main className={styles.main}>
        <Settings />
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;
