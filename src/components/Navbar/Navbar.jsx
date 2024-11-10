import React, { useState } from "react";
import styles from "./Navbar.module.css";

import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <nav className={styles.navbar}>
      <img
        src={getImageUrl("nav/dhairoba.png")}
        alt="brand"
        className={styles.brandimg}
      />
      
      
      <div className={styles.menu}>
        
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#films">Films</a>
          </li>
          
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="resume">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
