import styled from "styled-components";
import { useState } from "react";

const Header = () => {
  const [burgerState, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burgerState);
  };

  return (
    <StyledHeader className="main-head">
      <nav>
        <h1 id="logo">Shamo Naghiyev</h1>
        <ul className={`nav-links ${burgerState ? "nav-open" : ""}`}>
          <li>
            <a onClick={toggleBurger} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={toggleBurger} href="#work">
              Work
            </a>
          </li>
          <li>
            <a onClick={toggleBurger} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div
          onClick={toggleBurger}
          className={`burger ${burgerState ? "toggle" : ""}`}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  position: relative;

  nav {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    min-height: 10vh;
    padding: 2rem 0rem;
  }

  #logo {
    flex: 1 1 20rem;
  }

  .nav-links {
    display: flex;
    justify-content: space-around;
    flex: 1 1 20rem;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 842px) {
    .burger {
      position: relative;
      display: block;
      cursor: pointer;
    }

    .burger {
      span {
        padding: 0.2rem 2rem;
        background: #525252;
        margin: 0.5rem 0rem;
        display: block;
      }
    }

    .nav-links {
      background: #414141;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 100%;
      flex-direction: column;
      align-items: center;
      transition: transform 1s ease;

      a {
        color: white;
        font-size: 3rem;
        text-decoration: underline;
      }
    }

    .nav-open {
      transform: translateX(-100%);
    }

    .toggle .line1 {
      transform: rotateZ(45deg) translateY(300%);
      background: white;
    }

    .toggle .line2 {
      opacity: 0;
    }

    .toggle .line3 {
      transform: rotateZ(-45deg) translateY(-300%);
      background: white;
    }
  }
`;
