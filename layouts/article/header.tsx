import React from 'react';
import { Nav } from '../../components/nav';
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
        background: linear-gradient(95.62deg, #181113 40.28%, #150b03 99.06%);
        color: #fff;
      }
      .hero__content {
        padding: 3rem 0;
      }
    `}</style>
  </header>
);
