import React from "react";
import Container from "react-bootstrap/Container";

import * as S from "./styles";

function Media() {
  return (
    <>
      <Container>
        <S.MainHeader>Media</S.MainHeader>
        <S.CenterContainer>
          <p>17th Karmapa Orgyen Thinley</p>
          <S.StyledReactPlayer url="https://m.youtube.com/watch?v=jczsIm7hRvk" />
          <p>Ani Choying Drolma</p>
          <S.StyledReactPlayer url="https://youtu.be/Ugy-nlJQqaI" />
          <p>Chogyal Namkhai Norbu Rinpoche</p>
          <S.StyledReactPlayer url="https://m.youtube.com/watch?v=qaodaMwT6Ic#menu" />
          <p>Jamgon Kongtrul Rinpoche</p>
          <S.StyledReactPlayer url="https://youtu.be/kTI5ThNTeuo" />
          <p>Lama Gyurme</p>
          <S.StyledReactPlayer url="https://youtu.be/mnnIafds1Tw" />
          <p>H.E. Chagdud Tulku Rinpoche</p>
          <S.StyledReactPlayer url="https://youtu.be/pfeBhl59mEg" />
          <p>Nyoshul Khen Rinpoche</p>
          <S.StyledReactPlayer url="https://youtu.be/9QNqp8gp904" />
        </S.CenterContainer>
      </Container>
    </>
  );
}

export default Media;
