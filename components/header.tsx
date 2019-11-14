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
      :global(.background-light) .hero {
        opacity: 0;
      }

      .hero {
        color: #fff;
        padding-bottom: 1rem;
        min-height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        transition: opacity 400ms;
        // For mobile background person-with-laptop:
        position: relative;
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
        font-size: 1.35rem;
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
      }
    `}</style>
  </header>
);
