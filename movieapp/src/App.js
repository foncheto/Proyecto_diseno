import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import TvDetail from "./components/TvDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import Peliculas from "./components/Peliculas";
import Series from "./components/Series";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <h1> Hello React ❤️</h1> */}
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Movies></Movies>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route path="/fav" element={<Favourites></Favourites>}></Route>
          <Route
            path="/peliculas"
            element={
              <>
                <Peliculas></Peliculas>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/series"
            element={
              <>
                <Series></Series>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/movie/:id"
            element={
              <>
                <MovieDetail></MovieDetail>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/tv/:id"
            element={
              <>
                <TvDetail></TvDetail>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
