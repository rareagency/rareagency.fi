import React from 'react';
import { Center } from './center';

type Props = {};

export const AboutSection: React.FC<Props> = ({ children }) => (
  <>
    <section className="section">
      <Center>
        <article className="section__article">{children}</article>
      </Center>
    </section>

    <style jsx>{`
      .section {
        position: relative;
        padding: 5rem 0;
      }
      .section__article {
        display: grid;
        grid-template-columns: 35% calc(50% - 1rem);
      }
      .section :global(h2) {
        grid-column: 1 / span 2;
        margin-bottom: 1rem;
      }
      .section :global(h2 + p) {
        padding: 0;
        grid-column: 1 / span 2;
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }
      .section :global(h3) {
        grid-column: 1;
        margin-top: 1rem;
        font-weight: 500;
      }
      .section :global(p) {
        margin-top: 1rem;
        grid-column: 2;
        padding-left: 1rem;
      }

      @media (max-width: 1000px) {
        .section__article {
          display: block;
        }
        .section :global(p) {
          padding-left: 0rem;
        }
        .section :global(h3) {
          margin-top: 2rem;
        }
      }
    `}</style>
  </>
);
