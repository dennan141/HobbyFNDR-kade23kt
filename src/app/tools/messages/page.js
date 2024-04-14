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
      <h2>Exempel konversation</h2>

      {/* // * Exemepel konversation */}
      
      <div className={styles.messageContainer}>
        <p className={styles.rightMessage + " " + styles.message}>
          Hej! Vill du ses och lära mig fiska? 😁❤️
        </p>

        <p className={styles.leftMessage + " " + styles.message}>
          Absolut! är 300kr okej för dig?
        </p>
        <p className={styles.rightMessage + " " + styles.message}>
          Ja, det är okej 💵
        </p>

        <p className={styles.leftMessage + " " + styles.message}>
          Bra då ses vi på söndag så lär jag dig 👌
        </p>
        <p className={styles.rightMessage + " " + styles.message}>
          Ska jag ta med något eller har du allt?
        </p>

        <p className={styles.leftMessage + " " + styles.message}>
          Allt utom fisken, den får du fånga själv 😉
        </p>
      </div>
    </>
  );
}
