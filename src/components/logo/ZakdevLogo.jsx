import Logozakdev from "./logozakdev.webp";
import "./logo.css";
import { Link } from "react-router-dom";

function ZakdevLogo() {
  return (
    <>
      <Link to={`/`}>
        <img src={Logozakdev} className="zakdev-logo" alt="zak-dev-logo" />
      </Link>
    </>
  );
}

export default ZakdevLogo;
