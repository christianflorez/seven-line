import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navigation from "./Navigation";
import Screens from "./screens";

const jumbotronStyle = {
  backgroundImage: "url(./images/gr_thangka.jpg)",
  height: "25rem",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

function App() {
  return (
    <>
      <Navigation />
      <Jumbotron style={jumbotronStyle}></Jumbotron>
      <Container>
        <Screens />
      </Container>
    </>
  );
}

export default App;
