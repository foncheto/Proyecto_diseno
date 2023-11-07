import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faFontAwesome,
  faHtml5,
  faReact,
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-gray-900 text-white justify-center items-center">
      <div className="footer-section text-center">
        <p className="font-bold mb-4">Siguenos en Redes Sociales</p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/alfonsopintom/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/foncheto"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-github"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-whatsapp"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <div className="footer-section text-center">
        <p className="font-bold mb-4">Agradecimientos!</p>
        <div className="flex gap-4 justify-center">
          <FontAwesomeIcon icon={faCss3} size="2x" className="icon-red" />
          <FontAwesomeIcon icon={faHtml5} size="2x" className="icon-red" />
          <FontAwesomeIcon icon={faReact} size="2x" className="icon-red" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
