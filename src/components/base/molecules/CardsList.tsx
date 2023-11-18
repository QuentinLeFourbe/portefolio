import { forwardRef } from "react";
import Card from "../Atoms/Card";
import { Project } from "../../../types/project";
import { css } from "../../../../styled-system/css";

type CardsListProps = {
  projects: Project[];
  onClick: (project: Project) => void;
};

const CardsList = forwardRef<HTMLDivElement, CardsListProps>(
  ({ projects, onClick }, ref) => {
    return (
      <div className={container} ref={ref}>
        {projects.map((project) => (
          <Card
            key={project.title}
            logoSrc={project.src}
            onClick={() => onClick(project)}
          >
            {project.title}
          </Card>
        ))}
      </div>
    );
  }
);

export default CardsList;

const container = css({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  gap: "64px",
  margin: "32px 0",
});
