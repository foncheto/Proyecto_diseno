import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import TvDetail from './components/TvDetail';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas';
import Series from './components/Series';
import Contacto from './components/Contacto';
import Ranking from './components/Ranking';
import Acerca from './components/Acerca';
import Registrarse from './components/Registrarse';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          ></Route>
          <Route
            path="/peliculas"
            element={
              <>
                <Peliculas />
              </>
            }
          ></Route>
          <Route
            path="/series"
            element={
              <>
                <Series />
              </>
            }
          ></Route>
          <Route
            path="/contacto"
            element={
              <>
                <Contacto />
              </>
            }
          ></Route>
          <Route
            path="/ranking"
            element={
              <>
                <Ranking />
              </>
            }
          ></Route>
          <Route
            path="/acerca"
            element={
              <>
                <Acerca />
              </>
            }
          ></Route>
          <Route
            path="/movie/:id"
            element={
              <>
                <MovieDetail />
              </>
            }
          ></Route>
          <Route
            path="/tv/:id"
            element={
              <>
                <TvDetail />
              </>
            }
          ></Route>
          <Route
            path="/registrarse"
            element={
              <>
                <Registrarse />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/logout"
            element={
              <>
                <Logout />
              </>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
