import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";

export const StyledJumbotron = styled(Jumbotron)`
  background-image: url(./images/gr_thangka.jpg);
  height: 25rem;
  background-repeat: no-repeat;
  background-position: center 33%;
  background-size: cover;
  box-shadow: inset 0 0 25rem black;

  h1 {
    color: white;
    width: 40%;
  }

  @media (max-width: 900px) {
    h1 {
      width: 100%;
    }
  }
`;
