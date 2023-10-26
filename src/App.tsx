import CV from "./markdown/cv.mdx";
import CVEn from "./markdown/cv-en.mdx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CV />,
  },
  {
    path: "/en",
    element: <CVEn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
