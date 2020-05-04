import React from "react";
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import * as S from "./styles";

function LamaTharchin() {
  return (
    <>
      <Container>
        <S.PageHeader>
          Seven Line Prayer Teaching by Lama Tharchin Rinpoche
        </S.PageHeader>
        <S.CenterContainer>
          <ReactPlayer url="https://soundcloud.com/lamatharchinrinpoche/seven-line-prayer-teaching-nyc-2011-04-28" />
        </S.CenterContainer>
      </Container>
    </>
  );
}

export default LamaTharchin;
