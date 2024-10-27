import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import projects2 from "../../data/projects2.json";
import projects3 from "../../data/projects3.json";
import projects4 from "../../data/projects4.json";
import projects5 from "../../data/projects5.json";
import projects6 from "../../data/projects6.json";
import { ProjectCard2 } from "./ProjectCard2";
import { ProjectCard3 } from "./ProjectCard3";

export const Projects = () => {
  return (
    
    <section className={styles.container} id="projects">
    <h2 className={styles.title}>Projects</h2>
     
    <div className={styles.projects}>
      {projects.map((project, id) => {
        return <ProjectCard2 key={id} project={project} />;
      }
      )}
      {projects2.map((project, id) => {
        return <ProjectCard3 key={id} project={project} />;
      }
      )}
      {projects3.map((project, id) => {
        return <ProjectCard2 key={id} project={project} />;
      }
      )}
      {projects4.map((project, id) => {
        return <ProjectCard3 key={id} project={project} />;
      }
      )}
      {projects5.map((project, id) => {
        return <ProjectCard2 key={id} project={project} />;
      }
      )}
      {projects6.map((project, id) => {
        return <ProjectCard3 key={id} project={project} />;
      }
      )}
    </div>
  </section>
      
  
  
  );
};


