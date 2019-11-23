import React from 'react';
import { ColorLines } from '../../components/color-lines';
import { Nav } from '../../components/navigation/nav';
import { Center } from '../../components/center';

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
          <p className="description">
            Rare on tamperelainen modernin web- ja mobiilikehityksen
            huippuosaajista koostuva ohjelmistotiimi.
          </p>
        </article>

        <ColorLines />
      </section>

      <section className="references">
        <h3 className="description">Meihin luottavat</h3>

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
        display: flex;
        flex-direction: column;
        background: linear-gradient(95.62deg, #181113 40.28%, #150b03 99.06%);
        color: #fff;
        padding-bottom: 1rem;
        min-height: 100vh;
        box-sizing: border-box;
        position: relative;
        overflow: hidden; // For colorlines
      }

      // To stay on top of colorlines
      .title,
      .description,
      section {
        z-index: 1;
      }
      .title,
      .description {
        position: relative;
      }
      //

      :global(#colorlines) {
        position: absolute;

        right: 0;
        bottom: 0;
        width: 50%;
        min-height: 100%;
      }

      :global(.hero__wrapper) {
        display: flex;
        flex-direction: column;
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

      .description {
        font-size: 1.2rem;
        width: 55%;
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

      @media (max-width: 1330px) {
        .description {
          width: 40%;
        }
      }

      @media (max-width: 1150px) {
        :global(#colorlines) {
          opacity: 0.3;
        }
        .description {
          width: 55%;
        }
      }

      @media (max-width: 900px) {
        :global(#colorlines .upperside) {
          display: none;
        }

        :global(#colorlines) {
          left: 0;
          right: auto;
          width: 100%;
        }

        .description {
          font-size: 1.1rem;
          width: 60%;
        }
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

      @media (max-width: 650px) {
        .hero__article {
          overflow: visible;
          min-width: 100%;
        }

        .description {
          font-size: 1rem;
          width: auto;
        }
      }
    `}</style>
  </header>
);
