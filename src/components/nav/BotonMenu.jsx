'use client';
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import "./menu.css";
import {
  GiAbstract065,
  GiAlienFire,
  GiAlienSkull,
  GiAncientSword,
} from "react-icons/gi";
import Link from "next/link";

function BotonMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconX, setIsIconX] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsIconX(!isIconX);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsIconX(false);
  };

  return (
    <div className="menu-container">
      <button onClick={toggleMenu} className="button-z-menu">
        {isIconX ? (
          <AiOutlineClose className="icon-x" />
        ) : (
          <CgMenu className="icon-menu" />
        )}
      </button>
      {isMenuOpen && (
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link className="navlink-item" href="/portafolio" onClick={closeMenu}>
                <span className="menu-icon">
                  <GiAbstract065 />
                </span>
                Portafolio
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="navlink-item"
                href="/skills"
                onClick={closeMenu}
              >
                <span className="menu-icon">
                  <GiAlienFire />
                </span>
                Skills
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="navlink-item"
                href="/proyectos"
                onClick={closeMenu}
              >
                <span className="menu-icon">
                  <GiAlienSkull />
                </span>
                Proyectos
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="navlink-item"
                href="/zakdev"
                onClick={closeMenu}
              >
                <span className="menu-icon">
                  <GiAncientSword />
                </span>
                ZaK DeV
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default BotonMenu;
