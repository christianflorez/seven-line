import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS } from "@contentful/rich-text-types";
import numeral from "numeral";
import useContentful from "services/contentful";
import Quote from "components/Quote";
import { useGetCount } from "services/countapi";
import * as S from "./styles";

function Home() {
  const { data, isLoading } = useContentful("home");
  const { data: countValue, isLoading: countIsLoading } = useGetCount();

  if (isLoading || countIsLoading) {
    return <Spinner animation="border" role="status" />;
  }

  const options = {
    renderMark: {
      [MARKS.ITALIC]: (text) => (
        <S.EmphasizedParagraph>{text}</S.EmphasizedParagraph>
      ),
    },
  };

  return (
    <>
      <Container>
        <S.MainHeader>
          Please join the global accumulation of the Seven-Line Prayer, a
          powerful method to heal our world.
        </S.MainHeader>
        <S.CenterContainer>
          <S.Image
            src="/images/gr_thangka.jpg"
            alt="Thangka of Guru Rinpoche"
          />
        </S.CenterContainer>
        <S.CenterContainer>
          <S.CallToAction>
            Click here to add your accumulations once a month:
          </S.CallToAction>
          <S.AccumulationsButton
            variant="primary"
            size="lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6RSFP97RgzK4oZnFNikSqMwFSz_kt5oINZnIkdPp1gxgw6A/viewform?c=0&w=1"
          >
            <span>Submit Accumulations</span>
          </S.AccumulationsButton>
          {countValue ? (
            <S.CallToAction>
              Current count: {numeral(countValue.value).format("0,0")}
            </S.CallToAction>
          ) : (
            <S.CallToAction>
              Loading current accumulation count...
            </S.CallToAction>
          )}
        </S.CenterContainer>
        <Quote author="Mipham the Great (1846-1912)">
          Of all the prayers to the great and glorious master of Oddiyana,
          embodiment of all Buddhas past, present, and to come, the invocation
          composed of seven vajra verses is supreme.
        </Quote>
        <Quote author="H.H. Dudjom Rinpoche (1904-1987)">
          There is no need to get bogged down in the complexities of the kyerim
          and things like that which we don't really understand. Simply doing
          this practice [the Seven-Line Prayer] alone is sufficient.
        </Quote>
        <Quote author="Padmasambhava">
          In the future during the darkest of times—although there exists a
          great variety of beneficent buddhas and deities—invoking me, Orgyen
          Padma Jungne, will bring the greatest benefit
        </Quote>
        <h2>
          Why we are joining together to recite 21,000,000,000 and why this
          invocation is so powerful:
        </h2>
        {documentToReactComponents(data.items[0].fields.main, options)}
        <S.CenterContainer>
          <S.Image
            src="/images/7lp-bt-1.jpg"
            alt="Text of the Seven Line Prayer in Tibetan and English"
          />
          <S.Image
            src="/images/7lp-bt-2.jpg"
            alt="Bhaka Tulku's Writing on the benefits of the Seven Line Prayer (in English) - Page 2"
          />
        </S.CenterContainer>
        <S.CenterContainer>
          <S.Image
            src="/images/btcalligraphy.jpg"
            alt="Photo of a hand carved stone with Bhakha Tulku Rinpoche’s calligraphy of the Seven Line Prayer"
          />
          <S.ImageCaption>
            Photo of a hand carved stone with Bhakha Tulku Rinpoche’s
            calligraphy of the Seven Line Prayer
          </S.ImageCaption>
        </S.CenterContainer>
        <p>
          Already we have accumulated a great number, and are approaching 200
          million, however this is a small portion of the vast goal. So please
          join and spread the word, and encourage others to as well. If everyone
          joins in with joyful diligence it is certain that we can accomplish
          our goal.
        </p>
        <p>
          Each person who joins a vast collective accumulation like this—no
          matter the amount they contribute—gathers the same merit as if they
          had achieved the total on their own.
        </p>
        <p>
          So let's use this time when millions of us in many countries are
          forced to stay at home wisely, to progress in this accumulation for
          our own protection and for everyone's benefit. And please share this
          website as widely as possible.
        </p>
        <p>
          Make sure to click the links in the menu for teachings, events,
          sadhanas and more. If you have any questions, email
          sevenlineprayeraccumulation@gmail.com
        </p>
        <S.CenterContainer>
          <S.EmailSignupButton
            variant="primary"
            size="lg"
            href="https://sevenlineprayer.us4.list-manage.com/subscribe/post?u=938505ce5a3186bedb1e0017d&amp;id=d9e5cd098f"
          >
            Signup for our Email List here
          </S.EmailSignupButton>
        </S.CenterContainer>
        <Quote author="Terton Pema Garwang Chi-me Yungdrung Lingpa">
          The way to accomplish oneself as Guru Rinpoche, is all rooted in the
          Seven-Line Prayer
        </Quote>
        <S.CenterContainer>
          <S.Image
            src="/images/looks_like_me.jpg"
            alt="Looks Like Me Guru Rinpoche Statue"
          />
        </S.CenterContainer>
        <Quote author="Yangthang Tulku Rinpoche (1930–2016)">
          If you really recite this prayer from your heart, then there's no way
          that you can avoid bringing Guru Rinpoche forth and invoking him. So
          it's extremely powerful. And you should practice it at all times
          continually. . . If you really focus on the Seven-Line Prayer, then it
          is certain that the blessings will come. The blessings of Guru
          Rinpoche will spring out and be born in your mind stream.
        </Quote>
        <S.CenterContainer>
          <S.Image
            src="/images/sdr.jpg"
            alt="Dungse Shenphen Dawa Norbu Rinpoche"
          />
          <S.ImageCaption>Dungse Shenphen Dawa Norbu Rinpoche</S.ImageCaption>

          <S.Image
            src="/images/gallery/gdc.jpg"
            alt="Guru Dewa Chenpo Statue"
          />
          <S.ImageCaption>
            A sacred terma statue of Guru Rinpoche known as Guru Dewa Chenpo,
            said to liberate one upon seeing it. This was one of the most
            precious items kept by Kyabje Dudjom Jigdral Yeshe Dorje Rinpoche,
            who would often sit in meditation with it. While he meditated with
            it, it would shed tears of amrita.
          </S.ImageCaption>
          <S.Image
            src="/images/gallery/IMG_3158.JPG"
            alt="Guru Nangsi Zilnon Statue"
          />
          <S.ImageCaption>
            "Guru Nangsi Zilnon" statue of Guru Rinpoche made entirely out of
            mendrup / dutsi by Kyabje Dudjom Jigdral Yeshe Dorje Rinpoche
          </S.ImageCaption>
          <S.Image
            src="/images/gallery/IMG_3131.JPG"
            alt="Embroidered thangka of Guru Rinpoche made by Kyabje Dudjom Jigdral Yeshe Dorje Rinpoche's eldest daughter"
          />
          <S.ImageCaption>
            Special embroidered thangka of Guru Rinpoche made by Kyabje Dudjom
            Jigdral Yeshe Dorje Rinpoche's eldest daughter Semo Dechen Yudron.
          </S.ImageCaption>
          <S.Image src="/images/btr.jpg" alt="Photo of Bhaka Tulku Rinpoche" />
          <S.ImageCaption>Bhaka Tulku Rinpoche</S.ImageCaption>
        </S.CenterContainer>
      </Container>
    </>
  );
}

export default Home;
