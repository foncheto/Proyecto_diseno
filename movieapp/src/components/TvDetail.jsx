import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function TvDetail() {
  let [movies, setMovies] = useState([]);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=565dda78aae2b75fafddbc4320a33b38`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=1"
      )
      .then((res) => {
        setMovies(res.data.results.slice(0, 15));
      });
  }, []);

  const backdropStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "38.7%",
    zIndex: -1,
    opacity: 0.15, // Opacidad del fondo
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px",
  };

  return (
    <div className="" style={{ position: "relative", minHeight: "100vh" }}>
      <div style={backdropStyle}></div>
      <div
        className="md:w-full border-black border-2 rounded-lg mb-8"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div style={{ flex: "1", marginRight: "20px" }}>
          <img
            src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
            alt="foto"
            style={{
              width: "30%",
              borderRadius: "8px",
              marginLeft: "20px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div
          className="mt-8 text-center font-serif text-justify"
          style={{
            flex: "1",
            marginLeft: "-600px",
            marginBottom: "70px",
          }}
        >
          <div style={{}}>
            <div
              className="mx-auto"
              style={{
                fontWeight: "bold",
                fontSize: "200%",
                fontFamily: "sans-serif",
              }}
            >
              {movie.name}
            </div>
          </div>
          <div style={{ marginBottom: "10px", fontFamily: "sans-serif" }}>
            <div className="mx-auto">
              {movie.first_air_date} ▪️ ⭐{movie.vote_average} ▪️{" "}
              {movie.number_of_seasons} temporadas ▪️ {movie.number_of_episodes}{" "}
              episodios ▪️ Idioma: {movie.original_language}
            </div>
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "20px",
              marginTop: "30px",
            }}
          >
            Vista General
          </div>
          <div
            style={{
              padding: "10px",
              borderRadius: "10px",
              width: "fit-content",
              marginRight: "15px",
              marginTop: "10px",
              fontFamily: "sans-serif",
            }}
          >
            {movie.overview}
          </div>
        </div>
      </div>
      <div className="md:w-full border-black border-2 rounded-lg p-2">
        <div className="mt-8">
          <div className="mb-8 font-bold text-2xl text-center text-3xl">
            Other TV Shows
          </div>
          <div className="flex flex-wrap justify-center">
            {movies.length === 0 ? (
              <Oval
                height="80"
                width="80"
                radius="9"
                color="gray"
                secondaryColor="gray"
                ariaLabel="loading"
              />
            ) : (
              movies.map((movie) => {
                return (
                  <Link to={`/${movie.media_type}/${movie.id}`} key={movie.id}>
                    <div
                      className="bg-center bg-cover w-[80px] h-[15vh] md:h-[20vh] md:w-[90px] m-4 rounded-xl hover:scale-110 duration-300 flex items-end relative"
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
                      }}
                    >
                      <div className="font-bold text-white bg-gray-900 bg-opacity-60 p-2 text-center w-full rounded-b-xl text-decoration-none"></div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvDetail;
