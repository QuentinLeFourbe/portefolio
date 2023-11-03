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
    role: "tech_lead",
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
  },
  {
    title: "Linxo paiement initiation",
    src: linxoLogo,
  },
  {
    title: "Mes menus",
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
  flexFlow: "row nowrap",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
});
