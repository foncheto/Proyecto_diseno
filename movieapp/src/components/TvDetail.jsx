import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rating from "react-rating-stars-component";

function TvDetail() {
  let [movies, setMovies] = useState([]);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);

  const [rating, setRating] = useState(0); // State to manage the rating

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

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

  const handleStarClick = (rating) => {
    // Instead of setting the selectedRating to the exact rating,
    // set it to the maximum value between the current rating and the previously selected rating.
    setSelectedRating(Math.max(rating, selectedRating));
  };

  const backdropStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "46%",
    zIndex: -1,
    opacity: 0.15,
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
        style={{ display: "flex", alignItems: "" }}
      >
        <div style={{ flex: "1", marginRight: "-100px" }}>
          <img
            src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
            alt="foto"
            style={{
              width: "100%",
              maxWidth: "200px",
              borderRadius: "8px",
              margin: "20px 80px",
              marginBottom: "34px",
            }}
          />
        </div>
        <div
          className=""
          style={{
            flex: "1",
            margin: "50px",
            marginLeft: "-80px",
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
          <div style={{ margin: "10px 0", fontFamily: "sans-serif" }}>
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
            Overview
          </div>
          <div
            style={{
              padding: "10px",
              borderRadius: "10px",
              fontFamily: "sans-serif",
              overflowWrap: "break-word",
            }}
          >
            {movie.overview}
          </div>
          <div
            className="flex flex-wrap justify-center text-xl"
            style={{ marginRight: "50px" }}
          >
            <p>¡Realiza tu votación aquí!</p>
            <div style={{ marginLeft: "10px" }}>
              <Rating
                count={5}
                size={40}
                onChange={handleRatingChange}
                color="gold"
                value={rating}
              />
            </div>
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
