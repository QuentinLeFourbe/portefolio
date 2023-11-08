import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n";
import { appRoutes } from "./routes";

const router = createBrowserRouter(appRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
