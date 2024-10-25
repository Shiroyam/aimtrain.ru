import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const link = [
  {
    id: 0,
    to: "/",
    name: "Game",
  },
  {
    id: 1,
    to: "/settings",
    name: "Settings",
  },
  {
    id: 2,
    to: "/form",
    name: "Form",
  },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          <Logo />
          <h1 className={styles.title}>aimtrain</h1>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {link.map(({ id, name, to }) => (
              <li key={id}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? styles.active : styles.link)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
