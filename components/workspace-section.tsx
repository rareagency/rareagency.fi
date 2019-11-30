import React from 'react';
import { Center } from './center';
import Link from 'next/link';

export const WorkspaceSection: React.FC = () => (
  <>
    <section className="section">
      <Center className="vertical-center">
        <article className="section__article">
          <h2>
            Kehittäjä,
            <br /> suunnitteleeko tiimisi uutta webbiprojektia?
          </h2>
          <p>
            React ja ekosysteemi sen ympärillä kehittyy hurjaa vauhtia. Mitkä
            työkalut ovat relevantteja nyt ja kahden vuoden kuluttua? Millä
            kattauksella maaliin päästään varmasti?
          </p>

          <p>
            Vältä yleisimmät sudenkuopat ja ota meidät mukaan
            suunnitteluvaiheeseen.
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
        background: #000d1a;
      }
      .section::before,
      .section::after {
        content: '';
        position: absolute;
        top: 0;
        height: 75px;
        width: 100%;
        z-index: 1;
        background: url('static/skew.svg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      .section::after {
        top: auto;
        bottom: 0;
        transform: rotate(180deg);
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
        background: #fff6e2 url('static/workspace.svg') -2px top no-repeat;
        background-size: auto 105%;
      }

      .button {
        display: inline-block;
        padding: 15px 50px;
        border-radius: 25px;
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        background: #ff584d;
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
