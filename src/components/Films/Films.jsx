import React from "react";

import styles from "./Films.module.css";

import filmsa from "../../data/filmsa.json";
import filmsb from "../../data/filmsb.json";
import filmsc from "../../data/filmsc.json";
import { FilmCard3 } from "./FilmCard3";
import { FilmCard2 } from "./FilmCard2";


export const Films = () => {
  return (
    
    <section className={styles.container} id="films">
      <div className = {styles.cont}>
      <h2 className={styles.title}>Films</h2>
     
     <div className={styles.projects}>
       
       
       {filmsa.map((project, id) => {
         return <FilmCard2 key={id} project={project} />;
       }
       )}
       {filmsb.map((project, id) => {
         return <FilmCard3 key={id} project={project} />;
       }
       )}
       {filmsc.map((project, id) => {
         return <FilmCard2 key={id} project={project} />;
       }
       )}
      
     </div>
      </div>
    
    
    
  </section>
      
  
  
  );
};



