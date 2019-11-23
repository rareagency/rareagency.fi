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
        min-height: 100vh;
      }

      .section__article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        height: 100%;
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
        width: 50%;

        background: url('./static/4259964432_57f6305823_k.jpg') center no-repeat;
        background-size: cover;
        filter: hue-rotate(5deg) contrast(0.95);
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
