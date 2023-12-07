
/* IMPORTANTE, LEER ANTES DE EMPEZAR A CODIFICAR
  * 1. Modifiqué la página completa porque todo era extremadamente grande y molestaba la vista
  * 
  * 
  * 2. No segunda ni tercera página, hay que ver cómo solucionarlo

*/ 




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Ranking() {
  let [genres, setGenres] = useState([]);
  const [sortBy, setSortBy] = useState("vote_average");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  let [movies, setMovies] = useState([]);
  /* making api request */
  useEffect(function () {
    console.log("useEffect again");
    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=1"
        )
        .then((res) => {
          // console.table(res.data.results);
          setMovies(res.data.results);
        });
    })();
  });

  const filteredMovies =
    selectedGenre !== "All Genres"
      ? movies.filter((movie) => genreids[movie.genre_ids[0]] === selectedGenre)
      : movies;

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] - b[sortBy];
    } else {
      return b[sortBy] - a[sortBy];
    }
  });

  const pageStyles = {
    padding: "40px", // Esto agrega un padding de 20px alrededor de todo el contenido
    backgroundColor: "lightgray",
  };

  useEffect(() => {
    let temp = movies.map((movie) => genreids[movie.genre_ids[0]]);
    console.log(temp);
    temp = new Set(temp);
    setGenres(["All Genres", ...temp]);
  }, []);

  return (
    <div style={pageStyles}> {/* Aquí aplicas los estilos */}
      <div className="mt-6 flex space-x-2 justify-center">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`py-1 px-2 bg-gray-400 rounded-lg font-bold text-white hover:bg-blue-400 ${
              genre === selectedGenre ? "bg-blue-400" : ""
            }`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-4 text-gray-900 text-m p-3"
              >
                Name
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-gray-900 text-m p-3"
              >
                <div className="flex">
                  <div>Votes</div>
                </div>
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-gray-900 text-m p-3"
              >
                <div className="flex">
                  <div>Rating</div>
                </div>
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-gray-900 text-m p-3"
              >
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-gray-900 text-m p-3"
              >
                Genre
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {sortedMovies.map((movie) => {
              {
                console.log(movie);
              }
              return (
                <tr class="hover:bg-gray-50" key={movie.id}>
                  <th class="flex items-center px-3 py-2 text-gray-900">
                    <Link
                      to={`/${movie.media_type}/${movie.id}`}
                      className="font-bold 
                                  text-xl
                                  text-blue-400
                                  "
                    >
                      <img
                        class="h-[5rem]  w-[5rem] object-fit"
                        src={`https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path}`}
                        alt=""
                      />{" "}
                    </Link>
                    <div class="px-6 py-4 text-gray-900 p-5">
                      {movie.title || movie.name}
                    </div>
                  </th>
                  <td class="px-6 py-4 text-gray-900 p-5">{movie.vote_count}</td>
                  <td class="px-6 py-4 text-gray-900 p-5">
                    {movie.vote_average.toFixed(2)}
                  </td>
                  <td class="px-6 py-4 text-gray-900 p-5">
                    {movie.popularity.toFixed(2)}
                  </td>
                  <td class="px-6 py-4 text-gray-900 p-5">
                    <div class="px-6 py-4 text-gray-900 p-5">
                      <span class="px-6 p-5 rounded-full bg-green-40 font-semibold text-green-600">
                        {genreids[movie.genre_ids[0]]}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ranking;
