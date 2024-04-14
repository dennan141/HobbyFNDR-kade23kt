import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "../Components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/computer-isometric-.jpg"
          alt="Hobby fndr logga"
          width={400}
          height={300}
          priority
        />
        <div>
          <h2>HobbyFndr</h2>
          <p className={styles.description}>
            HobbyFNDR handlar om att sammankoppla folk med olika starka
            fritidsintressen med folk som inte vet hur man gör deras intresse
            och vill lära sig. Alternativt anställda någon med ett
            fritidsintressen.
            <br />
            <br />
            Genom att anställa någon med fritidsintresse kring exempelvis,
            trädgård och plantering kan man få en fint inredd trädgård av någon
            som besitter expert-kunskaper för en bråkdel av priset av vad en
            annars självutnämnd trädgårdsmästare tar betalt.
            <br />
            <br />
            I denna webbapplikation kan man uppleva känslan av samhörighet på
            ett enkelt och digitalt vis. Internet är gjort för att sammankoppla
            människor och istället för att endast mötas digitalt låter HobbyFNDr
            folk sätta upp möten med andra som delar ens intresse eller vill
            lära sig. Spela brädspel har aldrig varit lättare än att lägga ut en
            annons på HobbyFNDR! Genom att låta folk sammankopplas med sina
            fritidsintressen kan man enkelt sälja sina tjänster som lekman och
            generera inkomst.
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
