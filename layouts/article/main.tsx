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
        background: #fff;
        color: #160d07;
      }
      .main__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .main h2 {
        font-size: 2.5rem;
        letter-spacing: 0.09rem;
      }
    `}</style>
  </main>
);
