import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { colors } from "common/constants";
import * as S from "./styles";

function Navigation() {
  return (
    <S.StyledNavbar expand="lg">
      <Navbar.Brand>Seven Line Prayer Accumulation</Navbar.Brand>
      <S.NavbarToggle aria-controls="basic-navbar-nav">
        <span>
          <FontAwesomeIcon icon={faBars} color={colors.white} />
        </span>
      </S.NavbarToggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/teachings">Teachings</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/sadhanas">Sadhanas</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/gallery">Gallery</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/media">Media</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/guidelines">Guidelines</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </S.StyledNavbar>
  );
}

export default Navigation;
