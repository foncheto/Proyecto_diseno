import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function TvDetail() {
  let [movies, setMovies] = useState([]);
  let [pageNum, setPage] = useState(1);
  let [hovered, setHovered] = useState("");
  let [favourites, setFavorites] = useState([]);
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

  /* making api request */
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=" +
          pageNum
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNum]);

  /* Pagination handlers */
  const onPrev = () => {
    if (pageNum > 1) {
      setPage(pageNum - 1);
    }
  };

  const onNext = () => {
    setPage(pageNum + 1);
  };

  /* Emoji show and hide on hover */
  const showEmoji = (id) => {
    setHovered(id);
  };

  const hideEmoji = () => {
    setHovered("");
  };

  /* Adding / removing emojis to fav */
  const addEmoji = (id) => {
    const newFav = [...favourites, id];
    setFavorites(newFav);
  };

  const removeEmoji = (id) => {
    const filteredFav = favourites.filter((elem) => {
      return elem !== id;
    });
    setFavorites(filteredFav);
  };

  return (
    <div className="flex">
      <div className="w-1/2 border-black border-2 rounded-lg">
        <div className="mt-8">
          <div className="mb-8 font-bold text-2xl text-center text-3xl">
            Otras series
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
                  <>
                    <Link to={`/${movie.media_type}/${movie.id}`}>
                      <div
                        onMouseOver={() => {
                          showEmoji(movie.id);
                        }}
                        onMouseLeave={() => {
                          hideEmoji(movie.id);
                        }}
                        key={movie.id}
                        className="bg-center bg-cover w-[80px] h-[15vh] md:h-[20vh] md:w-[90px] m-4 rounded-xl hover:scale-110 duration-300 flex items-end relative"
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
                        }}
                      >
                        <div
                          className="p-2 bg-gray-900 absolute top-2 right-2 rounded-xl"
                          style={{
                            display: hovered === movie.id ? "block" : "none",
                          }}
                        >
                          {!favourites.includes(movie.id) ? (
                            <div
                              className="text-2xl"
                              onClick={() => {
                                addEmoji(movie.id);
                              }}
                            >
                              😍
                            </div>
                          ) : (
                            <div
                              className="text-2xl"
                              onClick={() => {
                                removeEmoji(movie.id);
                              }}
                            >
                              ❌
                            </div>
                          )}
                        </div>
                        <div className="font-bold text-white bg-gray-900 bg-opacity-60 p-2 text-center w-full rounded-b-xl text-decoration-none"></div>
                      </div>
                    </Link>
                  </>
                );
              })
            )}
          </div>
          <Pagination pageNum={pageNum} onPrev={onPrev} onNext={onNext} />
        </div>
      </div>
      <div className="w-1/2 border-black border-2 rounded-lg">
        <div className="mt-8 text-center text-2xl font-bold"></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.backdrop_path}`}
            alt="foto"
            style={{ margin: "0 auto" }}
          />
        </div>
        <div
          className="mt-8 text-center font-serif text-justify"
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          <div style={{ marginLeft: "20px" }}>
            <div className="mt-8 text-center font-serif text-justify">
              <div
                className="mx-auto"
                style={{
                  maxWidth: "fit-content",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                  backgroundColor: "lightgrey",
                }}
              >
                {movie.name}
              </div>
            </div>
            {movie.overview}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvDetail;
