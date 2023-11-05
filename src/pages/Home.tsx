import { useEffect, useState } from "react";

import HomeTemplate from "../components/templates/HomeTemplate";
import Navbar from "../components/organisms/Navbar";
import MainContainer from "../components/organisms/MainContainer";

type HomeProps = {
  children?: React.ReactNode;
};

function Home({ children }: HomeProps) {
  const [colorScheme, setColorScheme] = useState("light"); // Par défaut, le mode clair

  // const switchMode = () => {
  //   if (colorScheme === "light") {
  //     setColorScheme("dark");
  //   } else {
  //     setColorScheme("light");
  //   }
  // };

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
    <HomeTemplate data-color-mode={colorScheme}>
      <Navbar />
      <MainContainer>{children}</MainContainer>
    </HomeTemplate>
  );
}

export default Home;
