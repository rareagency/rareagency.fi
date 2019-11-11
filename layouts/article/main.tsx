import React from 'react';
import { Center } from '../../components/center';

export const Main: React.FC = ({ children }) => (
  <main className="main">
    <Center>
      <section className="main__content">
        <article>{children}</article>
      </section>
    </Center>

    <style jsx>{`
      .main {
        padding: 3rem 0;
      }
      :global(ul) {
        line-height: 1.75rem;
      }

      article :global(img) {
        width: 250px;
        float: right;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
      }
      @media (max-width: 600px) {
        article :global(img) {
          float: none;
          display: block;
          margin: 2rem auto;
        }
      }
    `}</style>
  </main>
);
