import { Button } from '../../components/button';
import { Center } from '../../components/center';
import { ColorLines } from '../../components/color-lines';
import { Nav } from '../../components/navigation/nav';
import React from 'react';

export const Header: React.FC = () => (
  <header className="hero">
    <Nav />

    <Center className="hero__wrapper">
      <section className="hero__content">
        <ColorLines />
        <article className="hero__article">
          <h1 className="title">
            2020-luvun <br />
            ohjelmistokehitystä <br />
            Tampereelta.
          </h1>
          <p className="description">
            Rare on tamperelainen web- ja käyttöliittymäkehitykseen erikoistunut
            ohjelmistoyritys. Suunnittelemme & rakennamme sovelluksia,
            prototyyppejä, verkkosivuja ja verkkokauppoja yhdessä asiakkaidemme
            kanssa.
          </p>
          <Button href="#contact">Ota yhteyttä</Button>
        </article>
      </section>

      <section className="references">
        <h3 className="description">Meihin luottavat</h3>

        <p className="references__images">
          <a href="https://www.tieto.com/fi/" target="blank">
            <img
              src="../static/references/tieto.svg"
              className="logo tieto"
              alt="Tieto Oyj"
            />
          </a>
          <a href="https://www.veracell.com/" target="blank">
            <img
              src="../static/references/veracell.svg"
              alt="Veracell"
              className="logo veracell"
            />
          </a>
          <a href="https://plan-international.org/" target="blank">
            <img
              src="../static/references/plan.svg"
              className="logo plan"
              alt="Plan International"
            />
          </a>
          <a href="https://sharpershape.com/" target="blank">
            <img
              src="../static/references/sharper-shape.svg"
              className="logo sharper"
              alt="Sharper Shape"
            />
          </a>
          <a href="https://cultsecurity.com/" target="blank">
            <img
              src="../static/references/cult-black.png"
              className="logo cult"
              alt="Cult Security"
            />
          </a>
          <a href="https://www.simucu.be/" target="blank">
            <img
              src="../static/references/simucube.svg"
              className="logo simucube"
              alt="Simucube"
            />
          </a>
        </p>
      </section>
    </Center>

    <style jsx>{`
      .hero {
        display: flex;
        flex-direction: column;
        background: linear-gradient(
          95.62deg,
          #000d1a 40.28%,
          hsla(210, 100%, 3%, 1) 99.06%
        );
        color: #fff;
        padding-bottom: 1rem;
        min-height: 100%;
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
        z-index: 1;
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

      .references a:hover .logo {
        opacity: 1;
      }

      .logo {
        margin-bottom: 1rem;
        margin-right: 1.4rem;
        opacity: 0.8;
        cursor: pointer;
        transition: opacity 0.2s;
      }

      .cult {
        width: 90px;
        filter: invert(1);
        margin-bottom: 1.3rem;
      }

      .plan {
        margin-bottom: 1rem;
        margin-right: 1.75rem;
      }

      .sharper {
        width: 200px;
        margin-bottom: 1.4rem;
      }

      .tieto {
        width: 145px;
        margin-bottom: 0.75rem;
      }

      .veracell {
        margin-bottom: 1.35rem;
      }

      .simucube {
        width: 190px;
        filter: invert(1);
        margin-bottom: 1.3rem;
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
          width: 100px;
          margin-bottom: 0.8rem;
        }
        .tieto {
          width: 120px;
        }
        .veracell {
          width: 97px;
          margin-bottom: 1.2rem;
        }
        .sharper {
          width: 170px;
        }
        .simucube {
          width: 150px;
        }
        .cult {
          width: 80px;
        }
      }

      @media (max-width: 450px) {
        .title {
          font-size: 2rem;
        }

        .hero__article {
          overflow: visible;
          min-width: 100%;
        }

        .description {
          font-size: 1rem;
          width: auto;
        }

        .references h3 {
          text-align: center;
        }

        .references__images {
          justify-content: center;
          align-items: center;
        }
      }
    `}</style>
  </header>
);
