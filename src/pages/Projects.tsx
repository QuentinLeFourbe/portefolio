import { RefObject, createRef, useState } from "react";
import Card from "../components/atoms/Card";
import { css, cx } from "../../styled-system/css";
import amcoeurLogo from "../assets/logos/amcoeur.jpeg";
import linxoLogo from "../assets/logos/linxo.png";
import { Project } from "../types/project";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type ProjectElement = Project & {
  nodeRef: RefObject<HTMLDivElement>;
};

const projects: ProjectElement[] = [
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
    nodeRef: createRef<HTMLDivElement>(),
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
    nodeRef: createRef<HTMLDivElement>(),
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
    nodeRef: createRef<HTMLDivElement>(),
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
    nodeRef: createRef<HTMLDivElement>(),
  },
];

function Projects() {
  const [openedProjectIndex, setOpenedProjectIndex] = useState<number | null>(
    null
  );
  const [displayedProjectIndex, setDisplayedProjectsIndex] = useState<number[]>(
    projects.map((_, index) => index)
  );

  const closeCard = () => {
    setDisplayedProjectsIndex(projects.map((_, index) => index));
    setOpenedProjectIndex(null);
  };

  const openCard = (index: number) => {
    setDisplayedProjectsIndex([index]);
    setOpenedProjectIndex(index);
  };

  console.log("displayedProjectIndex", displayedProjectIndex);

  return (
    <div className={cx(container)}>
      {projects.map((project, index) => (
        <CSSTransition
          classNames="card"
          timeout={1000}
          key={project.title}
          nodeRef={project.nodeRef}
          in={displayedProjectIndex.includes(index)}
        >
          <div ref={project.nodeRef}>
            <Card
              project={project}
              key={project.title}
              isOpen={openedProjectIndex === index}
              onOpen={() => openCard(index)}
              onClose={() => closeCard()}
            />
          </div>
        </CSSTransition>
      ))}
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

  "& .card-enter": {
    opacity: "0",
    transition: "opacity 300ms ease-in-out",
  },
  "& .card-enter-active": {
    opacity: "1",
    transition: "opacity 300ms ease-in-out",
  },
  "& .card-exit": {
    opacity: "1",
    transition: "opacity 300ms ease-in-out",
  },
  "& .card-exit-active": {
    opacity: "0",
    transition: "opacity 300ms ease-in-out",
  },
  "& .card-exit-done": {
    opacity: "0",
    transition: "opacity 300ms ease-in-out",
    pointerEvents: "none",
  },
});
