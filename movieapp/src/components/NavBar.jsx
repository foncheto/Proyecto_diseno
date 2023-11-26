// rfce
import React from "react";
import Logo from "../download.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div
      className="
      flex items-center
      space-x-8
      pl-3 py-4
       "
       style={{backgroundColor: "#0a192f"}}
    >
      {" "}
      <Link to="/">
        <img src={Logo} className="w-[60px]" alt="Logo" />
      </Link>
      <Link
      to="/"
      className="font-bold text-xl"
      style={{ color: "#FFFFFF" }} // Aplica el color blanco directamente en línea
    >
      Home
    </Link>
    <Link
      to="/peliculas"
      className="font-bold text-xl"
      style={{ color: "#FFFFFF" }} // Aplica el color blanco directamente en línea
    >
      Films
    </Link>
    <Link
      to="/series"
      className="font-bold text-xl"
      style={{ color: "#FFFFFF" }} // Aplica el color blanco directamente en línea
    >
      Series
    </Link>
    <Link
      to="/ranking"
      className="font-bold text-xl"
      style={{ color: "#FFFFFF" }} // Aplica el color blanco directamente en línea
    >
      Ranking
    </Link>
    <Link
      to="/contacto"
      className="font-bold text-xl"
      style={{ color: "#FFFFFF" }} // Aplica el color blanco directamente en línea
    >
      Contact
    </Link>
    <Link
      to="/acerca"
      className="font-bold text-xl"
      style={{ color: "#FFFFFF" }} // Aplica el color blanco directamente en línea
    >
      About us
    </Link>
    </div>
  );
}

export default NavBar;
