import Link from "next/link";
import styles from "./tools.module.css";

export default function ToolsPage() {
  return (
    <>
      <h1>Tools</h1>

      <div>
        <b>Profil: </b>
        <Link href="/tools/profile" className={styles.toolsLink}>
          Kika på hur profiler kan se ut
        </Link>
      </div>

      <div>
        <b>Annonser: </b>
        <Link href="/tools/posts" className={styles.toolsLink}>
          Testa några annonser
        </Link>
      </div>

      <div>
        <b>Meddelanden: </b>
        <Link href="/tools/messages" className={styles.toolsLink}>
          Spana in meddelanden
        </Link>
      </div>
    </>
  );
}
