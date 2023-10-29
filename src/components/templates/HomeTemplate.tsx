import { ComponentProps, useEffect, useState } from "react";
import { css } from "../../../styled-system/css";
import Navbar from "../organisms/Navbar";
import MainContainer from "../organisms/MainContainer";
import { Outlet } from "react-router-dom";

type HomeTemplateProps = ComponentProps<"div">;

function HomeTemplate({ children, ...props }: HomeTemplateProps) {
  const [colorScheme, setColorScheme] = useState("light"); // Par défaut, le mode clair

  const switchMode = () => {
    if (colorScheme === "light") {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Vérifie si la préférence de l'utilisateur est sombre au chargement de la page
    if (mediaQuery.matches) {
      setColorScheme("dark");
    }

    // Écoute les changements de préférence de l'utilisateur
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setColorScheme("dark");
      } else {
        setColorScheme("light");
      }
    };

    mediaQuery.addListener(handleChange);

    // Nettoie l'écouteur lorsque le composant est démonté
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  return (
    <div {...props} className={backgroundStyle}>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
}

export default HomeTemplate;

const backgroundStyle = css({
  position: "relative",
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "transparent",
  display: "flex",

  fontFamily: "body",

  "&:before": {
    zIndex: -1,
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "#e9d9d9",
    backgroundImage: "url(hideout.svg)",
    backgroundRepeat: "repeat",
    backgroundSize: "200px 200px",
    filter:
      // "invert(93%) sepia(5%) saturate(6880%) hue-rotate(304deg) brightness(132%) contrast(104%)",
      "  invert(92%) sepia(5%) saturate(3076%) hue-rotate(347deg) brightness(92%) contrast(106%)",
    // "invert(100%) sepia(2%) saturate(0%) hue-rotate(328deg) brightness(114%) contrast(92%)",
    opacity: 0.2,
  },

  "&:after": {
    zIndex: -2,
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "background.primary",
    opacity: 0.7,
  },
});