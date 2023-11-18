import { useTranslation } from "react-i18next";
import { css } from "../../../../styled-system/css";
import { forwardRef } from "react";
import Xmark from "../../../assets/icons/x-mark.svg?react";
import { Project } from "../../../types/project";
import TechnologyIcon from "../Atoms/TechnologyIcon";

type ExpandedCardProps = {
  project: Project;
  onClose: () => void;
  className?: string;
};

const ExpandedCard = forwardRef<HTMLDivElement, ExpandedCardProps>(
  ({ project, onClose }, ref) => {
    const {
      title,
      src,
      roles,
      description,
      challenges,
      results,
      technologies,
    } = project;

    const { t } = useTranslation("projects");

    return (
      <div ref={ref} className={globalContainer}>
        <div className={titleContainer}>
          {src && <img src={src} />}
          <h2>{title}</h2>
          <button className={closingButton} onClick={() => onClose()}>
            <Xmark />
          </button>
        </div>
        {description && <p className={descriptionStyle}>{t(description)}</p>}
        {technologies && (
          <div className={detailsSection}>
            {technologies?.frontend && (
              <div className={technoRow}>
                <h3>{t("frontend")}</h3>
                <ul>
                  {technologies.frontend.map((technology) => (
                    <li>
                      <TechnologyIcon technology={technology} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {technologies?.backend && (
              <div className={technoRow}>
                <h3>{t("backend")}</h3>
                <ul>
                  {technologies.backend.map((technology) => (
                    <li>
                      <TechnologyIcon technology={technology} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <div className={detailsContainer}>
          {roles && (
            <div className={detailsSection}>
              <h3>{t("role")}</h3>
              <ul>
                {(t(roles, { returnObjects: true }) as string[]).map(
                  (role, index) => (
                    <li key={index}>{role}</li>
                  )
                )}
              </ul>
            </div>
          )}
          {challenges && (
            <div className={detailsSection}>
              <h3>{t("challenges")}</h3>
              <ul>
                {(t(challenges, { returnObjects: true }) as string[]).map(
                  (challenge, index) => (
                    <li key={index}>{challenge}</li>
                  )
                )}
              </ul>
            </div>
          )}
          {results && (
            <div className={detailsSection}>
              <h3>{t("results")}</h3>
              <ul>
                {(t(results, { returnObjects: true }) as string[]).map(
                  (result, index) => (
                    <li key={index}>{result}</li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default ExpandedCard;

const descriptionStyle = css({
  maxWidth: "800px",
  textAlign: "justify",
  color: "text.secondary",
  fontSize: "1.2rem",
});

const globalContainer = css({
  position: "relative",
  color: "text.primary",
  display: "flex",
  flexFlow: "column wrap",
  gap: "16px",
  padding: "32px",

  "&:before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "expandedCard.background",
    opacity: 0.3,
    zIndex: -1,
  },
});

const detailsContainer = css({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "stretch",
  gap: "32px",
});

const detailsSection = css({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",

  "& h3": {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "text.subtitle",
  },
  "& ul": {},

  "& li": {
    fontSize: "1rem",
    marginBottom: "6px",
  },
});

const titleContainer = css({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
  gap: "32px",

  "& h2": {
    fontSize: { base: "2rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
    color: "text.title",
    fontFamily: "title",
    fontWeight: "600",
  },

  "& img": {
    width: "75px",
    height: "75px",
    objectFit: "contain",
  },
});

const closingButton = css({
  position: "absolute",
  top: { base: "15px", lg: "5px" },
  right: { base: "25px", lg: "5px" },
  marginLeft: "auto",
  height: { base: "35px", sm: "35px" },
  width: { base: "35px", sm: "35px" },
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  color: "expandedCard.closeButton.base",

  "&:hover": {
    color: "expandedCard.closeButton.hover",
  },

  "& svg": {
    width: "100%",
    height: "100%",
  },
});

const technoRow = css({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "16px",

  "& ul": {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  "& li": {
    display: "inline-block",
  },
});
