import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Teachings from "./Teachings";
import HHDudjomRinpoche from "./Teachings/HHDudjomRinpoche";
import JamgonMipham from "./Teachings/JamgonMipham";

function Screens() {
  return (
    <Router primary={false}>
      <Home path="/" />
      <Teachings path="/teachings" />
      <HHDudjomRinpoche path="/teachings/hh-dudjom-rinpoche" />
      <JamgonMipham path="/teachings/jamgon-mipham" />
    </Router>
  );
}

export default Screens;
