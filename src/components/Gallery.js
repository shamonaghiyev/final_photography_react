import styled from "styled-components";
import gallery1 from "../img/gallery-1.jpg";
import gallery2 from "../img/gallery-2.jpg";
import gallery3 from "../img/gallery-3.jpg";
import gallery4 from "../img/gallery-4.jpg";

const Gallery = () => {
  return (
    <StyledGallery className="gallery" id="gallery">
      <header className="gallery-head">
        <h2>Quality Photography</h2>
        <p>My work pictures that I took</p>
      </header>
      <img src={gallery1} alt="man in suit" className="gallery1" />
      <img src={gallery2} alt="lady in coat" className="gallery2" />
      <img src={gallery3} alt="lady in t-shirt" className="gallery3" />
      <img src={gallery4} alt="lady in jacket" className="gallery4" />
    </StyledGallery>
  );
};

export default Gallery;

const StyledGallery = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  .gallery1 {
    grid-column: 1/3;
  }

  .gallery2 {
    grid-column: 3/4;
    grid-row: 1/3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gallery-head {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background: #414141;
    padding: 5rem 10rem;
    text-align: center;
  }

  @media screen and (max-width: 842px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

    img {
      grid-row: auto;
      grid-column: auto;
    }

    .gallery-head {
      display: none;
    }
  }
`;
