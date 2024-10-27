import React from "react";

import styles from "./FilmCard2.module.css";
import { getImageUrl } from "../../utils";

export const FilmCard2 = ({
  project: { title, imageSrc, description, date, duration,link},
}) => {
  console.log('Dev>>> Film Card', link)
  return (
    <div className={styles.container}>
        <div className = {styles.picture}> 
        <a href = {link} target="_blank" rel="noopener noreferrer">
        <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      </a>
        </div>

    <div className = {styles.content}>
        <div className = {styles.upper}>
        <div className = {styles.lineOne} > 
       <h1 className = {styles.title} >{title}</h1>
       <h2 className = {styles.dates} >{date}</h2>
       </div>
       <h2 className = {styles.duration}>
        {duration}
       </h2>
        </div>
       
       <h3 className = {styles.description}>
        {description}
       </h3>
    </div>

    </div>

  );
};


