import CV from "./markdown/cv.mdx";
import CVEn from "./markdown/cv-en.mdx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import HomeTemplate from "./components/templates/HomeTemplate";
import Contact from "./pages/Contact";
import Curriculum from "./pages/Curriculum";
import "./i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeTemplate />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "curriculum",
        element: <Curriculum />,
      },
    ],
  },
  {
    path: "/cv",
    element: <CV />,
  },
  {
    path: "/cv-en",
    element: <CVEn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
