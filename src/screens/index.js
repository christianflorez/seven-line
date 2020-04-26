import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Gallery from "./Gallery";
import Tips from "./Tips";
import Media from "./Media";
import Teachings from "./Teachings";
import ShowerOfBlessings from "./Sadhanas/ShowerOfBlessings";
import ShowerOfBlessingsAddendum from "./Sadhanas/ShowerOfBlessingsAddendum";
import Sadhanas from "./Sadhanas";
import HHDudjomRinpoche from "./Teachings/HHDudjomRinpoche";
import JamgonMipham from "./Teachings/JamgonMipham";
import YangthangTulku from "./Teachings/YangthangTulku";
import LamaSangdu from "./Teachings/LamaSangdu";
import PemaGarwang from "./Teachings/PemaGarwang";

function Screens() {
  return (
    <Router primary={false}>
      <Home path="/" />
      <Gallery path="/gallery" />
      <Teachings path="/teachings" />
      <Sadhanas path="/sadhanas" />
      <Tips path="/tips" />
      <Media path="/media" />
      <HHDudjomRinpoche path="/teachings/hh-dudjom-rinpoche" />
      <JamgonMipham path="/teachings/jamgon-mipham" />
      <YangthangTulku path="/teachings/yangthang-tulku" />
      <PemaGarwang path="/teachings/terton-pema-garwang" />
      <LamaSangdu path="/teachings/lama-sangdu" />
      <ShowerOfBlessings path="/sadhanas/sob" />
      <ShowerOfBlessingsAddendum path="/sadhanas/sob-addendum" />
    </Router>
  );
}

export default Screens;
