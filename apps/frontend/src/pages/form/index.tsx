import { Footer, Header } from "widgets";

import styles from "./form.module.scss";
import { Button, Input } from "shared/ui";

const FormPage = () => {
  return (
    <div className={styles.content}>
      <Header />
      <main className={styles.main}>
        <form>
          <Input />
          <Button>submit</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default FormPage;
