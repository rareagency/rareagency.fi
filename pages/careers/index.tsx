import React from 'react';
import { Layout } from '../../layouts/article/layout';

const Header = () => (
  <section className="header-main">
    <article className="content">
      <h1>Työpaikat</h1>
      <p>Etsimme aina uusia kyvykkäitä ja innostuneita jäseniä tiimiimme.</p>
      <p>
        Haluamme kasvattaa tiivistä yhdeksän hengen porukkaamme. Olemme viime
        vuoden loppupuolella perustettu konsulttilafka, jonka ytimessä on kova
        osaaminen ja työntekijälähtöinen meisinki. Uskomme ketterään
        ohjelmistokehitykseen, yhdessä tekemiseen, positiiviseen asenteeseen ja
        jatkuvaan kehittymiseen.
      </p>
      <p>
        Yritämme tarjota työntekijöillemme parhaan mahdollisen ympäristön
        työskentelyyn sekä oppimiseen, ja uskomme, että asiakasprojektit täytyy
        miettiä tarkasti kullekin työntekijälle: projektin täytyy olla mieluisa
        ja tukea työntekijän uraa ja kehitystä.
      </p>
      <p>
        Alla näet avoimet työpaikkamme. Meillä on myös aina rekry avoinna
        kaikenlaisille osaaville tekijöille, joten otathan yhteyttä{' '}
        <strong>rekry@rare.fi</strong> jos työskenteleminen Rarella kiinnostaa!
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
