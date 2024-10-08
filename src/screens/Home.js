import React from "react";
import Container from "react-bootstrap/Container";
import useAxios from "axios-hooks";

import Quote from "components/Quote";
import * as S from "./styles";

function Home() {
  const [{ data, loading }] = useAxios(
    "https://raw.githubusercontent.com/christianflorez/seven-line/master/count.json"
  );

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
          {!loading && data ? (
            <S.CallToAction>Current count: {data.count}</S.CallToAction>
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
        <p>
          The Seven-Line Prayer, an invocation of the Indian Mahasiddha named
          Padmasambhava—also often referred to as Guru Rinpoche, "Precious Guru"
          and known as the Second Buddha—is not merely a prayer. It also
          functions as a method to awaken one's own primordial wisdom-mind
          according to the profound path of Ati Yoga. Although Padmasambhava is
          a historical figure who's known for establishing the Dharma in the
          land of Tibet, removing all obstacles and training his heart
          disciples; it's also understood that he achieved a miraculous state
          beyond death through which he can spontaneously benefit all those who
          address him with heartfelt devotion. The Seven-Line Prayer is
          universally known as the best means with which to do so.
        </p>
        <p>
          One special revealer of Padmasambhava's hidden treasure teachings in
          the 20th century, widely considered to be both his emanation and
          regent, was Kyabje Dudjom Jigdral Yeshe Dorje Rinpoche (1904-1987).
          Dudjom Rinpoche's own son, heart disciple and lineage heir known as
          Dungse Shenphen Dawa Norbu Rinpoche, in the years prior to his
          Mahaparinirvana in 2018, often repeated this heartfelt advice to many
          of his disciples:
        </p>
        <S.EmphasizedParagraph>
          The most important activity to help dispel imminent global obstacles
          to peace and harmony, as well as environmental problems, disease and
          instability, is to recite and accumulate the Seven-Line Prayer.
        </S.EmphasizedParagraph>
        <p>
          At the time when Rinpoche last spoke of this in early 2018, he
          increased the number he felt would be able to shift our world's
          destructive course from one billion recitations to twenty one billion
          (21,000,000,000). The implication was that the negative potentials had
          gained so much momentum that it would require this immense number to
          turn the tide. Clearly this will require a global effort!
        </p>
        <p>
          Now this is not an effort specific to one sangha or one lineage.
          Firstly, Dungse Shenphen Dawa Norbu Rinpoche has merged with the
          dharmakaya, so he can not oversee this, although he was an initial
          inspiration. Secondly, the only way to achieve such a vast number is
          through an egalitarian spirit of collaboration among monks, nuns,
          yogis and yoginis around the world from various sanghas, monasteries,
          nunneries, gars, etc. in a way never done before. And not just
          Nyingmapas, but from all schools, anyone who feels faith and devotion
          to Guru Padmasambhava. In an inspiring example of this, Kyabje Bhakha
          Tulku Rinpoche—an emanation of the great Terton Pema Lingpa—has fully
          endorsed this global accumulation, asking all those connected with him
          to join. He also graciously agreed to compose a short piece of writing
          on the benefits of this invocation, to help encourage everyone to
          join.
        </p>
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
            href="https://eepurl.com/g0H2l1"
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
