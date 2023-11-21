import React from "react";
import PabloImage from "./img/Pablo.jpeg";
import AlfonsoImage from "./img/Alfonso.jpg";
import JorgeImage from "./img/Jorge.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1500px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    fontSize: "44px",
    color: "black",
    marginBottom: "20px",
    fontFamily: "Mono, monospace",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#f8f9fa", // Light grayish-blue background
    borderRadius: "10px",
    flex: 1,
    margin: "0 10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "150px",
    height: "200px",
    marginBottom: "20px",
    borderRadius: "5px",
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    fontSize: "24px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  infoList: {
    listStyleType: "none",
    padding: 0,
    textAlign: "center",
    marginBottom: "20px",
  },
  presentation: {
    textAlign: "justify",
    fontFamily: "Arial, sans-serif",
  },
};

function Acerca() {
  const textoAleatorio =
    "Nuestra misión en PelicuRanking es construir una plataforma innovadora que eleve la experiencia cinematográfica para los amantes del séptimo arte. Nos esforzamos por ofrecer un espacio donde la pasión por las películas se encuentre con la tecnología de vanguardia. Al crear esta página web, buscamos proporcionar a los usuarios no solo la oportunidad de descubrir y clasificar películas, sino también de explorar lo último en el mundo del cine. ¡Bienvenido a nuestra comunidad de amantes del cine, donde cada clic es un paso hacia una experiencia cinematográfica extraordinaria!";
  let [bannerMovie, setBanner] = useState("");

  useEffect(function () {
    (function () {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/695721?api_key=565dda78aae2b75fafddbc4320a33b38"
        )
        .then((res) => {
          console.table(res.data);
          setBanner(res.data);
        });
    })();
  }, []);
  return (
    <>
      {bannerMovie === "" ? (
        <div
          className="
                    flex justify-center"
        >
          <Oval
            height="80"
            width="80"
            radius="9"
            color="gray"
            secondaryColor="gray"
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>
          <div
            style={{
              backgroundImage: `url(
                                    https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie.backdrop_path})`,
            }}
          >
            <div style={styles.container} className="p-3">
              <div style={styles.header}>
                <h1>Acerca de la historia de PelicuRanking</h1>
              </div>
              <p className=" text-xl ">{textoAleatorio}</p>
              <div style={styles.header}>
                <h1>Nuestro Equipo</h1>
              </div>
              <div style={styles.cardContainer}>
                <div style={styles.card} className="shadow">
                  <img
                    src={AlfonsoImage}
                    alt="Programador"
                    style={styles.image}
                  />
                  <div>
                    <h3 style={styles.title}>Alfonso Pinto</h3>
                    <ul style={styles.infoList}>
                      <li>Carrera: Ingeniería Civil Informática</li>
                      <li>Edad: 21 años</li>
                    </ul>
                    <section style={styles.presentation}>
                      <p>
                        Soy Alfonso, un estudiante de Ingeniería Civil
                        Informática con una pasión por la tecnología y el
                        aprendizaje. En mi tiempo libre, disfruto jugando al
                        fútbol, ya sea en la cancha o viendo partidos. Además,
                        me cautiva el mundo de la Inteligencia Artificial y su
                        capacidad para transformar la forma en que interactuamos
                        con la tecnología y el mundo que nos rodea. Me encanta
                        aprender cosas nuevas, y estoy constantemente buscando
                        nuevas oportunidades para aprender y crecer como persona
                        y profesional. Me considero una persona muy trabajadora
                        y responsable, y siempre estoy dispuesto a asumir nuevos
                        desafíos y responsabilidades. Me gusta trabajar en
                        equipo porque creo que todos podemos aprender algo de
                        los demás
                      </p>
                    </section>
                  </div>
                </div>

                <div style={styles.card} className="shadow">
                  <img
                    src={PabloImage}
                    alt="Programador"
                    style={styles.image}
                  />
                  <div>
                    <h3 style={styles.title}>Pablo Gómez</h3>
                    <ul style={styles.infoList}>
                      <li>Carrera: Ingeniería Civil Informática</li>
                      <li>Edad: 26 años</li>
                    </ul>
                    <section style={styles.presentation}>
                      <p>
                        Mi nombre es Pablo Gómez, soy estudiante de Ingeniería
                        Civil Informática. Tengo un leve conocimiento de hacer
                        páginas web porque tuve el mismo profesor en
                        Introducción a la Ingeniería. Además, me gusta jugar en
                        la computadora y ver películas. A veces, cuando no tengo
                        nada que hacer, me pongo a programar cosas básicas. Uno
                        de mis hobbies es lavar autos, me gusta dejarlos limpios
                        tanto por dentro como por fuera. No tengo una empresa de
                        lavados, pero tengo muchos clientes frecuentes que a
                        menudo me piden lavados. No cobro exageradamente mucho
                        porque prefiero tener clientela frecuente a un costo
                        razonable. Si alguien está interesado en tener su auto
                        limpio, no dude en contactarme.
                      </p>
                    </section>
                  </div>
                </div>

                <div style={styles.card} className="shadow">
                  <img
                    src={JorgeImage}
                    alt="Programador"
                    style={styles.image}
                  />
                  <div>
                    <h3 style={styles.title}>Jorge Becerra</h3>
                    <ul style={styles.infoList}>
                      <li>Carrera: Ingeniería Civil Informática</li>
                      <li>Edad: 20 años</li>
                    </ul>
                    <section style={styles.presentation}>
                      <p>
                        Actualmente, estoy matriculado en la carrera de
                        Ingeniería CivilInformática, y mi viaje académico
                        comenzó en el año 2021. Ademásde mis estudios, dedico
                        tiempo a diversas actividades queenriquecen mi vida.
                        Tengo un gran interés por el deporte,particularmente el
                        fútbol, el cual disfruto tanto viendo comojugando. La
                        música es otra pasión que me define, ya que toco
                        laguitarra con entusiasmo, y encuentro en ella una forma
                        deexpresión y creatividad. Además, me siento atraído por
                        losvideojuegos de última generación, explorando mundos
                        virtuales ydesafiando mi destreza en diversas
                        plataformas. Con 20 años deedad, considero que mi
                        enfoque y madurez en mis estudios yactividades resaltan
                        cualidades prometedoras para mi crecimientopersonal y
                        profesional.
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Acerca;
