import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Gallery from "./Gallery";
import Guidelines from "./Guidelines";
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
import OrgyenTobgyal from "./Teachings/OrgyenTobgyal";
import LamaTharchin from "./Teachings/LamaTharchin";
import TaklungTsetrul from "./Teachings/TaklungTsetrul";
import LamaRangbar from "./Teachings/LamaRangbar";

function Screens() {
  return (
    <Router primary={false}>
      <Home path="/" />
      <Gallery path="/gallery" />
      <Teachings path="/teachings" />
      <Sadhanas path="/sadhanas" />
      <Guidelines path="/guidelines" />
      <Media path="/media" />
      <HHDudjomRinpoche path="/teachings/hh-dudjom-rinpoche" />
      <JamgonMipham path="/teachings/jamgon-mipham" />
      <YangthangTulku path="/teachings/yangthang-tulku" />
      <PemaGarwang path="/teachings/terton-pema-garwang" />
      <LamaSangdu path="/teachings/lama-sangdu" />
      <OrgyenTobgyal path="/teachings/orgyen-tobgyal" />
      <LamaTharchin path="/teachings/lama-tharchin" />
      <TaklungTsetrul path="/teachings/taklung-tsetrul" />
      <LamaRangbar path="/teachings/lama-rangbar" />
      <ShowerOfBlessings path="/sadhanas/sob" />
      <ShowerOfBlessingsAddendum path="/sadhanas/sob-addendum" />
    </Router>
  );
}

export default Screens;
