import React from 'react';
import { Center } from './center';
import { Workspace } from './illustrations/workspace';

export const Main: React.FC = () => (
  <main className="main">
    <Center>
      <section className="main__content">
        <h2>Suunnit&shy;teleeko tiimisi uutta webbi&shy;projektia?</h2>
        <article className="content">
          <p>
            Potkaise seuraava webbiprojektinne käyntiin oikealla jalalla ja
            vältä pahimmat sudenkuopat!
          </p>
          <p>
            Päivän mittainen <b>Kickstart: Moderni webbiprojekti</b>{' '}
            &#8209;workshoppimme antaa selkeät konkreettiset suuntaviivat
            seuraavaan React-projektiinne
          </p>
        </article>
        <div className="action">
          <a href="#read-more" className="read-more">
            Lue lisää
          </a>
        </div>
        <div className="illustration">
          <Workspace />
        </div>
      </section>
    </Center>

    <style jsx>{`
      .main__content {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-areas:
          'title image'
          'content image'
          'button .';
      }

      .main h2 {
        grid-area: title;
        font-size: 2.5rem;
        letter-spacing: 0.09rem;
      }

      .main {
        transition: opacity 0.4s ease-in-out;
      }

      .illustration {
        grid-area: image;
        grid-row-start: 1;
        grid-row-end: 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        box-sizing: border-box;
      }
      .illustration :global(svg) {
        max-width: 100%;
        max-height: 350px;
      }
      @media (max-width: 1100px) {
        .main__content {
          grid-template-columns: 50% 50%;
          grid-template-areas:
            'title title'
            'content image'
            'button .';
        }
        .illustration {
          grid-row-start: 2;
          grid-row-end: 3;
        }
      }
      @media (max-width: 700px) {
        .main__content {
          grid-template-columns: 100%;
          grid-template-areas:
            'title'
            'image'
            'content'
            'button';
        }
        .illustration :global(svg) {
          padding: 2rem 0;
          padding-top: 0;
          max-height: 300px;
        }
      }
      .main :global(.center) {
        padding-bottom: 5rem;
      }

      .content {
        grid-area: content;
      }

      :global(.background-dark) .content {
        opacity: 0;
      }

      .content p:last-of-type {
        margin-bottom: 3rem;
      }
      .action {
        grid-area: button;
      }

      .read-more {
        display: inline-block;
        padding: 0.7rem 6rem;
        border: 5px solid #dedede;
        border-radius: 5px;
        color: #919191;
        text-decoration: none;
      }
    `}</style>
  </main>
);
