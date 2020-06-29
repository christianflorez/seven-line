import React from "react";
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import * as S from "./styles";

function TaklungTsetrul() {
  return (
    <>
      <Container>
        <S.PageHeader>
          Seven Line Prayer Teaching by H.H. Taklung Tsetrul Rinpoche
        </S.PageHeader>
        <S.CenterContainer>
          <ReactPlayer url="https://www.youtube.com/watch?v=n3Y7-txs_KA&feature=youtu.be" />
        </S.CenterContainer>
      </Container>
    </>
  );
}

export default TaklungTsetrul;
