import React from "react";
import Container from "react-bootstrap/Container";
import Quote from "components/Quote";
import * as S from "./styles";

function PemaGarwang() {
  return (
    <>
      <Container>
        <S.TeachingsHeader>
          Excerpt from the terma (treasure teachings) revealed by Terton Pema
          Garwang Chi-me Yungdrung Lingpa:
        </S.TeachingsHeader>
        <Quote author="Excerpted from Thinley Norbu Rinpoche’s commentary on the Seven-Line Prayer titled “The Sole Panacea”, published by Shambhala">
          <p>The way to accomplish oneself as Guru Rinpoche</p>
          <p>Is all rooted in the Seven-Line Prayer.</p>
          <p>The seven consciousnesses of the basis, </p>
          <p>While on the path, become the seven branches of enlightenment. </p>
          <p>The result is perfected in the seven absolute treasures. </p>
          <p>In this way, with the sound of the vajra melody, </p>
          <p>The moment you invoke me, I, Padmasambhava, </p>
          <p>Have no choice but to come to bless you. </p>
        </Quote>
      </Container>
    </>
  );
}

export default PemaGarwang;
