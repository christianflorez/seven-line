import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { colors } from "common/constants";

export const AppContainer = styled.div`
  background-color: ${colors.white};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.secondary};
  }
`;

export const StyledNavbar = styled(Navbar)`
  background-color: ${colors.primary};
  > span.navbar-brand,
  > span.navbar-brand:hover,
  > div a {
    color: ${colors.white};
  }

  > span.navbar-brand {
    cursor: default;
  }
`;

export const Blockquote = styled.blockquote`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem !important; /* Bootstrap has an !important margin-bottom property that must be overridden */
  > p {
    font-style: italic;
    margin-bottom: 0.2rem;
  }
`;
