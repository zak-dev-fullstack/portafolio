import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/responsive/Querys.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error/error-page";
import Skills from "./pages/Skills";
import Proyectos from "./pages/Proyectos";
import ZaKDeV from "./pages/ZaKDeV";

import { ScrollIndicator } from "./components/zdscroll/ScrollIndicator";
import App from "./App";
import Particless from "./components/particles/Particless";
import HeaderZD from "./components/header/HeaderZD";
import FooterZD from "./components/footer/FooterZD";
import Portafolio from "./pages/Portafolio";

const router = createBrowserRouter([
  {
    path: "/portafolio/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "portafolio/:portafolioId",
        element: <Portafolio />,
      },
      {
        path: "skills/:skillsId",
        element: <Skills />,
      },
      {
        path: "proyectos/:proyectosId",
        element: <Proyectos />,
      },
      { path: "zakdev/:zakdevId", element: <ZaKDeV /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollIndicator />
    <RouterProvider router={router} />
    <HeaderZD />
    <FooterZD />
    <Particless />
  </React.StrictMode>
);
