import styles from "./Navigation.module.css";
import Link from "next/link";
import Image from "next/image";


const LINKS = [
  {
    href: "/",
    text: "Home",
    description: "Klicka här för att läsa mer om HobbyFndr",
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
      <Image
          className={styles.logo}
          src="/Hobbyfndr.png"
          alt="Hobby fndr logga"
          width={100}
          height={100}
          priority
        />
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

{
  /* <div className={styles.grid}>
<a href="/" className={styles.card}>
  <h2>
    Docs <span>-&gt;</span>
  </h2>
  <p>Find in-depth information about Next.js features and API.</p>
</a>

<a href="/" className={styles.card}>
  <h2>
    Learn <span>-&gt;</span>
  </h2>
  <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
</a>

<a href="/" className={styles.card}>
  <h2>
    Templates <span>-&gt;</span>
  </h2>
  <p>Explore starter templates for Next.js.</p>
</a>

<a href="/" className={styles.card}>
  <h2>
    Deploy <span>-&gt;</span>
  </h2>
  <p>
    Instantly deploy your Next.js site to a shareable URL with Vercel.
  </p>
</a>
</div> */
}
