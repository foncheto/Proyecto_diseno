import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=565dda78aae2b75fafddbc4320a33b38`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "#FFDBAC", // Color piel
    borderRadius: "8px", // Bordes redondeados
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", // Sombra ligera
    // Otros estilos si los necesitas
  };

  const containerStyle1 = {
    display: "flex", // Utiliza flexbox
    alignItems: "center", // Alinea verticalmente los elementos
    padding: "20px",
    fontFamily: "Roboto, sans-serif",
    // Otros estilos si los necesitas
  };

  const imgStyle = {
    maxWidth: "200px",
    height: "auto",
    marginRight: "20px", // Espacio entre la imagen y el texto
    // Otros estilos si los necesitas
  };

  const textContainerStyle = {
    flex: "1", // Permite que el contenedor ocupe el espacio restante
    // Otros estilos si los necesitas
  };

  const h1Style = {
    textAlign: "center",
    flex: "1",
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "#FFDBAC", // Color piel
    borderRadius: "100px", // Bordes redondeados
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", // Sombra ligera
    // Otros estilos si los necesitas
  };

  const pStyle = {
    textAlign: "justify",
    // Otros estilos si los necesitas
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
        alt="foto"
      />
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetail;
