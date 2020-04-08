import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";

function Screens() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default Screens;
