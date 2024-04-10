import styles from "./Navigation.module.css";
import Link from "next/link";

const LINKS = [
  {
    href: "/",
    text: "Home",
    description: "Click here to return home",
  },
  {
    href: "/about-new",
    text: "About",
    description: "About me and my projects",
  },
  {
    href: "/tools",
    text: "Tools",
    description: "A few tools I built",
  },
  {
    href: "/about",
    text: "OLD about me",
    description: "OLD version of about me",
  }
];

export default function Navigation() {
  return (
    <div className={styles.grid}>
      {/* {LINKS.map((l) => (
        <NavigationLink
          text={l.text}
          href={l.href}
          description={l.description}
        />
      ))} */}

      {LINKS.map((x) => (
        <NavigationLink key={x.href} {...x} />
      ))}
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
