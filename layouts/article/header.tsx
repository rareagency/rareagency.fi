import React from 'react';
import { Nav } from '../../components/navigation/nav';
import { Center } from '../../components/center';

export const Header: React.FC = ({ children }) => (
  <header className="hero">
    <Nav />

    <div className="hero__content">
      <Center>
        <div className="hero__article">{children}</div>
      </Center>
    </div>

    <style jsx>{`
      .hero {
        display: flex;
        flex-direction: column;
        background: linear-gradient(95.62deg, #181113 40.28%, #150b03 99.06%);
        color: #fff;
      }
      .hero__content {
        padding: 4rem 0;
      }
      @media (max-width: 800px) {
        .hero__article {
          width: auto;
        }
      }
    `}</style>
  </header>
);
