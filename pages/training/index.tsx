import React from 'react';
import { Layout } from '../../layouts/article/layout';

const Header = () => (
  <section className="header-main">
    <article className="content">
      <h1>Workshopit</h1>
      <p className="description">
        Teknologisen keihään kärjellä työskentely tarkoittaa, että meillä on
        myös paljon tietoa, jota voimme jakaa muille. Rare järjestää koulutuksia
        uusimmista teknologiatrendeistä, ohjelmistokehityksen parhaista
        käytännössä ja tiimityöskentelyprosesseista.
        <br />
        <br />
        Koulutuksemme ovat aina käytännönläheisiä, kädet saveen - asenteella
        varustettuja päiviä joiden aikana jaamme kokemusta, jota ei löydy
        Googlaamalla. Tuomme mielellämme koulutuksen teidän työnne kontekstiin,
        jotta sitä on helppo soveltaa koulutuksen jälkeen.
      </p>
    </article>
    <aside className="image">
      <img src="./static/react.svg" alt="React -logo" />
    </aside>

    <style jsx>{`
      .header-main {
        display: flex;
      }
      .content {
        width: 60%;
      }
      .image {
        display: flex;
        align-items: center;
        width: 40%;
      }
      @keyframes animate {
        from {
          transform: rotate(-60deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
      .image img {
        width: 100%;
        transform: rotate(-60deg);
        animation: 2s ease-out 0s 1 animate forwards;
      }

      @media (prefers-reduced-motion) {
        .image img {
          animation: none;
        }
      }

      @media (max-width: 1150px) {
        .image {
          display: none;
        }
        .content {
          width: auto;
        }
      }
    `}</style>
  </section>
);

const Page: React.FC = () => (
  <Layout header={<Header />}>
    <section className="content">
      <article className="article">
        <h2>Tilaa koulutus tiimillenne</h2>
        <ul>
          <li>
            <h3>
              <a href="/training/react">
                <span role="img" aria-label="springle">
                  ✨
                </span>{' '}
                Suomen tehokkain React-kurssi
              </a>
            </h3>
            <p>
              Kokemuksemme kertoo, että hyvien ja selkeiden käytäntöjen ja
              ohjenuorien vakiinnuttaminen projektin alkuvaiheilla on
              elintärkeää projektin jatkuuvuden kannalta. Tällä kurssilla
              tutustutaan työkaluihin ja työskentelytapoihin, joiden avulla
              tiimisi voi luoda timanttisen React-projektin vuonna 2020.
            </p>
            <strong>Järjestetään sopimuksen mukaan.</strong>
          </li>
          <li>
            <h3>
              <a href="/training/testing">
                <span role="img" aria-label="check-mark">
                  🧪🥽
                </span>{' '}
                0 testiä ja kaikki tulessa{' '}
                <span role="img" aria-label="fire">
                  🔥
                </span>
                ?
              </a>
            </h3>
            <p>
              Koodin automaattitestaamisessa ideaalimaailma kohtaa usein
              todellisuuden. Itsestään hajoilevat oikeaa selainta ajavat
              työkalut ja koko ekosysteemin monimutkaisuus ovat tehneet
              erityisesti frontendin testaamisesta hankalaa. Vuonna 2020 tilanne
              on kuitenkin toinen. Tule tutustumaan Raren moderniin
              JavaScript-testaamisen työkalupakkiin ja prosesseihin päivän
              mittaiseen workshoppiin.
            </p>
            <strong>Järjestetään sopimuksen mukaan.</strong>
          </li>
        </ul>
      </article>
    </section>

    <style jsx>{`
      ul {
        list-style: none;
        padding: 0;
      }
      li a {
        text-decoration: none;
      }
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
