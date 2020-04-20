import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "@reach/router";

import * as S from "./styles";

function Sadhanas() {
  return (
    <>
      <Container>
        <S.PageHeader>Sadhanas</S.PageHeader>
        <p>
          Click each title to access these Sadhanas of the Seven-Line Prayer
        </p>
        <S.SadhanaLink>
          <Link to="sob">
            Jamgon Mipham Rinpoche's profound guru yoga practice based on the
            Seven-Line Prayer titled "Shower of Blessings"
          </Link>
        </S.SadhanaLink>
        <S.SadhanaLink>
          <Link to="sob-addendum">
            A Shower of Blessings: A Guru Yoga Practice to Accompany the Seven
            Line Prayer / Addendum with Tsok Puja Composed by Mipham Rinpoche
            and arranged by Śākya Śrī
          </Link>
        </S.SadhanaLink>
      </Container>
    </>
  );
}

export default Sadhanas;
