import React from "react";
import { css } from "../../styled-system/css";

function Profile() {
  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>Bonjour !</h1>
      <p className={textStyle}>
        Je m'appelle Quentin GARCIA, je suis un développeur full-stack passionné
        par les technologies, expert en React, Node.js et TypeScript. Avec une
        expérience chez Linxo en tant que développeur web avant de devenir tech
        lead, je m'efforce constamment de rester à la pointe des bonnes
        pratiques et des dernières nouveautés. Mon engagement envers le code
        propre et robuste est au cœur de mon travail.
      </p>
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
