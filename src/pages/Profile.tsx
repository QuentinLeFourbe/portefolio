import { css, cx } from "../../styled-system/css";
import { useTranslation } from "react-i18next";
import TextCard from "../components/base/atoms/TextCard";

function Profile() {
  const { t } = useTranslation("profile");

  return (
    <div className={cx(containerStyle)}>
      <h1 className={titleStyle}>{t("greet")}</h1>
      {(t("presentation", { returnObjects: true }) as string[]).map(
        (presentation, index) => (
          <p key={index} className={textStyle}>
            {presentation}
          </p>
        )
      )}
      <div className={cardContainer}>
        <TextCard title={t("front_expert")} icon="react">
          {t("front_text")}
        </TextCard>
        <TextCard title={t("back_expert")} icon="cog">
          {t("back_text")}
        </TextCard>
        <TextCard title={t("my_strengths")} icon="sparkles">
          {t("strengths_text")}
        </TextCard>
        <TextCard title={t("powerlifting")} icon="heart">
          {t("powerlifting_text")}
        </TextCard>
      </div>
    </div>
  );
}

export default Profile;

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100%",
  padding: {
    base: "0 1rem 10% 1rem",
    lg: "5% 0% 5% 0%",
  },
  width: "100%",
});

const titleStyle = css({
  fontSize: { base: "4rem", lg: "6rem" },
  fontFamily: "title",
  lineHeight: "6.5rem",
  color: "text.title",
});

const textStyle = css({
  fontSize: "1.2rem",
  maxWidth: "800px",
  margin: "1rem 0",
  lineHeight: "2rem",
  color: "text.primary",
});

const cardContainer = css({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-around",
  gap: "16px",
  width: "100%",
  margin: "1rem 0",
});
