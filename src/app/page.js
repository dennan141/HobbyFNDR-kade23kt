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
            I denna applikation kan man uppleva känslan av samhörighet på ett
            enkelt och digitalt vis. Internet är gjort för att sammankoppla
            människor men nu mer än någonsin håler folk avstånd till varandra.
            Genom att låta folk sammankopplas med sina fritidsintressen kan man
            enkelt sälja sina tjänster som lekman och generera inkomst.
          </p>
        </div>
      </div>
    </>
  );
}
