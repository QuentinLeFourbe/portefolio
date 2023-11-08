import CV from "./markdown/cv.mdx";
import CVEn from "./markdown/cv-en.mdx";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import HomeTemplate from "./components/templates/HomeTemplate";
import Contact from "./pages/Contact";
import { createRef } from "react";

export const porteFolioRoutes = [
  {
    path: "/",
    element: <Profile />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/projects",
    element: <Projects />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/contact",
    element: <Contact />,
    nodeRef: createRef<HTMLDivElement>(),
  },
];

export const appRoutes = [
  {
    path: "/",
    element: <HomeTemplate />,
    children: porteFolioRoutes.map((route) => ({
      path: route.path,
      element: route.element,
    })),
  },
  {
    path: "/cv",
    element: <CV />,
  },
  {
    path: "/cv-en",
    element: <CVEn />,
  },
];
