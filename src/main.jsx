import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/responsive/Querys.css";
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
import { HashRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <ScrollIndicator />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<App />}
            errorElement={<ErrorPage />}
          >
            <Route path="portafolio" element={<Portafolio />} />
            <Route path="skills" element={<Skills />} />
            <Route path="proyectos" element={<Proyectos />} />
            <Route path="zakdev" element={<ZaKDeV />} />
          </Route>
        </Routes>
      </Router>
      <HeaderZD />
      <FooterZD />
      <Particless />
    </React.StrictMode>
  </>
);
