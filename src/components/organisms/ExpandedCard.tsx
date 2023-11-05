import { useTranslation } from "react-i18next";
import { css } from "../../../styled-system/css";
import Xmark from "../../assets/icons/x-mark.svg?react";
import { Project } from "../../types/project";
import TechnologyIcon from "../atoms/TechnologyIcon";

type ExpandedCardProps = {
  project: Project;
  onClose: () => void;
  className?: string;
};

function ExpandedCard({ project, onClose }: ExpandedCardProps) {
  const { title, src, roles, description, challenges, results, technologies } =
    project;

  const { t } = useTranslation("projects");

  return (
    <>
      <button className={closingButton} onClick={() => onClose()}>
        <Xmark />
      </button>
      <div className={titleContainer}>
        <h2>{title}</h2>
        <img src={src} />
      </div>
      <div className={detailsContainer}>
        {description && <p>{t(description)}</p>}
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
      </div>
    </>
  );
}

export default ExpandedCard;

const detailsContainer = css({
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  gap: "16px",
  maxHeight: "calc(80vh - 120px)",

  "& p": {
    margin: "8px 0",
    maxWidth: "600px",
    textAlign: "justify",
  },
});

const detailsSection = css({
  width: "30vw",

  "& h3": {
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  "& ul": {
    width: "100%",
  },
});

const titleContainer = css({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "flex-end",
  gap: "32px",

  "& h2": {
    fontSize: "4rem",
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
  },

  "& li": {
    display: "inline-block",
  },
});
