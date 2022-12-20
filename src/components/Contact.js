import styled from "styled-components";
import contactImage from "../img/contact-image.jpg";

const Contact = () => {
  return (
    <StyledSection className="contact" id="contact">
      <div className="form-wrapper flex">
        <h2>
          Bizimlə <br />
          <span> Əlaqə👇🏻</span>
        </h2>
        <form>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <img src={contactImage} alt="shmnghyv" width={642} height={919} />
    </StyledSection>
  );
};

export default Contact;

const StyledSection = styled.section`
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;

  .form-wrapper {
    flex: 3 1 40rem;

    h2 {
      margin: 5rem 0rem;
    }

    span {
      font-size: 2.4rem;
      color: #906272;
    }
  }

  img {
    flex: 1 1 40rem;
  }

  label {
    display: block;
  }

  input {
    display: block;
    margin: 3rem 0rem;
    background: #414141;
    color: white;
    border: none;
    width: 100%;

    :focus {
      border: 4px solid rgb(148, 148, 197);
    }
  }

  button {
    padding: 1rem 8rem;
    background: #906272;
    color: white;
    border: none;
    width: 100%;

    :focus {
      background: #414141;
      color: white;
    }
  }

  @media screen and (max-width: 842px) {
    img {
      display: none;
    }
  }
`;
