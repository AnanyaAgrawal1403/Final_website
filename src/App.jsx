import styles from "./App.module.css";

import { Contact } from "./components/Contact/Contact";

import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Description } from "./components/Description/Description";
import { Films } from "./components/Films/Films";
import { Asthetics1 } from "./components/Asthetics1/Asthetics1";
import { Gyaan1 } from "./components/Gyaan1/Gyaan1";
import { Asthetics2 } from "./components/Asthetics2/Asthetics2";
import { Gyaan2 } from "./components/Gyaan2/Gyaan2";
import { Experience } from "./components/Experience/Experience";






function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Description/>
      <Projects />
      <Films/>
      <Experience/>
      <Asthetics1/>
      <Gyaan1/>
      <Asthetics2/>
      <Gyaan2/>
      <Contact />
    </div>
  );
}

export default App;
