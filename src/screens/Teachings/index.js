import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "@reach/router";

import * as S from "./styles";

function Teachings() {
  return (
    <>
      <Container>
        <S.PageHeader>Teachings</S.PageHeader>
        <S.TeachingsLink>
          <Link to="hh-dudjom-rinpoche">
            His Holiness Dudjom Rinpoche Teaching On The Seven Line Prayer,
            Paris 1984
          </Link>
        </S.TeachingsLink>
        <S.TeachingsLink>
          <Link to="jamgon-mipham">
            Excerpt from Jamgon Mipham's (Mipham the Great's) commentary on the
            Seven Line Prayer titled "White Lotus"
          </Link>
        </S.TeachingsLink>
        <S.TeachingsLink>
          <Link to="yangthang-tulku">
            Teachings on the Seven Line Prayer by Yangthang Tulku Translated by
            Vanessa Turner Santa Monica, December 9, 2006
          </Link>
        </S.TeachingsLink>
        <S.TeachingsLink>
          <Link to="lama-sangdu">
            ༄༅།
            །བླ་མ་གསང་འདུས་ལས་གསུངས་པའི་ཁྱད་པར་བླ་སྒྲུབ་ཚིག་བདུན་གསོལ་འདེབས་བཞུགས།:
            Accomplishing the Lama through the Seven Line Prayer: A Special
            Teaching from the Lama Sangdü
          </Link>
        </S.TeachingsLink>
        <S.TeachingsLink>
          <Link to="terton-pema-garwang">
            Excerpt from the terma (treasure teachings) revealed by Terton Pema
            Garwang Chi-me Yungdrung Lingpa
          </Link>
        </S.TeachingsLink>
        <S.TeachingsLink>
          <Link to="orgyen-tobgyal">
            The Seven Line Prayer: The Essence of All by Orgyen Tobgyal Rinpoche
          </Link>
        </S.TeachingsLink>
        <S.TeachingsLink>
          <Link to="lama-tharchin">
            Seven Line Prayer Teaching by Lama Tharchin Rinpoche
          </Link>
        </S.TeachingsLink>
        <S.TeachingsLink>
          <Link to="taklung-tsetrul">
            Seven Line Prayer Teaching by H.H. Taklung Tsetrul Rinpoche
          </Link>
        </S.TeachingsLink>
        <S.TeachingsLink>
          <Link to="lama-rangbar">
            The Seven Line Invocation of Guru Rinpoche by Lama Rangbar
          </Link>
        </S.TeachingsLink>
      </Container>
    </>
  );
}

export default Teachings;
