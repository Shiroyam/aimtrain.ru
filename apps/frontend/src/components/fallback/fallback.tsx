import { Button } from "shared/ui";
import { Link } from "react-router-dom";
import styles from "./fallback.module.scss";

export const FallbackComponent = () => {
  return (
    <div className={styles.error}>
      <p>Whoops, something went wrong</p>
      <Link to="/">
        <Button variant="default">Go home</Button>
      </Link>
    </div>
  );
};
