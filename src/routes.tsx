import CV from "./markdown/cv.mdx";
import CVEn from "./markdown/cv-en.mdx";
import CVDetail from "./markdown/cv-detailed.mdx";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import HomeTemplate from "./components/base/templates/HomeTemplate";
import Contact from "./pages/Contact";
import { createRef } from "react";
import { Navigate } from "react-router-dom";

export const porteFolioRoutes = [
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
  {
    path: "/",
    element: <Profile />,
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
  {
    path: "/cv-detail",
    element: <CVDetail />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
