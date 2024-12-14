import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "@reach/router";
import useAxios from "axios-hooks";
import numeral from "numeral";

import Quote from "components/Quote";
import * as S from "./styles";

function Home() {
  const [{ data, loading }] = useAxios({
    url: "https://seven-line-prayer.azurewebsites.net/api/AccumulationTrigger/",
  });

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
            <S.CallToAction>
              Current count: {numeral(data.count).format("0,0")}
            </S.CallToAction>
          ) : (
            <S.CallToAction>
              Loading current accumulation count...
            </S.CallToAction>
          )}
          <S.AppCallToAction>
            We are thrilled to announce the new interactive mobile app with
            which you can make direct submissions, and even use the digital Mala
            feature to assist your counting!
          </S.AppCallToAction>
          <S.CallToAction>
            Download the app for free on iPhones or iPads{" "}
            <a href="https://apps.apple.com/us/app/seven-line-prayer/id6478575573">
              here
            </a>{" "}
            at the Apple App Store, and for Android devices{" "}
            <a href="https://play.google.com/store/apps/details?id=org.scryn.sevenlineprayer&pcampaignid=web_share">
              here
            </a>{" "}
            on Google Play.
          </S.CallToAction>
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
          The Seven-Line Prayer, (Tib. ཚིག་བདུན་གསོལ་འདེབས་, Wyl. tshig bdun
          gsol 'debs) also known as the Seven Vajra Verses, is an invocation of
          the Indian Mahasiddha known as Padmasambhava, commonly referred to
          simply as Guru Rinpoche, "Precious Guru". Fully awakened from the
          moment of his extraordinary birth, Padmasambhava was prophesied by
          Buddha Shakyamuni, and is renowned as the Second Buddha. While he is a
          historical figure, known for establishing the Dharma in Tibet by
          removing all obstacles and training his heart disciples; it's also
          believed that he achieved a miraculous state beyond death through
          which he can spontaneously benefit all those who address him with
          heartfelt devotion. This Seven-Line Prayer is universally known as the
          best means with which to do so. Yet these seven vajra verses do not
          merely form a prayer or invocation, they are also a special method to
          awaken one's own primordial wisdom-mind according to the profound
          practice of Dzogchen (Skt. Mahāsaṅdhi), the Great Perfection.
        </p>
        <p>
          One special revealer of Padmasambhava's hidden treasure teachings in
          the 20th century, widely considered to be both his emanation and
          regent, was{" "}
          <S.Name>Kyabje Dudjom Jigdral Yeshe Dorje Rinpoche</S.Name>{" "}
          (1904-1987). Dudjom Rinpoche's own son, heart disciple and lineage
          heir known as <S.Name>Dungse Shenphen Dawa Norbu Rinpoche</S.Name> —
          himself an accomplished siddha—in the years prior to his miraculous
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
          Although Dungse Shenphen Dawa Norbu Rinpoche was the initial
          inspiration for this global effort, he has merged with the dharmakaya,
          so he can not oversee this ongoing effort. What's more, the only way
          to achieve such a vast number is through an egalitarian spirit of
          collaboration among lineage masters, monks, nuns, ngakpas, householder
          yogis and yoginis—anyone with interest without limit from around the
          world—in a way never done before. And not just Nyingmapas, but from
          all schools, anyone who feels faith and devotion to Guru
          Padmasambhava. More and more great masters from all lineages have been
          emphasizing the need to invoke Guru Rinpoche above all other deities
          during this time of intensifying obstacles, and many support this
          global accumulation.
        </p>
        <p>
          <S.Name>
            His Holiness Kyabgon Gongma Trichen Rinpoche (the Sakya Trichen)
          </S.Name>{" "}
          agreed we should share these words of his here to encourage
          participation:
        </p>
        <Quote>
          "Through [Guru Padmasambhava's] great kindness and blessings Buddhism
          was able to be established in Tibet, and also flourished all over
          Tibet and was maintained for the last, so many years! And even now,
          also at this very critical time, when people have so much troubles:
          wars, disasters, earthquakes, epidemics, and all kinds of problems we
          are facing—I think all the Buddhas are the same—but it's far easier to
          invoke our own karmically linked [Buddha]: Guru Padmasambhava."
        </Quote>
        <p>
          One great Dzogchen master who has always emphasized the Seven Line
          Prayer as a primary practice,{" "}
          <S.Name>Kyabje Bhakha Tulku Rinpoche</S.Name> — an emanation of the
          great Terton Pema Lingpa—has fully endorsed this global accumulation,
          asking all those connected with him to join. He also graciously agreed
          to compose a short piece of writing on the benefits of this
          invocation, to help encourage everyone:
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
            alt="Photo of a hand carved stone with Bhakha Tulku Rinpoche's calligraphy of the Seven Line Prayer"
          />
          <S.ImageCaption>
            Photo of a hand carved stone with Bhakha Tulku Rinpoche's
            calligraphy of the Seven Line Prayer
          </S.ImageCaption>
        </S.CenterContainer>
        <p>
          The great living Terton, <S.Name>Namkha Drimed Rinpoche</S.Name> has
          also emphasized the importance of this accumulation and supports
          everyone's participation, sharing with us this powerful statement:
        </p>
        <Quote>
          <p>
            We face a time of mara-activity, with the wars and the fighting
            raging on, with the negative forces, terrorism and such, and people
            acting under the influence of the five poisons. All of this happens
            because beings have not tamed their five poisons of mind. And so,
            they obey the impulses of their five poisons, make evil aspirations
            and such, and many people are under this influence, many people rely
            on them, which causes huge problems. And this is a very big mistake.
          </p>
          <S.BoldParagraphQuote>
            So to counteract all these atrocities, there is no one who surpasses
            Guru Rinpoche. If you pray to Guru Rinpoche, especially in this
            degenerate age, it is said that Guru Rinpoche's incredible
            compassion, blessings and power are swifter and more powerful than
            any other Buddha, and are stronger even in these degenerate times.
          </S.BoldParagraphQuote>
          <S.BoldParagraphQuote>
            So if you pray to Guru Rinpoche, accumulate the Seven-Line Prayer to
            Guru Rinpoche and the Vajra Guru mantra, there is nothing more
            powerful than this. This is the very best thing you can do.
          </S.BoldParagraphQuote>
        </Quote>
        <p>
          Another living Terton, <S.Name>Pema Thinley Drodul</S.Name>, also
          known as <S.Name>Lama Dawa Gyaljan Rinpoche</S.Name>, shared this
          message to include here and inspire us:
        </p>
        <Quote>
          ...Every single Buddha throughout all of the three times is included
          within Guru Rinpoche. So reciting Guru Rinpoche's mantra, the Seven
          Line Prayer, and any kind of practice on Guru Rinpoche is so
          important. And the Seven Line Prayer is especially important, as in so
          many different termas (treasure revelations) every terma contains
          these same lines. Although there are a great variety of terma
          practices and sadhanas based on Guru Rinpoche with many different
          forms and aspects, in all of them the Seven Line Prayer remains the
          same. That is a sign of how fundamentally important this Seven Line
          Prayer is. And so, in a sense, we can consider this Seven Line Prayer
          as the mother of all the terma texts. So chanting this Seven Line
          Prayer is so important, so powerful, and it can remove obstacles. In
          the world these days there are so many obstacles, particularly arising
          from the five poisons. So if we can focus on practicing the Seven Line
          Prayer and accumulating it, it is so, so, so very beneficial for this
          world. This is my real inner feeling that I want to share with you,
          that it is so very important to accumulate the Seven Line Prayer.
        </Quote>
        <p>
          These are excerpted lines from the longer teaching you can find{" "}
          <Link to="/teachings/pema-thinley-drodul">here</Link>.
        </p>
        <p>
          Already we have accumulated a great number, and are approaching 200
          million, however this is a small portion of the vast goal. So please
          join and spread the word, and encourage others to as well. If everyone
          joins in with joyful diligence it is certain that we can accomplish
          our goal. Each person who joins a vast collective accumulation like
          this—no matter the amount they contribute—gathers the same merit as if
          they had achieved the total on their own. So share this website and
          the Seven Line Prayer app as widely as possible. Make sure to click
          the links in the menu for teachings, events, sadhanas and more. If you
          have any questions, email sevenlineprayeraccumulation@gmail.com
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
