import idjango from "../../../assets/django.svg";
import ipython from "../../../assets/python.svg";
import inode from "../../../assets/node.svg";
import imysql from "../../../assets/mysql.svg";
import iazure from "../../../assets/azure.svg";
import ipostgres from "../../../assets/postgres.svg";
import imongo from "../../../assets/mongo.svg";
import ifirebase from "../../../assets/firebase.svg";
import iphp from "../../../assets/php.svg";
import isails from "../../../assets/sails.svg";
import iexpress from "../../../assets/express.svg";
import ireact from "../../../assets/react.svg";
import inext from "../../../assets/next.svg";
import ihtml from "../../../assets/html.svg";
import icss from "../../../assets/css.svg";
import itailwind from "../../../assets/tailwind.svg";
import ibootstrap from "../../../assets/bootstrap.svg";
import ivue from "../../../assets/vue.svg";
import iafter from "../../../assets/after.svg";
import iblender from "../../../assets/blender.svg";
import iableton from "../../../assets/ableton.svg";
import ini from "../../../assets/ni.svg";
import ilu from "../../../assets/ilu.svg";
import iphoto from "../../../assets/photo.svg";
import ilinux from "../../../assets/linux.svg";
import iwin from "../../../assets/win.svg";
import imac from "../../../assets/mac.svg";
import idok from "../../../assets/dok.svg";
import ikub from "../../../assets/kub.svg";
import iconda from "../../../assets/conda.svg";
import "./skills.css";

const skillsData = [
  {
    imagen: ireact,
    tecnologia: "React",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: ipython,
    tecnologia: "Python",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: inode,
    tecnologia: "Node.js",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: imysql,
    tecnologia: "MySql",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: iazure,
    tecnologia: "Azure",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: idjango,
    tecnologia: "Django",
    certificacion: false,
    autodidacta: true,
  },
  {
    imagen: imongo,
    tecnologia: "MongoDB",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: ifirebase,
    tecnologia: "Firebase",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: iphp,
    tecnologia: "PHP",
    certificacion: false,
    autodidacta: true,
  },
  {
    imagen: isails,
    tecnologia: "Sails",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: iexpress,
    tecnologia: "Express",
    certificacion: true,
    autodidacta: false,
  },
  // Otras habilidades de backend
  {
    imagen: ivue,
    tecnologia: "Vue",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: inext,
    tecnologia: "Next.Js",
    certificacion: false,
    autodidacta: true,
  },
  {
    imagen: ihtml,
    tecnologia: "Html",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: icss,
    tecnologia: "Css",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: itailwind,
    tecnologia: "Tailwind CSS",
    certificacion: false,
    autodidacta: true,
  },
  {
    imagen: ibootstrap,
    tecnologia: "Bootstrap",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: ipostgres,
    tecnologia: "Postgres",
    certificacion: true,
    autodidacta: false,
  },
  // Otras habilidades de frontend
  {
    imagen: ilinux,
    tecnologia: "Linux",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: iwin,
    tecnologia: "Windows",
    certificacion: false,
    autodidacta: true,
  },
  {
    imagen: imac,
    tecnologia: "Mac",
    certificacion: false,
    autodidacta: true,
  },
  {
    imagen: idok,
    tecnologia: "Docker",
    certificacion: false,
    autodidacta: true,
  },
  {
    imagen: ikub,
    tecnologia: "Kubernetes",
    certificacion: false,
    autodidacta: true,
  },
  {
    imagen: iconda,
    tecnologia: "Anaconda",
    certificacion: false,
    autodidacta: true,
  },
  // Otras habilidades de arquitectura de sistemas operativos
  {
    imagen: iafter,
    tecnologia: "After Effects",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: iblender,
    tecnologia: "Blender",
    certificacion: false,
    autodidacta: true,
  },
  {
    imagen: iableton,
    tecnologia: "Ableton Live",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: ini,
    tecnologia: "Native Instrument",
    certificacion: false,
    autodidacta: true,
  },
  // Otras habilidades de audio
  {
    imagen: ilu,
    tecnologia: "Illustrator",
    certificacion: true,
    autodidacta: false,
  },
  {
    imagen: iphoto,
    tecnologia: "Photoshop",
    certificacion: true,
    autodidacta: false,
  },
  // Otras habilidades de imágenes
];
function SkillsZD() {
  return (
    <div className="skillsz">
      {skillsData.map((skill, index) => (
        <div key={index}>
          <div className="skills-grid">
            <div key={index} className="card">
              <div className="card-image">
                <img
                  src={skill.imagen}
                  alt="skill img"
                  width={300}
                  height={300}
                  className="skill-image"
                />
              </div>
              <div className="card-info">
                <div className="card-technology">
                  <h3>{skill.tecnologia}</h3>
                </div>
                <h4>
                  {skill.certificacion && (
                    <p className="card-certification">Certificación</p>
                  )}
                  {skill.autodidacta && (
                    <p className="card-autodidact">Autodidacta</p>
                  )}
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SkillsZD;
