import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { colors } from "common/constants";

export const StyledJumbotron = styled(Jumbotron)`
  background-image: url(./images/gr_thangka.jpg);
  height: 25rem;
  background-repeat: no-repeat;
  background-position: center 33%;
  background-size: cover;
  box-shadow: inset 0 0 25rem black;
  border-radius: 0px;

  h1 {
    color: ${colors.white};
    width: 40%;
  }

  @media (max-width: 900px) {
    h1 {
      width: 100%;
    }
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const AccumulationsButton = styled(Button)`
  width: 15rem;
  background-color: ${colors.secondary};
  border-color: ${colors.secondary};

  &&:hover {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  }
`;
