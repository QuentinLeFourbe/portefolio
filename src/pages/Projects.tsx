import { useRef, useState } from "react";
import { css, cx } from "../../styled-system/css";
import amcoeurLogo from "../assets/logos/amcoeur.jpeg";
import linxoLogo from "../assets/logos/linxo.png";
import { Project } from "../types/project";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import ExpandedCard from "../components/organisms/ExpandedCard";
import CardsList from "../components/molecules/CardsList";

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
      frontend: ["React", "JavaScript", "Webpack"],
      backend: ["Node.js", "JavaScript", "Express.js", "MongoDB"],
    },
  },
];

function Projects() {
  const [openedProject, setOpenedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const openedProjectRef = useRef<HTMLDivElement>(null);
  const nodeRef = openedProject ? openedProjectRef : projectsRef;

  const closeCard = () => {
    setOpenedProject(null);
  };

  const openCard = (project: Project) => {
    setOpenedProject(project);
  };

  return (
    <div className={cx(container)}>
      <SwitchTransition>
        <CSSTransition
          classNames="card"
          timeout={200}
          key={openedProject ? "openProject" : "projects"}
          nodeRef={nodeRef}
        >
          {openedProject ? (
            <ExpandedCard
              project={openedProject}
              onClose={() => closeCard()}
              ref={nodeRef}
            />
          ) : (
            <CardsList projects={projects} onClick={openCard} ref={nodeRef} />
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default Projects;

const container = css({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "1rem",

  "& .card-enter": {
    opacity: "0",
    transition: "opacity 300ms ease-in-out",
  },
  "& .card-enter-active": {
    opacity: "1",
    transition: "opacity 300ms ease-in-out",
  },
  "& .card-exit": {
    opacity: "0",
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
