import React from "react";

import * as S from "./styles";

function Quote({ children, author }) {
  return (
    <S.Blockquote className="blockquote mb-0">
      <p>{children}</p>
      {author && <footer className="blockquote-footer">{author}</footer>}
    </S.Blockquote>
  );
}

export default Quote;
