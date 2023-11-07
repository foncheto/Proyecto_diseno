import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Importa 'useParams' desde react-router-dom

const TvDetail = () => {
  const { id } = useParams(); // Obtén el 'id' de la URL usando 'useParams'
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

  return (
    <div>
      <h1>{movie.name}</h1>
      <p>{movie.overview}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TvDetail;
