import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Admin from "./Admin";
import Gallery from "./Gallery";
import Guidelines from "./Guidelines";
import Media from "./Media";
import Sadhanas from "./Sadhanas";
import ShowerOfBlessings from "./Sadhanas/ShowerOfBlessings";
import ShowerOfBlessingsAddendum from "./Sadhanas/ShowerOfBlessingsAddendum";
import Teachings from "./Teachings";
import HHDudjomRinpoche from "./Teachings/HHDudjomRinpoche";
import JamgonMipham from "./Teachings/JamgonMipham";
import LamaRangbar from "./Teachings/LamaRangbar";
import LamaSangdu from "./Teachings/LamaSangdu";
import LamaTharchin from "./Teachings/LamaTharchin";
import OrgyenTobgyal from "./Teachings/OrgyenTobgyal";
import PemaGarwang from "./Teachings/PemaGarwang";
import TaklungTsetrul from "./Teachings/TaklungTsetrul";
import YangthangTulku from "./Teachings/YangthangTulku";

function Screens() {
  return (
    <Router primary={false}>
      <Home path="/" />
      <Admin path="/admin" />
      <Gallery path="/gallery" />
      <Guidelines path="/guidelines" />
      <Media path="/media" />
      <Sadhanas path="/sadhanas" />
      <ShowerOfBlessings path="/sadhanas/sob" />
      <Teachings path="/teachings" />
      <ShowerOfBlessingsAddendum path="/sadhanas/sob-addendum" />
      <HHDudjomRinpoche path="/teachings/hh-dudjom-rinpoche" />
      <JamgonMipham path="/teachings/jamgon-mipham" />
      <LamaRangbar path="/teachings/lama-rangbar" />
      <LamaSangdu path="/teachings/lama-sangdu" />
      <LamaTharchin path="/teachings/lama-tharchin" />
      <OrgyenTobgyal path="/teachings/orgyen-tobgyal" />
      <PemaGarwang path="/teachings/terton-pema-garwang" />
      <TaklungTsetrul path="/teachings/taklung-tsetrul" />
      <YangthangTulku path="/teachings/yangthang-tulku" />
    </Router>
  );
}

export default Screens;
