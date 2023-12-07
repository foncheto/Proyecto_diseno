import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import Logo from "../download.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <Link to="/">
          <img
            src={Logo}
            className="w-[60px]"
            alt="Logo"
            style={{ marginLeft: "0px" }}
          />
        </Link>
        <div
          className={`links ${clicked ? "active" : ""}`}
          style={{ marginRight: "20px" }}
        >
          <Link
            to="/"
            style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}
          >
            Home
          </Link>
          <Link
            to="/peliculas"
            style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}
          >
            Films
          </Link>
          <Link
            to="/series"
            style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}
          >
            Series
          </Link>
          <Link
            to="/ranking"
            style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}
          >
            Ranking
          </Link>
          <Link
            to="/contacto"
            style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}
          >
            Contact
          </Link>
          <Link
            to="/acerca"
            style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}
          >
            About Us
          </Link>
          <Link
            to="/Login"
            style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}
          >
            Log In
          </Link>
          <Link
            to="/registrarse"
            style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}
          >
            Sign Up
          </Link>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
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
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
    z-index: 3;
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    background-color: black;
    position: absolute;
    top: -570px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
