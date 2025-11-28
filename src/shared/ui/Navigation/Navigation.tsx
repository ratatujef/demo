import type { JSX } from "react";
import styles from "./Navigation.module.scss";

type Props = {
  links: { label: string; id: string }[];
};

export function Navigation({ links }: Props): JSX.Element {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.navigation}>
      {links.map((link) => (
        <button key={link.id} onClick={() => handleScroll(link.id)}>
          {link.label}
        </button>
      ))}
    </nav>
  );
}
