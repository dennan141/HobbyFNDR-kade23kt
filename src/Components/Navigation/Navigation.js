import styles from "./Navigation.module.css";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  {
    href: "/",
    text: "Hem",
    description: "Klicka här för att läsa mer om HobbyFNDR",
  },
  {
    href: "/contact",
    text: "Kontakt",
    description: "Kontakta mig angående mina projekt",
  },
  {
    href: "/tools",
    text: "Mer info",
    description: "Mer info om HobbyFndr och dess delar",
  },
];

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/Hobbyfndr.png"
          alt="Hobby fndr logga"
          width={100}
          height={100}
          priority
        />
      </Link>

      <div className={styles.grid}>
        {LINKS.map((x) => (
          <NavigationLink key={x.href} {...x} />
        ))}
      </div>
    </div>
  );
}

function NavigationLink({ href, text, description }) {
  return (
    <Link href={href} className={styles.card}>
      <h2>
        {text} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </Link>
  );
}
