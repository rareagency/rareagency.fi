import React from 'react';
import { Nav } from '../../components/nav';
import { Center } from '../../components/center';

export const Header: React.FC = ({ children }) => (
  <header className="hero">
    <Center>
      <section className="hero__content">
        <article className="hero__article">{children}</article>
      </section>
    </Center>

    <style jsx>{`
      .hero {
        background: linear-gradient(95.62deg, #181113 40.28%, #150b03 99.06%);
        color: #fff;
        padding: 3rem 0;

        // For mobile background person-with-laptop:
        position: relative;
        overflow: hidden;
      }
    `}</style>
  </header>
);
