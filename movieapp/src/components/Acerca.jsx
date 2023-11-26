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
    alignItems: "flex-start",  // Cambiado de "center" a "flex-start"
    flexWrap: "wrap",
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
    height: "150px",  // Ajusta la altura para que sea igual al ancho
    marginBottom: "20px",
    borderRadius: "50%",  // Hace que la imagen sea un círculo
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
    "Our mission at PelicuRanking is to build an innovative platform that enhances the cinematic experience for lovers of the seventh art. We strive to provide a space where passion for movies meets cutting-edge technology. By creating this website, we aim to offer users not only the opportunity to discover and rate movies but also to explore the latest in the world of cinema. Welcome to our community of movie enthusiasts, where every click is a step towards an extraordinary cinematic experience!";
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
                <h1>About FilmoRanking's history</h1>
              </div>
              <p className=" text-xl ">{textoAleatorio}</p>
              <div style={styles.header}>
                <h1>Our Team</h1>
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
                      <li>Major: Civil Computer Engineering</li>
                      <li>Age: 21 years old</li>
                    </ul>
                    <section style={styles.presentation}>
                      <p>
                      I'm Alfonso, a Civil Computer Engineering student with a passion for technology and learning. In my free time, I enjoy playing or watching football matches. Additionally, I'm captivated by the world of Artificial Intelligence and its ability to transform how we interact with technology and the world. I love acquiring new knowledge and am constantly seeking opportunities to learn and grow, both personally and professionally. I consider myself a hardworking and responsible individual, always eager to take on new challenges and responsibilities. I thrive in teamwork because I enjoy learning from others and tackling new challenges.
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
                      <li>Major: Civil Computer Engineering</li>
                      <li>Age: 26 years old</li>
                    </ul>
                    <section style={styles.presentation}>
                      <p>
                      My name is Pablo Gómez, and I'm a Civil Computer Engineering student. I have some basic knowledge of web development as I had the same professor in Introduction to Engineering. Besides, I enjoy gaming on the computer and watching movies. Sometimes, when I have free time, I dabble in programming basic things. One of my hobbies is washing cars; I take pleasure in ensuring they are clean both inside and out. While I don't run a car wash business, I have many frequent customers who often request my services. I don't charge excessively high rates because I prefer having regular clients at a reasonable cost. If anyone is interested in having their car cleaned, feel free to contact me.
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
                      <li>Major: Civil Computer Engineering</li>
                      <li>Age: 21 years old</li>
                    </ul>
                    <section style={styles.presentation}>
                      <p>
                      Currently, I'm enrolled in the Civil Computer Engineering program, and my academic journey began in 2021. Apart from my studies, I devote time to various activities that enrich my life. I have a keen interest in sports, particularly football, which I enjoy both watching and playing. Music is another defining passion for me as I play the electric guitar; I feel it's a form of expression. Additionally, I'm drawn to video games, exploring virtual worlds and challenging my skills across different platforms. At 21 years old, I believe my focus and maturity in my studies and activities highlight promising qualities for my personal and professional growth.
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
