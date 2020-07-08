import { Layout } from '../../layouts/article/layout';
import React from 'react';

const Header = () => (
  <section className="header-main">
    <article className="content">
      <h1>Työpaikat</h1>
      <p>
        Etsimme uusia kyvykkäitä ja innostuneita ammattilaisia sekä vielä
        hiomattomia timantteja tiiviiseen yhdeksän hengen tiimiimme!
      </p>
      <p>
        Olemme nuori konsulttilafka, jonka ytimessä on harvinaislaatuisen kova
        osaaminen ja potentiaali sekä into yhdessä kehittymiseen. Haluamme
        tarjota työntekijöillemme parhaan mahdollisen ympäristön työskentelyyn
        sekä oppimiseen, ja uskomme, että asiakasprojektit täytyy miettiä
        tarkasti kullekin työntekijälle: projektin täytyy olla mieluisa ja tukea
        työntekijän uraa ja kehitystä. Panostamme RARElla ketterään
        ohjelmistokehitykseen, yhdessä tekemiseen, positiiviseen asenteeseen ja
        jatkuvan kehittymisen tukemiseen.
      </p>
      <p>
        Tutustu lisää Raren meininkiin ja tuleviin työkavereihisi{' '}
        <a className="link" href="https://www.instagram.com/rarekoodaa/">
          Raren instagramissa
        </a>{' '}
        ja kurkkaa alta avoimet työpaikkamme! Meillä on aina rekry osaaville
        tekijöille, joten ota yhteyttä <strong>rekry@rare.fi</strong>!
      </p>
    </article>

    <style jsx>{`
      .header-main {
        display: flex;
      }
      .content {
        width: 60%;
      }
      .link {
        text-decoration: none;
        color: white;
      }
      .link:hover {
        color: #81eeb8;
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
  <Layout header={<Header />}>
    <section className="content">
      <article className="article">
        <h2>Avoimet työpaikat</h2>
        <ul>
          <li>
            <h3>
              <a href="/careers/senior-developer">
                <span role="img" aria-label="springle">
                  🧙‍♀️
                </span>{' '}
                Kokenut web-kehittäjä
              </a>
            </h3>
            <p>
              <strong>Kenelle:</strong> Mid-senior tason modernin
              webbikehityksen taitaja, joka on valmis ottamaan vastuuta pienistä
              projekteista ja junnummista työntekijöistä
            </p>
            <p>
              <strong>Sijainti:</strong> Tampere
            </p>
            <p>
              <strong>Palkka:</strong> 3500&nbsp;–&nbsp;5500€
            </p>
          </li>
          {/* <li>
            <h3>
              <a href="/careers/open-application">
                <span role="img" aria-label="check-mark">
                  📄✍️
                </span>{' '}
                Avoin hakemus
              </a>
            </h3>
            <p>
              <strong>Kenelle:</strong> motivoitunut Ohjelmistokehittäjä, UX
              Designer, tai muu alan osaaja
            </p>
            <p>
              <strong>Sijainti:</strong> Tampere
            </p>
            <p>
              <strong>Palkka:</strong> neuvotellaan sopivaksi hakijan mukaan
            </p>
          </li> */}
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
