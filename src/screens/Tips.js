import React from "react";
import Container from "react-bootstrap/Container";

import * as S from "./styles";

function Tips() {
  return (
    <>
      <Container>
        <S.MainHeader>
          Tips on how to accumulate and when to submit:
        </S.MainHeader>
        <p>
          Please submit your monthly accumulation total once every month, so we
          can all get a sense of the progress we're making towards our goal. It
          may help to submit the number on a regular day of your choice, such as
          Guru Rinpoche day, (10th day of the waxing moon) or the first Saturday
          of every month. If you add an alert to your calendar it may help!
        </p>
        <p>
          You can use a mala or any other device to keep track of your count,
          whether you recite in a formal sitting practice or while you are
          engaged in another activity such as driving, walking, resting,
          gardening, etc.
        </p>
        <p>
          If you have a stable recitation you may be able to use time as a proxy
          for numbers. You can easily check how many you can recite in 10
          minutes by using a stopwatch and a mala. Then if you've maintained an
          uninterrupted recitation for 20 minutes without using a mala or
          counter, you can be confident enough in your total.
        </p>
        <p>
          Please make sure you enunciate all syllables and lines clearly. If you
          go too fast and slur the words, the effect is blunted and the effort
          is muddied. So please be diligent with your pronunciation.
        </p>
        <p>
          Only submit the number you've accumulated since joining this effort.
          Numbers you've accumulated in previous years prior to learning about
          this are very meritorious, just not something to include in this
          count. The intention to join the collective effort is an essential
          element.
        </p>
        <p>
          And finally, please be careful to write your numbers clearly with no
          mistakes. Only use numbers for your entry, do not use commas or
          decimal points. If you've completed ten thousand, write 10000 as
          opposed to 10.000 or 10,000.
        </p>
        <p>Thank you for joining us in this vast field of merit! </p>
      </Container>
    </>
  );
}

export default Tips;
