import { useTranslation } from "react-i18next";
import { css } from "../../../styled-system/css";
import { forwardRef } from "react";
import Xmark from "../../assets/icons/x-mark.svg?react";
import { Project } from "../../types/project";
import TechnologyIcon from "../atoms/TechnologyIcon";

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
          <h2>{title}</h2>
          {src && <img src={src} />}
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
  maxWidth: "700px",
  textAlign: "justify",
  color: "greyGold.900",
  fontSize: "1.2rem",
  marginTop: "-32px",
});

const globalContainer = css({
  position: "relative",
  color: "greyGold.700",
  backgroundColor: "#e8e1ca58",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "16px",
  padding: "32px",
});

const detailsContainer = css({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "stretch",
  gap: "32px",
});

const detailsSection = css({
  width: "600px",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",

  "& h3": {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "greyGold.900",
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
    fontSize: "3rem",
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
  marginLeft: "auto",
  height: "75",
  width: "75px",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  color: "greyGold.500",

  "&:hover": {
    color: "greyGold.50",
  },

  "& svg": {
    width: "100%",
    height: "100%",
  },
});

const technoRow = css({
  display: "flex",
  flexFlow: "row nowrap",
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
