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

      <p>
        Genom att låta användare skicka meddelanden på sidan istället för privat
        kan man enklare se till att lagar och regler följs. Att låta betalning
        ske via sidan gör det också säkare för användare att bevisa vilka summor
        som kommit lverens om ifall parter har skiljda åsikter.
        <br />
        <br />
        Det är en säkerhet och en trygghet som inte bör vara allt för svår att
        implementera.
      </p>

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
