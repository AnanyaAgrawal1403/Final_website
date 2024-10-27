import React from "react";

import styles from "./Asthetics1.module.css";
import { getImageUrl } from "../../utils";


export const Asthetics1 = () => {
  return (
    <section className= {styles.container}>
        <img
        src={getImageUrl("asthetics1/tamdi.png")}
        alt="Tamdi Chaamdi"
        className={styles.tamdi}
      />
      <img
        src={getImageUrl("asthetics1/kaajve.png")}
        alt="Kaajve"
        className={styles.kaajve}
      />
      <img
        src={getImageUrl("asthetics1/wtf.png")}
        alt="WTF"
        className={styles.wtf}
      />
    </section>
  );
};