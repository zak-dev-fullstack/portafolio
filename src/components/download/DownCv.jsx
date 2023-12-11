import React from "react";
import { GiBurningBook } from "react-icons/gi";

import "./cv.css";

function DownCv() {
  const links = React.useMemo(
    () => [
      {
        id: 1,
        child: (
          <i className="icono-cv">
            <GiBurningBook />
          </i>
        ),
        href: "/cv1.pdf", 
        download: true,
      },
    ],
    []
  );

  return (
    <button className="boton-cv">
      {links.map(({ id, child, href, download }) => (
        <div key={id} className="cvdown">
          <span>
            {" "}
            <a href={href} download={download} target="_blank" rel="noreferrer">
              {child}
              <h3 className="text-d">Download Cv</h3>
            </a>
          </span>
        </div>
      ))}
    </button>
  );
}

export default DownCv;
