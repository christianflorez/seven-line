import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { colors } from "common/constants";

export const CenterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const MainHeader = styled.h1`
  margin: 2rem 0 3rem 0;
`;

export const CallToAction = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const EmphasizedParagraph = styled.p`
  font-size: 1.3rem;
  font-style: italic;
`;

export const AccumulationsButton = styled(Button)`
  width: 15rem;
  background-color: ${colors.lightBlue};
  border-color: ${colors.lightBlue};

  &&:hover {
    background-color: ${colors.yellow};
    border-color: ${colors.yellow};
  }
`;

export const Image = styled.img`
  max-height: 40rem;
  margin-bottom: 2rem;
`;

export const ImageCaption = styled.p`
  margin-bottom: 4rem;
  font-style: italic;
`;

export const PageHeader = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
