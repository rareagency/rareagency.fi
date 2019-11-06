import React from 'react';
import { Center } from './center';

export const Main: React.FC = () => (
  <main className="main">
    <Center>
      <article className="webproject">
        <h2>Suunnitteleeko tiimisi uutta webbiprojektia?</h2>
        <p>
          Potkaise seuraava moderni webbiprojekti käyntiin oikealla jalalla ja
          vältä pahimmat sudenkuopat!
        </p>
        <p>
          Päivän mittainen <b>Kickstart: moderni webbiprojekti</b>
          -workshoppimme antaa selkeät konkreettiset suuntaviivat seuraavaan
          React-projektiin
        </p>

        <a href="#read-more" className="read-more">
          Lue lisää
        </a>
      </article>
    </Center>

    <style jsx>{`
      .main h2 {
        font-size: 2.5rem;
        letter-spacing: 0.09rem;
      }

      .main :global(.center) {
        padding: 5rem 0;
        background: url('../static/workspace.svg') no-repeat right center;
      }

      .webproject {
        max-width: 45%;
      }

      .webproject p:last-of-type {
        margin-bottom: 3rem;
      }

      .read-more {
        display: inline-block;
        padding: 0.7rem 6rem;
        border: 5px solid #dedede;
        color: #919191;
        text-decoration: none;
      }
    `}</style>
  </main>
);
