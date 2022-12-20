import styled from "styled-components";
import youtube from "../img/youtube.svg";
import twitter from "../img/twitter.svg";
import instagram from "../img/instagram.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <h4>Shamo Naghiyev &copy; 2022</h4>
      <ul>
        <li>
          <a href="https://www.youtube.com/@shamonaghiyev" target={"_blank"}>
            <img src={youtube} alt="youtube" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/shamonaghiyev" target={"_blank"}>
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/shamonaghiyev/" target={"_blank"}>
            <img src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background: #414141;
  color: white;
  display: flex;
  padding: 3rem 5%;
  align-items: center;
  flex-wrap: wrap;

  ul {
    display: flex;
    flex: 1 1 40rem;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    flex: 3 1 40rem;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 842px) {
    ul {
      order: 1;
    }
    h4 {
      order: 2;
      text-align: center;
      padding: 1rem;
    }
  }
`;
