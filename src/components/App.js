import React from "react";
import Navigation from "components/Navigation";
import Screens from "screens";
import * as S from "./styles";

function App() {
  return (
    <S.AppContainer>
      <Navigation />
      <Screens />
    </S.AppContainer>
  );
}

export default App;
