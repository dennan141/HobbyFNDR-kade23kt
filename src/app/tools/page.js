import Link from "next/link";
import styles from "./tools.module.css";

export default function ToolsPage() {
  return (
    <>
      <h1>Tools</h1>

      <div>
        <b>Calculator: </b>
        <Link href="/tools/Calculator" className={styles.toolsLink}>
          Test the Calculator
        </Link>
      </div>

      <div>
        <b>Dice: </b>
        <Link href="/tools/Dice" className={styles.toolsLink}>
        Test the Dice
        </Link>
      </div>
    </>
  );
}
