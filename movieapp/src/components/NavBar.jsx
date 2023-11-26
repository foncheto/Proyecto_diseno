import React from "react";
import Logo from "../download.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="border flex items-center justify-between pl-3 pr-3 py-4">
      {/* Sección izquierda del Navbar */}
      <div className="flex items-center space-x-8">
        <Link to="/">
          <img src={Logo} className="w-[50px]" alt="Logo" />
        </Link>
        <Link to="/" className="font-bold text-xl text-blue-400">
          Inicio
        </Link>
        <Link to="/peliculas" className="font-bold text-xl text-blue-400">
          Peliculas
        </Link>
        <Link to="/series" className="font-bold text-xl text-blue-400">
          Series
        </Link>
        <Link to="/ranking" className="font-bold text-xl text-blue-400">
          Ranking
        </Link>
        <Link to="/contacto" className="font-bold text-xl text-blue-400">
          Contacto
        </Link>
        <Link to="/acerca" className="font-bold text-xl text-blue-400">
          Acerca
        </Link>
      </div>

      {/* Sección derecha del Navbar */}
      <div className="flex items-center space-x-6">
        {/* ... (nuevos enlaces) */}
        <Link to="/registrarse" className="font-bold text-xl text-blue-400">
          Registrarse
        </Link>
        <Link to="/login" className="font-bold text-xl text-blue-400">
          Login
        </Link>
        <Link to="/logout" className="font-bold text-xl text-blue-400">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default NavBar;