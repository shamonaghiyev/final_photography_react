import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Frank Ruhl Libre', serif;
    animation: opening 1s ease-in-out;
  }

  h1 {
    font-family: 'Great Vibes', cursive;
    font-size: 2.6rem;
  }

  li, button, label, input, p, a{
    font-size: 2rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4, h5 {
    font-size: 2.4rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @keyframes opening {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
