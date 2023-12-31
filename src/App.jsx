import { Outlet } from "react-router-dom";
import Planets from "./components/3d/Planets";
import DownCv from "./components/download/DownCv";
import ZakdevLogo from "./components/logo/ZakdevLogo";
import BotonMenu from "./components/nav/BotonMenu";
import NavZ from "./components/nav/NavZ";
import Redes from "./components/redes/Redes";
function App() {
  return (
    <>
      <BotonMenu />
      <NavZ />
      <DownCv />
      <Planets />
      <ZakdevLogo />
      <Redes />
      <Outlet />
    </>
  );
}

export default App;
