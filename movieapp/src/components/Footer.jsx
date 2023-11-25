import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faReact,
  faLinkedin,
  faWhatsapp,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white fixed bottom-0 w-full">
      <div className="mb-4 flex items-start">
        <div className="mr-auto">
          <p className="font-bold mb-2 p-2">Síguenos en Redes Sociales</p>
        </div>
        <div className="flex gap-2">
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
      <div className="flex items-start">
        <div className="ml-auto">
          <p className="font-bold mb-2 p-2">Agradecimientos</p>
        </div>
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faNode} size="2x" className="icon-red" />
          <FontAwesomeIcon icon={faDiscord} size="2x" className="icon-red" />
          <FontAwesomeIcon icon={faReact} size="2x" className="icon-red" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
