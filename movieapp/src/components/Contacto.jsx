import React, { useEffect, useState } from "react";
// import Image from "./image.jpg";
import axios from "axios";
import Pagination from "./Pagination";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
function Movies() {
  // set variables for contact form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10 mb-10">Contacto</h1>
      <div className="flex flex-col items-center">
        <form className="flex flex-col items-center">
          <label className="text-xl font-bold">Nombre</label>
          <input
            className="border-2 border-gray-300 mb-5"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="text-xl font-bold">Email</label>
          <input
            className="border-2 border-gray-300 mb-5"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-xl font-bold">Mensaje</label>
          <textarea
            className="border-2 border-gray-300 mb-5"
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-400 text-white px-3 py-2 rounded-md"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Movies;
