import type { JSX } from "react";
import { Navigation } from "shared/ui/Navigation/Navigation";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "About", id: "about" },
];

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>MyApp</h1>
        <Navigation links={NAV_LINKS} />
      </div>
    </header>
  );
}
