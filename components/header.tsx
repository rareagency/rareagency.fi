import React from 'react';
import { Nav } from './navigation/nav';
import { Center } from './center';
import { ColorLines } from './illustrations/color-lines';

export const Header: React.FC = () => (
  <header className="hero">
    <Nav />

    <Center className="hero__wrapper">
      <section className="hero__content">
        <article className="hero__article">
          <h1 className="title">
            Kumppani, jota
            <br />
            softatiimisi tarvitsee.
          </h1>
          {/* <p className="description">
            Rare on tamperelainen, uuden sukupolven konsulttitalo, joka koostuu
            modernin webbikehityksen huippuosaajista.
          </p>

          <p className="description">
            Web- ja mobiilikehitys. APIt. Pilvipalvelut. Moderni DevOps. <br />
            Mitä ikinä tarvitsetkin, me pystymme auttamaan.
          </p> */}
        </article>

        <ColorLines />
      </section>

      <section className="references">
        <h3>Meihin luottaa</h3>

        <p className="references__images">
          <img
            src="../static/references/plan.svg"
            className="logo plan"
            alt="Plan International"
          />
          <img
            src="../static/references/tieto.svg"
            className="logo tieto"
            alt="Tieto Oyj"
          />
          <img
            src="../static/references/veracell.svg"
            alt="Veracell"
            className="logo veracell"
          />
        </p>
      </section>
    </Center>

    <style jsx>{`
      .hero {
        background: linear-gradient(95.62deg, #181113 40.28%, #150b03 99.06%);
        color: #fff;
        padding-bottom: 1rem;
        min-height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden; // For colorlines
      }

      section {
        z-index: 2; // For colorlines
      }

      :global(#colorlines) {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
      }

      @media (max-width: 1200px) {
        :global(#colorlines) {
          max-width: 40vw;
        }
      }

      :global(.hero__wrapper) {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        flex-grow: 1;
      }

      .hero__content {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
      }

      .hero__article {
      }

      .hero__image :global(svg) {
        margin-top: 3rem;
      }

      .description {
        font-size: 1.2rem;
        width: 49%;
      }

      .references h3 {
        font-size: 18px;
        letter-spacing: 0.07rem;
      }
      .references {
        margin-bottom: -1rem;
        padding-bottom: 1em;
      }

      .references__images {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
      }

      .logo {
        margin-bottom: 1rem;
        margin-right: 1.4rem;
      }

      .plan {
        margin-bottom: 0.85rem;
        margin-right: 1.75rem;
      }

      .tieto {
      }

      .veracell {
        margin-bottom: 1.05rem;
      }

      @media (max-width: 800px) {
        .plan {
          width: 80px;
        }
        .tieto {
          width: 60px;
        }
        .veracell {
          width: 97px;
          margin-bottom: 1rem;
        }
      }

      @media (max-width: 1200px) {
        .hero__image {
          margin-left: 2rem;
        }
      }

      @media (max-width: 800px) {
        .hero__image {
          margin-left: 1.25rem;
        }
      }

      @media (max-width: 650px) {
        .hero__article {
          overflow: visible;
          min-width: 100%;
        }

        .description {
          font-size: 1.1rem;
          width: auto;
        }
      }
    `}</style>
  </header>
);
