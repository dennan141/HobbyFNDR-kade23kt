import Image from "next/image";
import styles from "./messages.module.css";

export default function ProfilePage() {
  return (
    <>
      <Image
        className={styles.logo}
        src="/mightytext.jpg"
        alt="Hobby fndr logga"
        width={400}
        height={300}
        priority
      />

      <h2>Meddelanden sida</h2>
    </>
  );
}
