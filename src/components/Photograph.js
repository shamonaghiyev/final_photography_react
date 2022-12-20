import styled from "styled-components";
import shmnghyv from "../img/shmnghyv.JPG";

const Photograph = () => {
  return (
    <StyledSection className="hero">
      <div className="hero-introduction flex">
        <h2>
          Shamo Naghiyev <br />
          Photography
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima
          assumenda expedita similique quaerat maiores ab, itaque hic explicabo
          eaque!
        </p>
        <a href="#gallery">Gallery</a>
      </div>
      <div className="hero-images">
        <img className="hero-shm" src={shmnghyv} alt="shm" />
      </div>
    </StyledSection>
  );
};

export default Photograph;

const StyledSection = styled.section`
  min-height: 90vh;
  width: 95%;
  margin: auto;
  margin: 0 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  a {
    text-decoration: none;
    color: black;
  }

  .hero-introduction {
    flex: 2 1 40rem;
    text-align: center;
    p {
      padding: 5rem 10rem;
    }
    h2 {
      padding-top: 3rem;
    }
    a {
      padding: 2rem 8rem;
      border: 3px solid black;
      margin-bottom: 4rem;
    }
  }

  .hero-images {
    flex: 1 1 40rem;
    background: linear-gradient(#dad8dd, #dad1d4);
    position: relative;
    z-index: 1;
  }

  .hero-shm {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

 

  @media screen and (max-width: 842px) {
    width: 100%;

    .hero-introduction {
      p {
        padding: 5rem 3rem;
        color: #525252;
      }
    }
  }
`;
