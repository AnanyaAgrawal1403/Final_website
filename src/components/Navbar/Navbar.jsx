import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <img
        src={getImageUrl("nav/dhairoba.png")}
        alt="brand"
        className={styles.brandimg}
      />

      {/* Hamburger Icon */}
      <div className={styles.menuBtn} onClick={toggleMenu}>
        {menuOpen ? (
          <span className={styles.closeIcon}>&times;</span> /* Close Icon */
        ) : (
          <>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </>
        )}
      </div>

      {/* Menu Items */}
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        <ul
          className={styles.menuItems}
          onClick={() => setMenuOpen(false)} // Close menu on click
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
            <a href="https://drive.google.com/file/d/1u4zcsy1Cmwi1O0AgXSuhDEVYyJ4whbDS/view" target="blank">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
