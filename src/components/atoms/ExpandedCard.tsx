import { useTranslation } from "react-i18next";
import { css } from "../../../styled-system/css";
import Xmark from "../../assets/icons/x-mark.svg?react";
import { Project } from "../../types/project";
import TechnologyIcon from "./TechnologyIcon";

type ExpandedCardProps = {
  project: Project;
  onClose: () => void;
  className?: string;
};

function ExpandedCard({ project, onClose }: ExpandedCardProps) {
  const { title, src, role, description, challenges, results, technologies } =
    project;

  const { t } = useTranslation("projects");

  return (
    <>
      <button className={closingButton} onClick={() => onClose()}>
        <Xmark className={icon} />
      </button>
      <div className={titleContainer}>
        <h2>{title}</h2>
        <img src={src} />
      </div>
      <div className={detailsContainer}>
        {role && (
          <p>
            <span className={bold}>Role:</span> {t(role)}
          </p>
        )}
        {description && <p className={paragraph}>{t(description)}</p>}
        {challenges && (
          <div>
            <h3 className={subtitle}>{t("challenges")}</h3>
            <p className={paragraph}>{t(challenges)}</p>
          </div>
        )}
        {results && (
          <div>
            <h3 className={subtitle}>{t("results")}</h3>
            <p className={paragraph}>{t(results)}</p>
          </div>
        )}
        {technologies && (
          <div className={technoContainer}>
            {technologies?.frontend && (
              <div className={"technology-panel"}>
                <h3>{t("frontend")}</h3>
                {technologies.frontend.map((technology) => (
                  <TechnologyIcon technology={technology} />
                ))}
              </div>
            )}
            {technologies?.backend && (
              <div className={"technology-panel"}>
                <h3>{t("backend")}</h3>
                {technologies.backend.map((technology) => (
                  <TechnologyIcon technology={technology} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ExpandedCard;

const detailsContainer = css({
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "16px",
  maxHeight: "calc(80vh - 120px)",
});

const titleContainer = css({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "flex-end",
  gap: "32px",

  "& h2": {
    fontSize: "5rem",
    color: "text.title",
    fontFamily: "title",
    fontWeight: "600",
  },

  "& img": {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
});

const closingButton = css({
  position: "absolute",
  top: "25px",
  right: "25px",
  height: "50px",
  width: "50px",
  backgroundColor: "greyGold.600",
  color: "greyGold.50",
  borderRadius: "50%",
  cursor: "pointer",

  "&:hover": {
    color: "greyGold.600",
    backgroundColor: "greyGold.400",
  },
});

const icon = css({
  width: "100%",
  height: "100%",
});

const paragraph = css({
  margin: "8px 0",
  maxWidth: "500px",
  textAlign: "justify",
});

const subtitle = css({
  fontSize: "2rem",
  fontWeight: "600",
});

const bold = css({
  fontWeight: "600",
});

const technoContainer = css({
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "space-between",
  gap: "32px",
  margin: "32px 0",

  "& h3": {
    fontSize: "2rem",
    fontWeight: "600",
  },

  "& .technology-panel": {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "16px",
  },
});
