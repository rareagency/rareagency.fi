import React from 'react';
import { Nav } from '../../components/navigation/nav';
import { Center } from '../../components/center';

export const Header: React.FC = ({ children }) => (
  <header className="hero">
    <Nav />

    <section className="hero__content">
      <Center>
        <article className="hero__article">{children}</article>
      </Center>
    </section>

    <style jsx>{`
      .hero {
        background: linear-gradient(128.62deg, #212121 28.28%, #060606 100%);
        color: #fff;
      }
      .hero__content {
        padding: 4rem 0;
      }
      article {
        width: 70%;
      }
      @media (max-width: 800px) {
        article {
          width: auto;
        }
      }
    `}</style>
  </header>
);
