import React from 'react';
import { Layout } from '../../layouts/article/layout';

const Header = () => (
  <section className="header-main">
    <article className="content">
      <h1>
        <span role="img" aria-label="check-mark">
          ✅
        </span>{' '}
        834 passing,
        <br />0 failing tests
      </h1>
      <p className="description">
        Koodin automaattitestaamisessa ideaalimaailma kohtaa usein
        todellisuuden. Itsestään hajoilevat oikeaa selainta ajavat työkalut ja
        koko ekosysteemin monimutkaisuus ovat tehneet erityisesti frontendin
        testaamisesta hankalaa. Vuonna 2020 tilanne on kuitenkin toinen. Tule
        tutustumaan Raren moderniin JavaScript-testaamisen työkalupakkiin ja
        prosesseihin päivän mittaiseen workshoppiin.
      </p>
    </article>
    <aside className="image">
      <img src="/static/tests.svg" alt="Kuvituskuva" />
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
        margin-left: 2rem;
      }

      .image img {
        width: 100%;
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
        <p>
          <strong>Avainsanat: </strong>
          Cypress, React, Jest, TDD, Continuous integration, Yksikkötestaaminen,
          Funktionaalinen testaaminen, E2E
        </p>

        <p>
          Kuuntele tästä uunituore{' '}
          <a href="https://webbidevaus.fi">webbidevaus.fi</a> - jakso webin
          testaamisesta
        </p>

        <h3>Aika &amp; paikka</h3>

        <p>
          Kurssi järjestetään <strong>24.4 Tampereella</strong> Raren
          toimistolla (Polttimonkatu 4). <br /> Päivä alkaa kello 8:00
          aamupalatarjoilulla.
        </p>

        <h3>Hinta</h3>
        <p>Kurssin hinta on 375€ / osallistuja (ALV 0%)</p>
        <p>
          Kurssi on pyynnöstä mahdollista järjestää myös muuna ajankohtana ja
          muissa tiloissa sopimuksen mukaan.
        </p>

        <h3>Kenelle tämä kurssi on tarkoitettu?</h3>
        <p>
          Tämä kurssi on sinulle olit sitten aloitteleva tai jo kokeneempi
          webbidevaaja. Odotamme, että osaat JavaScriptiä ja ymmärrät Reactin ja
          sitä ympäröivän ekosysteemin perusperiaatteet. Aikaisempaa kokemusta
          testaamisesta ei tarvita.
        </p>

        <hr />
        <h2>Sisältö</h2>

        <ul>
          <li>Miksi koodia kannattaa testata?</li>
          <li>Sotatarinoita maailmanluokan webbiprojektien testaamisesta</li>
          <li>
            Bang for the Buck{' '}
            <span role="img" aria-label="cash">
              💸
            </span>{' '}
            – Mitä ja miten kannattaa testata?
          </li>
          <li>
            Kädet saveen – React-sovelluksen funktionaalinen yksikkötestaus
          </li>
          <li>
            Mitä kun testit hajoaa? Katsaus testaamiseen osana kehitysprosessia
          </li>
          <li>
            End to end - testaaminen Cypressillä. Parhaat käytännöt ja mitä
            välttää
          </li>
        </ul>
        <p>
          Päivää ei siis istuta luentosalissa, vaan tarkoitus on koota hyvä
          porukka samaan huoneeseen keskustelemaan ja kyselemään aiheesta omien
          projektienne kontekstissa. Mukana on hyvä olla oma tietokone, sillä
          tällä kurssilla tullaan todellakin koodaamaan{' '}
          <span role="img" aria-label="coding">
            👩‍💻
          </span>
          .
        </p>

        <h2>Mitä koulutuksesta jää käteen</h2>

        <ul>
          <li>
            Ymmärrys fronttitestaamisen periaatteista, parhaista käytännöistä ja
            siitä mitä kannattaa testata.
          </li>
          <li>
            Täydet valmiudet oikean React-sovelluksen funktionaaliseen
            yksikkötestaamiseen sekä uudessa että olemassa olevassa projektissa.
          </li>
          <li>
            Cypressillä testaamisen perusteet ja käytännön vinkkejä testien
            kirjoittamiseen.
          </li>
          <li>
            Konkreettiset neuvot testaamisen sulauttamisesta osaksi
            ohjelmistokehitysprosessia
          </li>
        </ul>

        <h2>Valmentaja</h2>

        <p>
          Kurssin valmentajana toimii{' '}
          <a href="https://webbidevaus.fi/">webbidevaus.fi</a> -podcastin
          juontaja ja viimeiset 10 vuotta ohjelmistokehityksen parissa
          työskennellyt <strong>Riku Rouvila</strong>. Riku on ollut mukana
          kehittämässä ja ylläpitämässä React-projekteja vuodesta 2014 yksissä
          Suomen ja Euroopan suurimmista ohjelmistoprojekteista. Lisätietoa
          Rikusta löytyy{' '}
          <a href="https://www.linkedin.com/in/rikurouvila/">LinkedInistä</a>,{' '}
          <a href="https://github.com/rikukissa">Githubista</a> ja tietysti
          podcastia kuuntelemalla!
        </p>

        <h2>Miksi testaaminen on tärkeää?</h2>

        <p>
          Toimivaa koodia on mahdollista kirjoittaa myös ilman testejä. Muutos
          on kuitenkin olennainen osa ketterää ohjelmistokehitystä ja muutoksien
          jälkeen testaamattomalla koodilla on tapana rikkoutua.
        </p>
        <p>
          Kun ohjelmiston koko kasvaa, alkaa testaamattoman koodin kehittäminen
          hidastua, sillä ohjelman toiminta joudutaan varmistamaan käsin
          jokaisen muutoksen jälkeen. Tämä työ on mahdollista automatisoida.
          Hyvin testattu koodi varmistaa nopean kehitystahdin ja hyvät yöunet
          koko tiimille nyt ja tulevaisuudessa. Se myös parantaa tuotteen laatua
          ja vaikuttaa asiakaskokemukseen. Koodin testaaminen on oleellinen osa
          tehokkaan ohjelmistokehitystiimin työkalupakkia.
        </p>
      </article>
    </section>

    <style jsx>{`
      strong {
        font-weight: 600;
      }
      h3 {
        font-family: 'Nunito Sans', sans-serif;
        margin-bottom: 1rem;
      }
      h2 {
        margin-bottom: 1rem;
      }

      hr {
        margin: 2rem 0;
        border: 0;
        border-top: 1px solid #ccc;
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
