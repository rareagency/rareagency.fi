import { Layout } from '../../layouts/article/layout';
import React from 'react';

const Header = () => (
  <section className="header-main">
    <article className="content">
      <h1>
        {' '}
        <span role="img" aria-label="check-mark">
          📄✍️
        </span>{' '}
        Avoin hakemus
      </h1>
      <p>
        <strong>Kenelle:</strong> motivoitunut Ohjelmistokehittäjä, UX Designer,
        tai muu alan osaaja
      </p>
      <p>
        <strong>Sijainti:</strong> Tampere
      </p>
      <p>
        <strong>Palkka:</strong> neuvotellaan sopivaksi hakijan mukaan
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
    title={'Rare Tampere - Avoimet työpaikat - Avoin hakemus'}
    header={<Header />}
  >
    <section className="content">
      <article className="article">
        <p>
          Onko ydinosaamistasi webbidevaus tai UX-design, tai oletko urasi
          alussa oleva hiomaton timantti, joka on motivoitunut kehittymään
          näillä alueilla?
        </p>
        <p>
          <strong>
            Etsimme tiimiimme kokeneita alan ammattilaisia sekä sellaiseksi
            päättäväisesti tähtääviä junioreita, joiden intohimo on kehittyä ja
            auttaa ympärillä olevia työkavereita kehittymään.
          </strong>{' '}
          Oli osaamisalueesi sitten tiukka koodaus tai timanttinen design,
          haluamme kuulla sinusta!
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
