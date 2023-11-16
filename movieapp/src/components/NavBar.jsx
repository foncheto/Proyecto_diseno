// rfce
import React from "react";
import Logo from "../download.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div
      className="border
      flex items-center
      space-x-8
      pl-3 py-4
       "
    >
      {" "}
      <Link to="/">
        <img src={Logo} className="w-[50px]" alt="Logo" />
      </Link>
      <Link
        to="/"
        className="font-bold 
            text-xl
            text-blue-400
            "
      >
        Inicio
      </Link>
      <Link
        to="/peliculas"
        className="font-bold
            text-xl
            text-blue-400
            
            "
      >
        Peliculas
      </Link>
      <Link
        to="/series"
        className="font-bold
            text-xl
            text-blue-400
            
            "
      >
        Series
      </Link>
      <Link
        to="/ranking"
        className="font-bold
            text-xl
            text-blue-400
            
            "
      >
        Ranking
      </Link>
      <Link
        to="/fav"
        className="font-bold
            text-xl
            text-blue-400
            
            "
      >
        {" "}
        Favourites
      </Link>
    </div>
  );
}

export default NavBar;
