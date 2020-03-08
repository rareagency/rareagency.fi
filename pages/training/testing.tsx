import React from 'react';
import { Layout } from '../../layouts/article/layout';

function EpisodeEmbed() {
  return (
    <>
      <iframe
        title="Webbidevaus.fi jakso 78"
        src="https://webbidevaus.fi/78/embed"
        frameBorder="0"
      ></iframe>
      <style jsx>{`
        iframe {
          margin-top: 1rem;
          max-width: 500px;
          width: 100%;
        }
        @media (max-width: 564px) {
          iframe {
            height: 220px;
          }
        }
      `}</style>
    </>
  );
}

const Header = () => (
  <section className="header-main">
    <article className="content">
      <h1>
        <span role="img" aria-label="check-mark">
          🧪🥽
        </span>{' '}
        0 testiä ja kaikki tulessa{' '}
        <span role="img" aria-label="fire">
          🔥
        </span>
        ?
      </h1>
      <p className="description">
        Koodin automaattitestaamisessa ideaalimaailma kohtaa usein
        todellisuuden. Itsestään hajoilevat oikeaa selainta ajavat työkalut ja
        koko ekosysteemin monimutkaisuus ovat tehneet erityisesti frontendin
        testaamisesta hankalaa. <br /> Vuonna 2020 tilanne on kuitenkin toinen.
        Tule tutustumaan Raren moderniin JavaScript-testaamisen työkalupakkiin
        ja prosesseihin päivän mittaiselle kurssille.
      </p>
      <a
        className="button"
        rel="noopener noreferrer"
        href="https://docs.google.com/forms/d/1DzkP7yitdWVHGV8MtBq3qj6kpdyY2yXETYziNs47gyo/"
        target="_blank"
      >
        Ilmottaudu mukaan!
      </a>
    </article>
    <aside className="image">
      <img src="/static/tests.svg" alt="Kuvituskuva" />
    </aside>

    <style jsx>{`
      .button {
        background: #6c4fff;
        padding: 1rem 2.5rem;
        border-radius: 20px;
        text-decoration: none;
        font-weight: bold;
        color: #fff;
        font-size: 18px;
      }
      .description {
        margin-bottom: 3rem;
      }
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
  <Layout
    title="Rare presents: 🧪🥽 0 testiä ja kaikki tulessa 🔥"
    description="Koodin automaattitestaamisessa ideaalimaailma kohtaa usein todellisuuden. 
  Vuonna 2020 tilanne on kuitenkin toinen. Tule tutustumaan Raren moderniin JavaScript-testaamisen työkalupakkiin ja prosesseihin päivän mittaiselle kurssille."
    header={<Header />}
  >
    <section className="content">
      <article className="article">
        <p>
          <strong>Avainsanat: </strong>
          Cypress, React, React Testing Library, Jest, TDD, Continuous
          integration, Yksikkötestaaminen, Funktionaalinen testaaminen, E2E,
          Github Actions, Travis, Jenkins
        </p>

        <p>
          <strong>
            Kuuntele tästä uunituore{' '}
            <a href="https://webbidevaus.fi">webbidevaus.fi</a> - jakso webin
            testaamisesta
          </strong>
          <EpisodeEmbed />
        </p>
        <hr />
        <h3>Aika &amp; paikka</h3>

        <p>
          Kurssi järjestetään <strong>23.4.2020 Tampereella</strong> Raren
          toimistolla (Polttimonkatu 4). <br /> Päivä alkaa kello 8:00
          aamupalatarjoilulla.
        </p>

        <h3>Hinta</h3>
        <p>
          Kurssin hinta on <strong>375 €</strong> / osallistuja (ALV 0%).
        </p>

        <h3>Kenelle tämä kurssi on tarkoitettu?</h3>
        <p>
          Tämä kurssi on sinulle olit sitten aloitteleva tai jo kokeneempi
          webbidevaaja. Odotamme, että osaat JavaScriptiä ja ymmärrät Reactin ja
          sitä ympäröivän ekosysteemin perusperiaatteet. Aikaisempaa kokemusta
          testaamisesta ei tarvita. Suosittelemme kurssia erityisesti kun uutta
          projektia ollaan alottamassa.
        </p>

        <p>
          <strong>
            Kurssi on pyynnöstä mahdollista järjestää myös muuna ajankohtana ja
            muissa tiloissa sopimuksen mukaan.
          </strong>
        </p>

        <hr />
        <h2>Sisältö</h2>
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

        <h3>Mitä koulutuksesta jää käteen?</h3>

        <p>
          Kurssilla opitaan testaamistaitoja, jotka ovat relevantteja koko urasi
          ajan. Vaikka kurssilla keskitymmekin nykypäivän JavaScript-sovellusten
          testaamiseen, ovat taidot siirrettävissä myös muiden alustojen
          testaamiseen.
        </p>

        <ul>
          <li>
            Ymmärrys automaattitestaamisen periaatteista, parhaista käytännöistä
            ja siitä mitä kannattaa testata erityisesti frontendin kontekstissa.
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

        <h3>Miksi testaaminen on tärkeää?</h3>

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

        <h2>Valmentaja</h2>

        <p>
          <img
            className="riku"
            src="/static/riku-koulutus.jpg"
            alt="Riku Rouvila"
          />
          Kurssin valmentajana toimii{' '}
          <a href="https://webbidevaus.fi/">webbidevaus.fi</a> -podcastin
          juontaja ja viimeiset 10 vuotta ohjelmistokehityksen parissa
          työskennellyt <strong>Riku Rouvila</strong>. Riku on ollut mukana
          kehittämässä ja ylläpitämässä React-projekteja vuodesta 2014 yksissä
          Suomen ja Euroopan suurimmista ohjelmistoprojekteista. Lisätietoa
          Rikusta löytyy{' '}
          <a href="https://www.linkedin.com/in/rikurouvila/">LinkedInistä</a>,{' '}
          <a href="https://github.com/rikukissa">Githubista</a> ja tietysti
          webbidevaus.fi podcastia kuuntelemalla!
        </p>

        <a
          className="button"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/1DzkP7yitdWVHGV8MtBq3qj6kpdyY2yXETYziNs47gyo/"
          target="_blank"
        >
          Ilmottaudu mukaan!
        </a>
      </article>
    </section>

    <style jsx>{`
      strong {
        font-weight: 600;
      }
      .riku {
        width: 400px;
        margin-left: 2rem;
        margin-bottom: 1rem;
        float: right;
      }
      @media (max-width: 600px) {
        .riku {
          display: block;
          margin-top: 2rem;
          margin-bottom: 2rem;
          margin-left: 0;
          width: 100%;
          float: none;
        }
      }
      .button {
        background: #6c4fff;
        padding: 1rem 2.5rem;
        border-radius: 20px;
        text-decoration: none;
        font-weight: bold;
        color: #fff;
        font-size: 18px;
        margin-top: 1rem;
        display: inline-block;
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
        width: 70%;
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
