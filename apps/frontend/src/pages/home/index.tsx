import { Footer, Header } from "widgets";
import { Game } from "features/game";
import { Mode } from "features/mode";
import styles from "./home.module.scss";

const HomePage = () => {
  return (
    <div className={styles.content}>
      <Header />
      <main className={styles.main}>
        <Mode />
        <Game />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
