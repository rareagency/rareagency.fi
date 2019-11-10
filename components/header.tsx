import React from 'react';
import { Nav } from './nav';
import { Center } from './center';
import { PersonWithLaptop } from './illustrations/person-with-laptop';

export const Header: React.FC = () => (
  <header className="hero">
    <Center>
      <Nav />

      <section className="hero__content">
        <article className="hero__article">
          <h1 className="title">Kumppani, jota softatiimisi tarvitsee.</h1>
          <p className="description">
            Rare on tamperelainen, uuden sukupolven konsulttitalo, joka koostuu
            modernin webbikehityksen huippuosaajista.
          </p>

          <p className="description">
            Web- ja mobiilikehitys. APIt. Pilvipalvelut. Moderni DevOps. Mitä
            ikinä tarvitsetkin, me pystymme auttamaan.
          </p>

          <section className="references">
            <h3>Asiakkaitamme</h3>

            <p className="references__images">
              <img src="../static/references/tieto.svg" alt="Tieto Oyj" />
              <img
                src="../static/references/plan.svg"
                alt="Plan International"
              />
            </p>
          </section>
        </article>
        <aside className="hero__image">
          <PersonWithLaptop />
        </aside>
      </section>
    </Center>

    <style jsx>{`
      .hero {
        color: #fff;
        padding: 3rem 0;

        // For mobile background person-with-laptop:
        position: relative;
        overflow: hidden;
      }

      .hero__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .hero__article {
        width: 55%;

        // For mobile background person-with-laptop:
        z-index: 2;
      }

      .title {
        margin-top: 4rem;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 3rem;
        letter-spacing: 0.11rem;
      }

      .description {
        line-height: 2rem;
      }

      .references {
        margin-top: 3rem;
      }

      .references h3 {
        font-size: 18px;
        letter-spacing: 0.07rem;
      }

      .references__images {
        display: flex;
        align-items: center;
        margin: 0 -1rem;
      }

      .references__images img {
        padding: 0 1rem;
      }

      @media (max-width: 1200px) {
        .title {
          font-size: 2.8rem;
          letter-spacing: 0.09rem;
        }

        .hero__image {
          margin-left: 2rem;
        }
      }

      @media (max-width: 1000px) {
        .title {
          font-size: 2.2rem;
          letter-spacing: 0.07rem;
        }
      }

      @media (max-width: 900px) {
        .title {
          font-size: 1.9rem;
        }
      }

      @media (max-width: 800px) {
        .hero__image {
          margin-left: 1.25rem;
        }

        .hero__content {
          align-items: flex-start;
        }

        .title {
          font-size: 1.5rem;
          letter-spacing: 0.05rem;
        }

        p.description {
          font-size: 0.9rem;
          line-height: 1.5rem;
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
