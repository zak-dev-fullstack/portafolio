/* eslint-disable no-unused-vars */

import { useState } from "react";
import "./p.css";
import imgl from "../../../assets/gifz.gif";


// Datos del portafolio
const portafolioData = [
  { title: "Inteligencia Artificial", code: "GitHub" },
  { title: "Blockchain", code: "GitHub" },
  { title: "E-commerce", code: "GitHub" },
  { title: "Admin Place", code: "GitHub" },
  { title: "Mobile Apps", code: "GitHub" },
  { title: "Landing Web", code: "GitHub" },
];

// Componente PortafolioZ
function PortafolioZ() {
  // Estado para controlar el enlace
  const [githubLink, setGithubLink] = useState(
    "https://github.com/zak-dev-fullstack"
  );
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (index) => {
    setFlippedCard(index);
  };

  const handleCardMouseLeave = () => {
    setFlippedCard(null);
  };

  return (
<>
<section className="section-portafolio">
      {portafolioData.map((project, index) => (
        <div key={index} className="card-proyecto ">
          <div className="img-container">
            <img src={imgl} loading="lazy"  alt={project.title} className="img-proyecto" draggable="false" width="100" height="100"/>
          </div>
          <div className="button-container">
            <button
              className="boton-titulo"
              onClick={() => (window.location.href = githubLink)}
            >
              {project.title}
            </button>
            <a  href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="boton-codigo">GitHub</button>
            </a>
          </div>
        </div>
      ))}
    </section></>
  );
}

export default PortafolioZ;
