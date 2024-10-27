import React from "react";

import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Achievements</div>
       <img
        src={getImageUrl("experience/achievements.png")}
        alt="Achievements"
        className={styles.achievements}
  />
    </div>
  );
};
