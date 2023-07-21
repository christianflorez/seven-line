import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
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
import DawaChhodak from "./Teachings/DawaChhodak";

function Screens() {
  return (
    <Router primary={false}>
      <Home path="/" />
      <Gallery path="/gallery" />
      <Guidelines path="/guidelines" />
      <Media path="/media" />
      <Sadhanas path="/sadhanas" />
      <ShowerOfBlessings path="/sadhanas/sob" />
      <ShowerOfBlessingsAddendum path="/sadhanas/sob-addendum" />
      <Teachings path="/teachings" />
      <HHDudjomRinpoche path="/teachings/hh-dudjom-rinpoche" />
      <JamgonMipham path="/teachings/jamgon-mipham" />
      <LamaRangbar path="/teachings/lama-rangbar" />
      <LamaSangdu path="/teachings/lama-sangdu" />
      <LamaTharchin path="/teachings/lama-tharchin" />
      <OrgyenTobgyal path="/teachings/orgyen-tobgyal" />
      <PemaGarwang path="/teachings/terton-pema-garwang" />
      <TaklungTsetrul path="/teachings/taklung-tsetrul" />
      <YangthangTulku path="/teachings/yangthang-tulku" />
      <DawaChhodak path="/teachings/dawa-chhodak" />
    </Router>
  );
}

export default Screens;
