import React from "react";
import PabloImage from './img/Pablo.jpeg';
import AlfonsoImage from './img/Alfonso.jpg';
import JorgeImage from './img/Jorge.jpg';

function Acerca() {
  // Texto aleatorio para la sección de texto
  const textoAleatorio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget augue et quam vehicula blandit. Fusce tempus augue nec purus tristique sodales. In et nunc vel elit bibendum placerat eu et lorem. Phasellus nec mi a libero suscipit scelerisque sit amet a odio. Maecenas vel mauris in justo varius efficitur. Sed ac tincidunt urna. Quisque eget fermentum nisi. Integer nec convallis libero, in laoreet ex.";

  return (
    <div style={{ }}>
        <div style= {{textAlign: 'center', fontSize: '20px', color: 'black' }}>
            <h1>Acerca de la historia de Pelicuranking</h1>
        </div>
        <p>{textoAleatorio}</p>
        <div style={{ display: 'flex', marginTop: "50px" }}>
        <div style={{ backgroundColor: 'lightgrey', flex: 1, margin: '0 5px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <img src={AlfonsoImage} alt="Programador" width="150" height="200" style={{ marginBottom: '20px' }} />
    <div className="texto1" style={{ textAlign: 'justify', fontFamily: 'Arial, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h3>Alfonso Pinto</h3>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'  }}>
            <li>Carrera: Ingeniería Civil Informática</li>
            <li>Edad: 21 años</li>
        </ul>
        <section className="presentacion">
            <p>
                Soy Alfonso, un estudiante de Ingeniería Civil Informática con una pasión por la tecnología y el aprendizaje. En mi tiempo libre, disfruto jugando al fútbol, ya sea en la cancha o viendo partidos.
                Además, me cautiva el mundo de la Inteligencia Artificial y su capacidad para transformar la forma en que interactuamos con la tecnología. Explorar algoritmos y crear sistemas inteligentes es un desafío que me motiva constantemente.
                Aparte de la tecnología, me sumerjo en libros de todo tipo, desde ficción hasta libros técnicos. Considero que cada página es una oportunidad para adquirir nuevos conocimientos y sumergirme en nuevas aventuras. Estoy emocionado por lo que el futuro de este curso tiene para nosotros y espero poder aprender y crecer junto a mis compañeros.
            </p>
        </section>
    </div>
</div>

<div style={{ backgroundColor: 'lightgrey', flex: 1, margin: '0 5px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <img src={PabloImage} alt="Programador" width="150" height="200" style={{ marginBottom: '20px' }} />
    <div className="texto1" style={{ textAlign: 'justify', fontFamily: 'Arial, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h3>Pablo Gómez</h3>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'  }}>
            <li>Carrera: Ingeniería Civil Informática</li>
            <li>Edad: 25 años</li>
        </ul>
        <section className="presentacion">
            <p>
                Mi nombre es Pablo Gómez, soy estudiante de Ingeniería Civil Informática. Tengo un leve conocimiento
                de hacer páginas web porque tuve el mismo profesor en Introducción a la Ingeniería. Además, me gusta jugar
                en la computadora y ver películas. A veces, cuando no tengo nada que hacer, me pongo a programar cosas básicas.
                Uno de mis hobbies es lavar autos, me gusta dejarlos limpios tanto por dentro como por fuera. No tengo una
                empresa de lavados, pero tengo muchos clientes frecuentes que a menudo me piden lavados. No cobro exageradamente
                mucho porque prefiero tener clientela frecuente a un costo razonable. Si alguien está interesado en tener su
                auto limpio, no dude en contactarme.
            </p>
        </section>
    </div>
</div>
<div style={{ backgroundColor: 'lightgrey', flex: 1, margin: '0 5px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
    <img src={JorgeImage} alt="Programador" width="150" height="200" style={{ marginBottom: '20px' }} />
    <div className="texto1" style={{ textAlign: 'justify', fontFamily: 'Arial, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h3>Jorge Becerra</h3>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'  }}>
            <li>Carrera: Ingeniería Civil Informática</li>
            <li>Edad: 20 años</li>
        </ul>
        <section className="presentacion">
            <p>
                Actualmente, estoy matriculado en la carrera de Ingeniería Civil Informática, y mi viaje académico
                comenzó en el año 2021. Además de mis estudios, dedico tiempo a diversas actividades que enriquecen
                mi vida. Tengo un gran interés por el deporte, particularmente el fútbol, el cual disfruto tanto
                viendo como jugando. La música es otra pasión que me define, ya que toco la guitarra con entusiasmo,
                y encuentro en ella una forma de expresión y creatividad.
                Además, me siento atraído por los
                videojuegos de última generación, explorando mundos virtuales y desafiando mi destreza en diversas
                plataformas. Con 20 años de edad, considero que mi enfoque y madurez en mis estudios y actividades
                resaltan cualidades prometedoras para mi crecimiento personal y profesional.
            </p>
        </section>
    </div>
</div>
        </div>
    </div>
  );
}

export default Acerca;
