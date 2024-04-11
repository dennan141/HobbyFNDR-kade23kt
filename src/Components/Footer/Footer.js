import styles from "./Footer.module.css"
import Image from "next/image";

export default function Footer() {
  
  
  
    return (
    <div className={styles.footer}>

      <p>Dennis Karlsson's Hobby hittar applikation 😁</p>
      <div>
        <Image
          src="/PersonligLogga.png"
          alt="Kade23Kt personlig logga"
          width={125}
          height={75}
          priority
        />
      </div>
    </div>
  );
}
