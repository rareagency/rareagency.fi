import React from 'react';
import { Nav } from './nav';
import { Center } from './center';
import { PersonWithLaptop } from './illustrations/person-with-laptop';
import { Title } from './title';

export const Header: React.FC = () => (
  <header className="hero">
    <Nav />
    <Center className="hero__wrapper">
      <section className="hero__content">
        <article className="hero__article">
          <Title>Kumppani, jota softatiimisi tarvitsee.</Title>
          <p className="description">
            Rare on tamperelainen, uuden sukupolven konsulttitalo, joka koostuu
            modernin webbikehityksen huippuosaajista.
          </p>

          <p className="description">
            Web- ja mobiilikehitys. APIt. Pilvipalvelut. Moderni DevOps. <br />
            Mitä ikinä tarvitsetkin, me pystymme auttamaan.
          </p>
        </article>
        <aside className="hero__image">
          <PersonWithLaptop />
        </aside>
      </section>

      <section className="references">
        <h3>Meihin luottaa</h3>

        <p className="references__images">
          <img src="../static/references/plan.svg" alt="Plan International" />
          <img src="../static/references/tieto.svg" alt="Tieto Oyj" />
          <img
            src="../static/references/veracell.svg"
            alt="Plan International"
          />
        </p>
      </section>
    </Center>

    <style jsx>{`
      :global(.background-light) .hero {
        opacity: 0;
      }

      .hero {
        transition: opacity 0.4s;
        color: #fff;
        padding-bottom: 3rem;
        min-height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        // For mobile background person-with-laptop:
        position: relative;
        background-image: linear-gradient(
          95.62deg,
          #181113 40.28%,
          #150b03 99.06%
        );
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
        width: 55%;

        // For mobile background person-with-laptop:
        z-index: 2;
      }

      .hero__image :global(svg) {
        margin-top: 3rem;
      }

      .description {
        font-size: 22px;
      }

      .references h3 {
        font-size: 18px;
        letter-spacing: 0.07rem;
      }
      .references {
        margin-bottom: -1rem;
      }

      .references__images {
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        flex-wrap: wrap;
      }

      .references__images img {
        margin-bottom: 1rem;
      }

      .references__images img {
        padding: 0 1rem;
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

        p.description {
          font-size: 0.9rem;
        }
      }

      @media (max-width: 650px) {
        .hero__article {
          overflow: visible;
          min-width: 100%;
        }
      }
    `}</style>
  </header>
);
