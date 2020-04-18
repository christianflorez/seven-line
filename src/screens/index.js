import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Teachings from "./Teachings";
import HHDudjomRinpoche from "./Teachings/HHDudjomRinpoche";
import JamgonMipham from "./Teachings/JamgonMipham";
import YangthangTulku from "./Teachings/YangthangTulku";
import LamaSangdu from "./Teachings/LamaSangdu";
import PemaGarwang from "./Teachings/PemaGarwang";

function Screens() {
  return (
    <Router primary={false}>
      <Home path="/" />
      <Teachings path="/teachings" />
      <HHDudjomRinpoche path="/teachings/hh-dudjom-rinpoche" />
      <JamgonMipham path="/teachings/jamgon-mipham" />
      <YangthangTulku path="/teachings/yangthang-tulku" />
      <PemaGarwang path="/teachings/terton-pema-garwang" />
      <LamaSangdu path="/teachings/lama-sangdu" />
    </Router>
  );
}

export default Screens;
