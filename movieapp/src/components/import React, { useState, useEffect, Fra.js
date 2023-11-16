import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TvDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=565dda78aae2b75fafddbc4320a33b38`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Roboto, sans-serif',
  };

  const containerStyle1 = {
    display: 'flex', // Utiliza flexbox
    alignItems: 'center', // Alinea verticalmente los elementos
    padding: '20px',
    fontFamily: 'Roboto, sans-serif',
    // Otros estilos si los necesitas
  };

  const imgStyle = {
    maxWidth: '200px',
    height: 'auto',
    marginRight: '20px', // Espacio entre la imagen y el texto
    // Otros estilos si los necesitas
  };

  const imgStyle1 = {
    maxWidth: '900px',
    height: 'auto',
    marginLeft: 'auto', // Centra la imagen ajustando el margen izquierdo
    marginRight: '90px', // Centra la imagen ajustando el margen derecho
    display: 'block', // Asegura que la imagen se comporte como un bloque
    // Otros estilos si los necesitas
  };

  const textContainerStyle = {
    flex: '1', // Permite que el contenedor ocupe el espacio restante
    // Otros estilos si los necesitas
  };

  const h1Style = {
    textAlign: 'center',
    flex: '1',
    fontSize: '2em',
    fontWeight: 'bold',
    fontFamily: 'Roboto, sans-serif',
    // Otros estilos si los necesitas
  };

  const pStyle = {
    textAlign: 'justify',
    // Otros estilos si los necesitas
  };

  return (
    <>
    <div style={containerStyle1}>
      <h1 style={h1Style}><img
        src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.backdrop_path}`}
        alt="foto"
        style={imgStyle1}
      /></h1>
    </div>
    <div style={containerStyle}>
      <img
        src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
        alt="foto"
        style={imgStyle}
      />
      <div style={textContainerStyle}>
        <p style={pStyle}>{movie.overview}</p>
        {/* Agregar más detalles según sea necesario */}
      </div>
    </div>
    </>
  );
};

export default TvDetail;
