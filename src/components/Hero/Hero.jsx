import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello,<br></br> I am Dhairyasheel</h1>
        
      </div>
      <img
        src={getImageUrl("hero/dhairya.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
