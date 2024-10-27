import React from "react";

import styles from "./Asthetics2.module.css";
import { getImageUrl } from "../../utils";


export const Asthetics2 = () => {
  return (
    <section className= {styles.container}>
        <img
        src={getImageUrl("asthetics2/sky.png")}
        alt="Sky"
        className={styles.sky}
  />
      <div className="twoimages">
      <img
        src={getImageUrl("asthetics2/sunflower.png")}
        alt="Sunflower"
        className={styles.sunflower}
      />
       <img
        src={getImageUrl("asthetics2/matka.png")}
        alt="Matka"
        className={styles.matka}
      />

      </div>

      <img
        src={getImageUrl("asthetics2/mandir.png")}
        alt="Mandir"
        className={styles.mandir}
  />
    </section>
  );
};