import React from "react";
import { css } from "../../styled-system/css";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation("profile");

  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>{t("greet")}</h1>
      <p className={textStyle}>{t("presentation")}</p>
    </div>
  );
}

export default Profile;

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  padding: "8% 10% 8% 15%",
});

const titleStyle = css({
  fontSize: "6rem",
  fontFamily: "title",
  lineHeight: "6.5rem",
  color: "text.title",
});

const textStyle = css({
  fontSize: "1.2rem",
  maxWidth: "800px",
  padding: "1rem",
  lineHeight: "2rem",
  color: "text.primary",
});
