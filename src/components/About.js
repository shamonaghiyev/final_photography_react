import styled from "styled-components";
import aboutImage from "../img/about-image.jpg";

const About = () => {
  return (
    <StyledAbout className="about" id="about">
      <div className="about-image">
        <h5>MINIMAL</h5>
        <img src={aboutImage} alt="portrait" />
      </div>
      <div className="about-text flex" id="work">
        <h2>Shamo Naghiyev</h2>
        <div className="about-life">
          <h3>My Life</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            maxime reprehenderit. Assumenda necessitatibus id consectetur
            asperiores harum dolore nihil fuga?
          </p>
        </div>
        <div className="about-work">
          <h3>My Work</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            maxime reprehenderit. Assumenda necessitatibus id consectetur
            asperiores harum dolore nihil fuga?
          </p>
        </div>
        <div className="about-contact">
          <h3>Get in touch</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            maxime reprehenderit. Assumenda necessitatibus id consectetur
            asperiores harum dolore nihil fuga?
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.section`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;

  .about-text {
    color: white;
    background: #414141;
    flex: 2 1 40rem;
    justify-content: space-around;

    div {
      padding: 3rem 10rem;
    }

    h3 {
      padding: 2rem 0rem;
      font-family: "Frank Ruhl Libre", serif;
    }

    h2 {
      padding: 4rem;
      font-family: "Great Vibes", cursive;
    }
  }

  .about-image {
    flex: 1 1 40rem;
    position: relative;

    h5 {
      position: absolute;
      letter-spacing: 2rem;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -20%);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 842px) {
    .about-text {
      div {
        padding: 3rem 3rem;
      }
    }
  }
`;
