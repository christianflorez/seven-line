import styled from "styled-components";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";
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

export const AppCallToAction = styled(CallToAction)`
  margin-top: 2rem;
`;

export const EmphasizedParagraph = styled.p`
  font-size: 1.3rem;
  font-style: italic;
`;

export const AccumulationsButton = styled(Button)`
  width: 20rem;
  height: 6rem;
  font-size: 1.6rem;
  background-color: ${colors.lightBlue};
  border-color: ${colors.lightBlue};
  display: flex;
  flex-flow: column no-wrap;
  justify-content: center;
  align-items: center;

  &&:hover {
    background-color: ${colors.yellow};
    border-color: ${colors.yellow};
  }
`;

export const EmailSignupButton = styled(Button)`
  width: 20rem;
  background-color: ${colors.yellow};
  border-color: ${colors.yellow};
  margin: 3rem 0rem;

  &&:hover {
    background-color: ${colors.lightBlue};
    border-color: ${colors.lightBlue};
  }
`;

export const Image = styled.img`
  max-height: 40rem;
  margin-bottom: 2rem;
  max-width: 95vw;
`;

export const ImageCaption = styled.p`
  margin-bottom: 4rem;
  font-style: italic;
`;

export const PageHeader = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  margin-bottom: 4rem;
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  font-size: 10px;
`;

export const PrivacyContainer = styled.div`
  > div {
    margin-top: 20px;
  }
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const BoldParagraphQuote = styled.p`
  font-weight: bold;
`;
