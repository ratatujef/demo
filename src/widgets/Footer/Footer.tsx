import type { JSX } from "react";
import styles from "./Footer.module.scss";

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&copy; 2025 MyApp. All rights reserved.</p>
          <div className={styles.links}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
