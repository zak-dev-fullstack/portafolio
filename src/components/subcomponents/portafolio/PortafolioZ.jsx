import "./p.css";
import imgl from "../../../assets/gifz.gif";

// Datos del portafolio
const portafolioData = [
  { title: "Inteligencia Artificial", code: "https://github.com/zak-dev-fullstack", link: "https://zak-dev-fullstack.github.io/inteligencia-artificial/" },
  { title: "Blockchain", code: "https://github.com/zak-dev-fullstack", link: "https://zak-dev-fullstack.github.io/blockchain/" },
  { title: "E-commerce", code: "https://github.com/zak-dev-fullstack", link: "https://zak-dev-fullstack.github.io/e-commerce/" },
  { title: "Admin Place", code: "https://github.com/zak-dev-fullstack", link: "https://zak-dev-fullstack.github.io/admin-place/" },
  { title: "Mobile Apps", code: "https://github.com/zak-dev-fullstack", link: "https://zak-dev-fullstack.github.io/mobile-app/" },
  { title: "Landing Web", code: "https://github.com/zak-dev-fullstack", link: "https://zak-dev-fullstack.github.io/landing-web/" },
];

// Componente PortafolioZ
function PortafolioZ() {
  return (
    <section className="section-portafolio">
      {portafolioData.map((project, index) => (
        <div key={index} className="card-proyecto">
          <div className="img-container">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={imgl}
                loading="lazy"
                alt={project.title}
                className="img-proyecto"
                draggable="false"
                width="100"
                height="100"
              />
            </a>
          </div>
          <div className="button-container">
            <button
              className="boton-titulo"
              onClick={() => window.location.href = project.link}
            >
              {project.title}
            </button>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="boton-codigo">GitHub</button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PortafolioZ;
