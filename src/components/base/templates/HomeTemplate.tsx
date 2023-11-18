import { ComponentProps, useEffect, useState } from "react";
import { css, cx } from "../../../../styled-system/css";
import Navbar from "../organisms/Navbar";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useOutlet, useLocation } from "react-router-dom";
import { porteFolioRoutes } from "../../../routes";
import DarkModeButton from "../Atoms/DarkModeButton";

type HomeTemplateProps = ComponentProps<"div">;

function HomeTemplate({ ...props }: HomeTemplateProps) {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light"); // Par défaut, le mode clair
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    porteFolioRoutes.find((route) => route.path === location.pathname) || {};

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
    <div
      {...props}
      className={cx(
        backgroundStyle,
        colorScheme === "dark" ? darkPattern : lightPattern
      )}
      data-color-mode={colorScheme}
    >
      <DarkModeButton
        mode={colorScheme}
        onClick={switchMode}
        className={darkModeButtonStyle}
      />
      <Navbar />
      <SwitchTransition>
        <CSSTransition
          timeout={200}
          key={location.pathname}
          nodeRef={nodeRef}
          in={true}
          appear
          classNames={"pages"}
        >
          <div ref={nodeRef} className={contentContainer}>
            {currentOutlet}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default HomeTemplate;

const contentContainer = css({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column nowrap",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
});

const backgroundStyle = css({
  position: "relative",
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontFamily: "body",
  padding: { base: "0", lg: "10vh 5vw 10vh 200px" },

  "&:after": {
    zIndex: -2,
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "background.primary",
    // opacity: 0.7,
  },

  "& .pages-enter": {
    opacity: 0,
  },
  "& .pages-enter-active": {
    opacity: 1,
  },
  "& .pages-exit": {
    opacity: 1,
  },
  "& .pages-exit-active": {
    opacity: 0,
  },

  "& .pages-appear": {
    opacity: 0,
  },
  "& .pages-appear-active": {
    opacity: 1,
  },
});

const darkPattern = css({
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
      "   invert(76%) sepia(58%) saturate(3002%) hue-rotate(2deg) brightness(108%) contrast(105%)",
    opacity: 0.05,
  },
});

const lightPattern = css({
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
});

const darkModeButtonStyle = css({
  position: "fixed",
  top: { base: "", lg: "32px" },
  bottom: { base: "32px", lg: "" },
  right: "32px",
  zIndex: "100",
});
