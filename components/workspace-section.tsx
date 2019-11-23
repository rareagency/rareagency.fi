import React from 'react';
import { Center } from './center';
import Link from 'next/link';

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

          <Link href="/training">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="button">Lue lisää</a>
          </Link>
        </article>
        <aside className="workspace"></aside>
      </Center>
    </section>

    <style jsx>{`
      .section {
        display: flex;
        position: relative;
        background: #2e3439;
      }

      :global(.vertical-center) {
        display: flex;
        align-items: center;
      }

      .section__article {
        padding: 5rem 0;
        width: 45%;
        color: #fff;
      }

      aside {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 50%;

        // -2px to hide #e8e502 background color from left side
        background: #e8e5e2 url('static/workspace.svg') -2px top no-repeat;
        background-size: auto 105%;
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
        margin-top: 1.5rem;
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

      @media (max-width: 1000px) {
        aside {
          background: none;
        }
      }

      @media (max-width: 450px) {
        .button {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
      }
    `}</style>
  </>
);
