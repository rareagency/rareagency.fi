import React from 'react';
import { Center } from './center';

export const AboutSection: React.FC = ({ children }) => (
  <>
    <section className="section">
      <Center>
        <aside className="section__picture"></aside>
        <article className="section__article">{children}</article>
      </Center>
    </section>

    <style jsx>{`
      .section {
        display: flex;
        position: relative;
        background: #1d2124;
      }

      .section__article {
        padding: 5rem 0;
        margin-left: auto;
        width: 45%;
        color: #fff;
      }

      aside {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 42.5%;
        background: red;
      }

      @media (max-width: 1000px) {
        .section__article {
          width: 100%;
        }
        aside {
          display: none;
        }
      }
    `}</style>
  </>
);
