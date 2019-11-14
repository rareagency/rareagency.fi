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
        padding: 3rem 0;
      }
      .main__content {
        width: 70%;
      }
      @media (max-width: 800px) {
        .main__content {
          width: auto;
        }
      }
    `}</style>
  </main>
);
