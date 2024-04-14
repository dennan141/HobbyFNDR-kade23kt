import Image from "next/image";
import styles from "./profile.module.css";

export default function ProfilePage() {
  return (
    <>
      <h2>Profil sida</h2>
      <div className={styles.container}>
        <Image
          src="/Mina-intressen.png"
          alt="Profil exmaple"
          width={900}
          height={468}
          priority
        />

        <div className={styles.bread}>
          <h3>Profil information</h3>
          <p>
            Enligt bilden ovan ser man en snabb överblick på att det viktigaste
            på en persons profil-sida är att visa vem man är, vad man redan kan
            och vad man är mer intresserad av att lära sig. Eftersom konceptet
            handlar om att sammankoppla de människor som har ett fritidsintresse
            med de som inte har ett så blir det viktigt att snabbt läsa av och
            kunna hitta andra människor med liknande intressen eller folk som är
            öppna för att lära sig.
            <br></br>
            <br></br>
            När personer snabbt kan läsa av vad andra har för intressen kan det
            skapa en nyfikenhet på vad det är och vilja lära sig mer. Sedan kan
            personer ta kontakt med varandra via kontakt fältet som är en
            meddelande-tjänst som erbjuds vi HobbyFNDR.
          </p>
        </div>
      </div>
    </>
  );
}
