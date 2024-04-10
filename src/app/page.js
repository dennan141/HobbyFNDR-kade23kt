import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "../Components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <div className={styles.description}>
        <p>
          Dagge Danger 😁
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/display-code.png"
          alt="Next.js Logo"
          width={128}
          height={128}
          priority
        />
      </div>
    </>
  );
}
