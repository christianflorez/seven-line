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
          <p>
            From the Doha Songs collection produced by Dzam Studios of the
            Tsogyelgar Community
          </p>
          <S.StyledReactPlayer url="https://www.youtube.com/watch?v=tO1yoEn4-Xo&feature=youtu.be" />
          <p>Translation from Erik Pema Kunsang , vocals by Rodrigo Reijers</p>
          <S.StyledReactPlayer url="https://www.youtube.com/watch?v=5F5W1opsz_g&feature=youtu.be&app=desktop" />
          <p>Tulku Orgyen Thinley Norbu and Chagdud Tulku</p>
          <S.StyledReactPlayer url="https://www.youtube.com/watch?feature=share&v=wb1_DW3iWyM&app=desktop" />
        </S.CenterContainer>
      </Container>
    </>
  );
}

export default Media;
