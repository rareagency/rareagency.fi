import React from 'react';
import { Layout } from '../layouts/article/layout';

const Header = () => (
  <section className="header-main">
    <article className="content">
      <h1>Suomen tehokkain React-kurssi</h1>
      <p className="description">
        React ja Reactin ympärillä oleva ekosysteemi, elää jatkuvassa
        muutoksessa. Uutta React-projektia aloittaessa teknologioiden ja
        työskentelytapojen valitseminen voi olla vaikeaa. Kokemuksemme kertoo,
        että hyvien ja selkeiden käytäntöjen ja ohjenuorien vakiinnuttaminen
        projektin alkuvaiheilla on elintärkeää projektin jatkuuvuden kannalta.
        Tällä kurssilla tutustutaan työkaluihin ja työskentelytapoihin, joiden
        avulla tiimisi voi luoda timanttisen React-projektin vuonna 2020.
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
        <h2>Päivän aiheita — lähdetään liikkeelle yhdessä</h2>

        <ul>
          <li>Projektipohja, -rakenne ja tärkeimmät työkalut</li>
          <li>Kirjastot — tilanhallinnasta lokalisointiin</li>
          <li>Kehitysprosessi, työskentelytavat ja tiimin yhteispeli</li>
          <li>Testaaminen luotettavasti ja tehokkaasti</li>
        </ul>
        <p>
          Päivää ei istuta luentosalissa, vaan tarkoitus on koota hyvä porukka
          samaan huoneeseen keskustelemaan ja kyselemään aiheesta omien
          projektienne kontekstissa. Päivän sisältöä voidaan muokata teidän
          tarpeidenne mukaiseksi, jotta päivästä saataisiin kaikki tehot irti.
          Tarpeen vaatiessa voimme myös syventyä yhteen tai muutamaan aiheeseen
          koko päivän ajaksi.
        </p>
        <h2>Kenelle kurssi on suunnattu?</h2>
        <p>
          Kurssi on suunnattu henkilöille, jotka työskentelevät osana
          kehitystiimiä. Esitietovaatimuksena voidaan pitää ymmärrystä
          frontend-kehityksestä ja perusteita Reactista. Kurssilla käsitellään
          myös korkean tason projektiarkkitehtuuria, joten kurssista hyötyy myös
          kehitystiimin vetäjät.
        </p>
        <h2>Valmentaja</h2>
        <p>
          Kurssin valmentajana toimii{' '}
          <a href="https://webbidevaus.fi/">webbidevaus.fi</a> -podcastin
          juontaja ja viimeiset 10 vuotta frontend-kehityksen parissa
          työskennellyt <strong>Riku Rouvila</strong>.
        </p>
        <p>
          Riku on ollut mukana kehittämässä ja ylläpitämässä React-projekteja
          vuodesta 2014 joissakin Suomen ja Euroopan suurimmista hankkeista.
          Tämä kurssi kokoaa yhteen Rikun kantapään kautta opitut kokemukset
          vuosien varrelta, ja näyttää sinulle miten hän laittaisi projektin
          käyntiin vuonna 2020. Lisätietoa Rikusta löytyy{' '}
          <a href="https://www.linkedin.com/in/rikurouvila/">LinkedInistä</a>,{' '}
          <a href="https://github.com/rikukissa">Githubista</a> ja tietysti
          podcastia kuuntelemalla!
        </p>
        <h2>Kiinnostuitko?</h2>
        <p>
          Laita sähköpostia suoraan osoitteeseen{' '}
          <strong>riku@rareagency.fi</strong> tai soita{' '}
          <a href="tel:+358504700715">
            <strong>+358&nbsp;50&nbsp;470&nbsp;0715</strong>
          </a>{' '}
          ja sovi Rikun kanssa ajankohdasta ja sisällöstä tarkemmin. Järjestämme
          koulutuksia ympäri Suomen pääsääntöisesti 5-15 hengen ryhmille.
          Kurssia voidaan järjestää sovittaessa myös muun kokoisille ryhmille.
          Tarjoamme kurssin lisäksi myös käytännön konsultointia uuden projektin
          pystyttämiseen ja ylläpitoon.
        </p>
      </article>
      <aside className="colorlines" aria-hidden={true}></aside>
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

      :global(.main) {
        background: url('./static/color-lines.svg') no-repeat;
        background-size: 35% 100%;
        background-position: right center;
      }

      @media (max-width: 800px) {
        .article {
          width: 100%;
        }

        :global(.main) {
          background: url('./static/color-lines.svg') no-repeat;
          background-size: 100% 100%;
        }

        :global(.article-center) {
          background-color: rgba(255, 255, 255, 0.9);
        }
      }
    `}</style>
  </Layout>
);

export default Page;
