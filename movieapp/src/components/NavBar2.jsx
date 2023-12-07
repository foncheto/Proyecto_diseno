import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import Logo from "../download.png";
import { Link } from "react-router-dom";

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
       <NavContainer>
      <Link to="/">
          <img src={Logo} className="w-[60px]" alt="Logo" style={{marginLeft: "0px"}}/>
        </Link>
        <input
  type="text"
  placeholder="Buscar en FilmoRanking"
  style={{
    display: 'block',
    margin: 'auto',
    border: '2px solid black',
    borderRadius: '5px',
    padding: '8px',
    width: '300px', // Puedes ajustar el ancho según tu preferencia
  }}
/>
        <div className={`links ${clicked ? 'active' : ''}`} style={{ marginRight: "20px"}}>
        <a onClick={handleClick} href="/" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}>Home</a>
          <a onClick={handleClick} href="/peliculas" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}>Films</a>
          <a onClick={handleClick} href="/series" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}>Series</a>
          <a onClick={handleClick} href="/ranking" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}>Ranking</a>
          <a onClick={handleClick} href="/contacto" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}>Contact</a>
          <a onClick={handleClick} href="/acerca" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}>About Us</a>
            <a onClick={handleClick} href="/Login" style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}>Log In</a>
            <a onClick={handleClick} href="/  " style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}>Sign Up</a>
        </div>
        <div className='burguer'>
            <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 3%;
    left: 0;
    right: -50px;
    text-align: center;
    z-index: 2;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
    z-index: 3;
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    background-color: black;
    position: absolute;
    top: -570px;;
    left:   0px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`