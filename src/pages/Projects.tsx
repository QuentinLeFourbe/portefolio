import React, { useState } from "react";
import Card from "../components/atoms/Card";
import { css } from "../../styled-system/css";
import amcoeurLogo from "../assets/logos/amcoeur.jpeg";
import linxoLogo from "../assets/logos/linxo.png";
import { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "Amcoeur",
    src: amcoeurLogo,
    description: "amcoeur_description",
    roles: "amcoeur_roles",
    challenges: "amcoeur_challenges",
    results: "amcoeur_results",
    technologies: {
      backend: ["Node.js", "TypeScript", "Express.js"],
      frontend: ["React", "TypeScript", "Panda-CSS", "Vite.js"],
    },
  },

  {
    title: "Linxo accounts aggregation",
    src: linxoLogo,
    description: "ais_description",
    roles: "ais_roles",
    challenges: "ais_challenges",
    results: "ais_results",
    technologies: {
      backend: ["Node.js", "JavaScript", "Express.js", "Redis"],
      frontend: ["React", "JavaScript", "Redux", "Webpack"],
    },
  },
  {
    title: "Linxo paiement initiation",
    src: linxoLogo,
    description: "pis_description",
    roles: "pis_roles",
    challenges: "pis_challenges",
    results: "pis_results",
    technologies: {
      backend: ["Node.js", "JavaScript", "Express.js"],
      frontend: ["React", "JavaScript", "Redux", "Webpack"],
    },
  },
  {
    title: "Mes menus",
    description: "menus_description",
    roles: "menus_roles",
    challenges: "menus_challenges",
    results: "menus_results",
    technologies: {
      backend: ["Node.js", "TypeScript", "Express.js"],
      frontend: ["React", "TypeScript", "Panda-CSS", "Vite.js"],
    },
  },
];

function Projects() {
  const [openedProjectIndex, setOpenedProjectIndex] = useState<number | null>(
    null
  );

  const closeCard = () => {
    setOpenedProjectIndex(null);
  };
  console.log(openedProjectIndex);

  const openCard = (index: number) => {
    console.log("opening card");
    setOpenedProjectIndex(index);
  };

  return (
    <div className={container}>
      {projects.map(
        (project, index) =>
          (openedProjectIndex === null || openedProjectIndex === index) && (
            <Card
              project={project}
              key={project.title}
              isOpen={openedProjectIndex === index}
              onOpen={() => openCard(index)}
              onClose={() => closeCard()}
            />
          )
      )}
    </div>
  );
}

export default Projects;

const container = css({
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  gap: "64px",
});
