import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "../Components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Hobbyfndr.png"
          alt="Hobby fndr logga"
          width={250}
          height={250}
          priority
        />
      </div>

      
    </>
  );
}
