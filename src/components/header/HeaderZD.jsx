'use client'
import DownCv from "../download/DownCv";
import BotonMenu from "../nav/BotonMenu";
import NavZ from "../nav/NavZ";
import "./header.css";
function HeaderZD() {
  return (
    <>
      <div className="header-z">
        <BotonMenu />
        <NavZ />
        <DownCv />
      </div>
    </>
  );
}

export default HeaderZD;
