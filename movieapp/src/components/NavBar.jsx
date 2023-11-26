import React from "react";
import Logo from "../download.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      className="flex items-center justify-between pl-3 py-4"
      style={{ backgroundColor: "#0a192f" }}
    >
      <div className="flex items-center space-x-8">
        <Link to="/">
          <img src={Logo} className="w-[60px]" alt="Logo" />
        </Link>
        <Link to="/" className="font-bold text-xl" style={{ color: "#FFFFFF" }}>
          Home
        </Link>
        <Link
          to="/peliculas"
          className="font-bold text-xl"
          style={{ color: "#FFFFFF" }}
        >
          Films
        </Link>
        <Link
          to="/series"
          className="font-bold text-xl"
          style={{ color: "#FFFFFF" }}
        >
          Series
        </Link>
        <Link
          to="/ranking"
          className="font-bold text-xl"
          style={{ color: "#FFFFFF" }}
        >
          Ranking
        </Link>
        <Link
          to="/contacto"
          className="font-bold text-xl"
          style={{ color: "#FFFFFF" }}
        >
          Contact
        </Link>
        <Link
          to="/acerca"
          className="font-bold text-xl"
          style={{ color: "#FFFFFF" }}
        >
          About us
        </Link>
      </div>
      <div className="flex items-center space-x-4"
      style={{ marginRight: "10px" }}>
        <Link to="/registrarse" className="text-xl" style={{ color: "#FFFFFF" }}>
          Sign Up
        </Link>
        <Link to="/login" className="text-xl" style={{ color: "#FFFFFF" }}>
          Log In
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
