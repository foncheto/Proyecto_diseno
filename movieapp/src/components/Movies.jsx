import React, { useEffect, useState } from "react";
// import Image from "./image.jpg";
import axios from "axios";
import Pagination from "./Pagination";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
function Movies() {
  let [movies, setMovies] = useState([]);
  let [pageNum, setPage] = useState(1);
  let [hovered, setHovered] = useState("");
  let [favourites, setFavorites] = useState([]);
  /* making api request */
  useEffect(
    function () {
      console.log("useEffect again");
      (function () {
        axios
          .get(
            "https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=" +
              pageNum
          )
          .then((res) => {
            console.table(res.data.results);
            setMovies(res.data.results.slice(0, 16));
          });
      })();
    },
    [pageNum]
  );
  /* Pagination handlers*/
  const onPrev = () => {
    if (pageNum > 1) {
      setPage(pageNum - 1);
    }
  };
  const onNext = () => {
    setPage(pageNum + 1);
  };

  return (
    <div className="mt-3">
      <div
        className="flex 
            flex-wrap
            justify-center
            "
      >
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
                <Link
                  to={`/${movie.media_type}/${movie.id}`}
                  className="font-bold 
                                text-xl
                                text-blue-400
                                "
                >
                  {" "}
                  <div
                    onMouseOver={() => {}}
                    onMouseLeave={() => {}}
                    key={movie.id}
                    className="
                bg-center bg-cover    
                w-[160px]
                h-[30vh]
                md: h-[40vh]
                md:w-[180px]
                m-4
                rounded-xl
                hover:scale-110
                duration-300
                 flex items-end 
                 relative
                "
                    style={{
                      backgroundImage: `url(
                                    https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
                    }}
                  >
                    <div
                      className="p-2
 bg-gray-900
                                absolute top-2 right-2
                                rounded-xl
                               "
                      style={{
                        display: hovered === movie.id ? "block" : "none",
                      }}
                    ></div>
                    <div
                      className="
                    font-bold text-white
                bg-gray-900 bg-opacity-60
                p-2
                text-center
                w-full
                rounded-b-xl text-decoration-none
                "
                    >
                      {" "}
                      {movie.title || movie.name}
                    </div>
                  </div>
                </Link>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Movies;
