import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
      <img
        src={getImageUrl("nav/dhairoba.png")}
        alt="brand"
        className={styles.brandimg}
      />
        <p className={styles.Scroll}> Thanks for Scrolling!</p>
      </div>
      <ul className={styles.links}>

      <li className={styles.linkedin}>
        <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/dhairyasheel-pawar-a544721b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a>
        </li>


        <li className={styles.insta}>
          <img src={getImageUrl("contact/instagram.png")} alt="Github icon" />
          <a href="https://www.instagram.com/dhairoba/profilecard/?igsh=ZTYzcnNtZGtkb2l0">Instagram</a>
        </li>

        <li className={styles.email}>
          <img src={getImageUrl("contact/email.png")} alt="Email icon" />
          <a href="dhawal.s.pawar@gmail.com">Gmail</a>
        </li>
        
        
      </ul>
    </footer>
  );
};
