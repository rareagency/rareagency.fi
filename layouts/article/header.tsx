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
        background: linear-gradient(
          95.62deg,
          #000d1a 40.28%,
          hsla(210, 100%, 3%, 1) 99.06%
        );
        color: #fff;
        position: relative;
      }
      .hero::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 52px;
        background: red;
        width: 100%;
        z-index: 1;
        background: url('static/skew.svg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        transform: rotate(180deg);
      }
      .hero__content {
        padding: 4rem 0;
        padding-bottom: 5rem;
      }
      @media (max-width: 800px) {
        .hero__article {
          width: auto;
        }
      }
    `}</style>
  </header>
);
