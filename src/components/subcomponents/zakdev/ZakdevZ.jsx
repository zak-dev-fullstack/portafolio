import "./zakdev.css";
import logo2 from './zakdevl2.png';
export default function ZakdevZ() {
  return (
<div>
<section className="section-bio">
      <h2 className="bio-titulo">Desarrollador Web</h2>
      <p className="descripcion-bio">
        Diseño y Desarrollo Productos Digitales.
        <br /> Fusiono la elegancia del diseño con la eficiencia del desarrollo.
        <br />
        Innovo productos web visualmente atractivos y altamente funcionales.
        <br />
        Experiencia Certificada en Tecnólogias.
        <br />
        Autodidacta por vocaciòn.
      </p>
      <h2 className="servicios-titulo">Servicios</h2>
      <ul className="servicios-list">
        <li className="servicio-item">Diseño Web</li>
        <li className="servicio-item">Databases</li>
        <li className="servicio-item">Integración API</li>
        <li className="servicio-item">Mobile Apps</li>
        <li className="servicio-item">Cloud Management</li>
      </ul>
    </section>

    <div>
      <img className="logo2" src={logo2} alt="img" />
    </div>
</div>
  );
}
