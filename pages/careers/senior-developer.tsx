import { Layout } from '../../layouts/article/layout';
import React from 'react';

const Header = () => (
  <section className="header-main">
    <article className="content">
      <h1>
        <span role="img" aria-label="springle">
          🧙‍♀️
        </span>{' '}
        Kokenut web&#8209;kehittäjä
      </h1>
      <p>
        <strong>Kenelle:</strong> Mid tai senior -tason modernin webbikehityksen
        taitaja, joka on valmis ottamaan vastuuta pienistä projekteista ja
        junnummista työntekijöistä
      </p>
      <p>
        <strong>Sijainti:</strong> Tampere
      </p>
      <p>
        <strong>Palkka:</strong> 3500&nbsp;–&nbsp;5500€
      </p>
    </article>

    <style jsx>{`
      .header-main {
        display: flex;
      }
      .content {
        width: 60%;
      }

      @media (max-width: 1150px) {
        .content {
          width: auto;
        }
      }
    `}</style>
  </section>
);

const Page: React.FC = () => (
  <Layout
    title={'Rare Tampere - Avoimet työpaikat - Kokenut web-kehittäjä'}
    header={<Header />}
  >
    <section className="content">
      <article className="article">
        <p>
          Oletko jo hieman kokemusta kartuttanut web-kehittäjä, jota kiinnostaa
          koodaamisen lisäksi myös ohjelmistokehitystyön pehmeämmät puolet?
          Nautitko projektien speksaamisesta, prosessien kehittämisestä tai työn
          ohjaamisesta oikeaan suuntaan? Tuntuuko siistiltä, kun pystyt
          auttamaan ympärilläsi olevia työkavereita kehittymään?
        </p>
        <p>
          <strong>
            Etsimme mid tai senior -tason kehittäjää, joka on valmis ottamaan
            vastuuta projekteista ja ohjaamaan sekä koutsaamaan junnumpia
            kehittäjiämme.
          </strong>{' '}
          Voit olla myös kokenut kehittäjä, joka on valmis astumaan isompiin
          saappaisiin.
        </p>
        <p>
          Käytämme työssämme tällä hetkellä mm. seuraavia työkaluja:{' '}
          <strong>
            TypeScript, Node.js, React, AWS/Azure ja Figma. Juuri näiden
            teknologioiden syvä tuntemus ei kuitenkaan ole oleellista
          </strong>
          ; tärkeämpää on into kehittyä ja avoin mieli uusille haasteille.
        </p>
        <p>
          Uskomme, että yrityksemme on juuri niin hyvä kuin sen työntekijät, ja
          arvostammekin yrittäjähenkisyyttä ja intoa rakentaa Rarea yhdessä
          työntekijöidemme näköiseksi.{' '}
          <strong>
            Siksi osakkuus yrityksessämme on mahdollisuus, josta voimme
            keskustella.
          </strong>
        </p>
        <p>
          Otathan yhteyttä <strong>rekry@rare.fi</strong>, tai puhelimitse +358
          50 476 9925, niin keskustellaan mahdollisuuksistasi Rarella!
        </p>
      </article>
    </section>

    <style jsx>{`
      .content {
        padding: 3rem 0;
        display: flex;
        justify-content: space-between;
      }

      .article {
        width: 65%;
      }

      @media (max-width: 800px) {
        .article {
          width: 100%;
        }

        :global(.article-center) {
          background-color: rgba(255, 255, 255, 0.9);
        }
      }
    `}</style>
  </Layout>
);

export default Page;
