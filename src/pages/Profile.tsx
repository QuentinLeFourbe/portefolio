import { css, cx } from "../../styled-system/css";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation("profile");

  return (
    <div className={cx(containerStyle)}>
      <h1 className={titleStyle}>{t("greet")}</h1>
      <p className={textStyle}>{t("presentation1")}</p>
      <p className={textStyle}>{t("presentation2")}</p>
    </div>
  );
}

export default Profile;

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  padding: {
    base: "0 1rem 10% 1rem",
    lg: "8% 10% 8% 10%",
  },
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
