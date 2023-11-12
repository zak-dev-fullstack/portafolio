import Link from "next/link";
import {
  GiAbstract065,
  GiAlienFire,
  GiAlienSkull,
  GiAncientSword,
} from "react-icons/gi";
import "./nav.css";

export default function NavZ() {
  return (
    <>
      <nav className="nav-z">
        <ul className="nav-header">
          <li className="nav-init">
            <Link className="nav-link-z" href="/portafolio">
              <span className="menu-icon-nav">
                <GiAbstract065 />
              </span>
              Portafolio
            </Link>
          </li>
          <li className="nav-skills">
            <Link className="nav-link-z" href="/skills">
              <span className="menu-icon-nav">
                <GiAlienFire />
              </span>
              Skills
            </Link>
          </li>
          <li className="nav-proyectos">
            <Link className="nav-link-z" href="/proyectos">
              <span className="menu-icon-nav">
                <GiAlienSkull />
              </span>
              Proyectos
            </Link>
          </li>
          <li className="nav-zakdev">
            <Link className="nav-link-z" href="/zakdev">
              <span className="menu-icon-nav">
                <GiAncientSword />
              </span>
              ZaK DeV
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
