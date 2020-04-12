import React from "react";
import { Link } from "@reach/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import * as S from "./styles";

function Navigation() {
  return (
    <S.StyledNavbar expand="lg">
      <Navbar.Brand>Seven Line Prayer Accumulation</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/teachings">Teachings</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </S.StyledNavbar>
  );
}

export default Navigation;
