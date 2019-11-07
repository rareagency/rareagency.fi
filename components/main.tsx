import React from 'react';
import { Center } from './center';
import { Workspace } from './illustrations/workspace';

export const Main: React.FC = () => (
  <main className="main">
    <Center>
      <section className="main__content">
        <article className="webproject">
          <h2>Suunnitteleeko tiimisi uutta webbiprojektia?</h2>
          <p>
            Potkaise seuraava moderni webbiprojekti käyntiin oikealla jalalla ja
            vältä pahimmat sudenkuopat!
          </p>
          <p>
            Päivän mittainen <b>Kickstart: moderni webbiprojekti</b>{' '}
            &#8209;workshoppimme antaa selkeät konkreettiset suuntaviivat
            seuraavaan React-projektiin
          </p>

          <a href="#read-more" className="read-more">
            Lue lisää
          </a>
        </article>
        <aside>
          <Workspace />
        </aside>
      </section>
    </Center>

    <style jsx>{`
      .main__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .main h2 {
        font-size: 2.5rem;
        letter-spacing: 0.09rem;
      }

      .main :global(.center) {
        padding: 5rem 0;
      }

      .webproject {
        max-width: 45%;
      }

      .webproject p:last-of-type {
        margin-bottom: 3rem;
      }

      .read-more {
        padding: 0.7rem 6rem;
        border: 5px solid #dedede;
        color: #919191;
        text-decoration: none;
      }
    `}</style>
  </main>
);
