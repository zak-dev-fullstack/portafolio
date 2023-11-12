
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

import "./redes.css";
import Link from "next/link";

function Redes() {
  return (
    <div className="redes-container">
      <Link href="https://github.com/zak-dev-fullstack" target="_blank">
        <FaGithub className="iconos-redes" />
      </Link>
      <Link href="https://www.linkedin.com/in/zakdev/" target="_blank">
        <FaLinkedin className="iconos-redes" />
      </Link>
      <Link href="https://wa.me/573187716434" target="_blank">
        <FaWhatsapp className="iconos-redes" />
      </Link>
      <Link href="https://discord.gg/Jnp2H2sB" target="_blank">
        <BsDiscord className="iconos-redes" />
      </Link>
    </div>
  );
}

export default Redes;
