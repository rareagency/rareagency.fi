import React from 'react';
import { Center } from './center';

export const WorkspaceSection: React.FC = () => (
  <>
    <section className="section">
      <Center className="vertical-center">
        <article className="section__article">
          <h2>Suunnitteleeko tiimisi uutta webbiprojektia?</h2>
          <p>
            Me myydään ohjelmistokehitystä omalta toimistoltamme ja
            konsultointia teidän toimistolla. Tullaan olemassa olevaan
            projektiin tiimin sekaan peeloileen ja näyttään teille mite hyvää
            softaa tehdään.
          </p>
          <p>
            Me myös jatkokehitetään ja ylläpidetään teidän tunkki angular
            projektia jos ei muuta keikkaa löydetä.
          </p>

          <a href="#x" className="button">
            Lue lisää
          </a>
        </article>
      </Center>
    </section>

    <style jsx>{`
      .section {
        display: flex;
        position: relative;
        background: #2e3439 url('static/workspace.svg') no-repeat;
        background-position: left center;
        background-size: contain;
        min-height: 684px;
      }

      .vertical-center {
        display: flex;
        align-items: center;
      }

      .section__article {
        padding: 5rem 0;
        margin-left: auto;
        width: 45%;
        text-align: right;
        color: #fff;
      }

      aside {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 60%;
        overflow: hidden;
      }

      .button {
        display: inline-block;
        padding: 0.9rem 6rem;
        border: 5px solid #e4e4e4;
        border-radius: 5px;
        color: #2e3439;
        text-decoration: none;
        font-weight: bold;
        background: #e8e5e2;
        box-sizing: border-box;
        text-align: center;
      }

      @media (max-width: 1000px) {
        .section {
          background-image: none;
          min-height: 0;
        }
        .section__article {
          width: 100%;
          text-align: left;
        }
      }

      @media (max-width: 500px) {
        .button {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
      }
    `}</style>
  </>
);
