import React from 'react';
import { Center } from './center';

export const Footer: React.FC = () => (
  <footer className="footer">
    <Center>
      <img src="../static/logo-black.png" alt="Rare Agency" className="logo" />

      <section className="addresses">
        <address>
          <div>3092335-9</div>
          <div>+358 50 470 0715</div>
          <div>riku@rareagency.fi</div>
        </address>

        <address>
          <div>Kauppakatu 9B 38</div>
          <div>33200 Tampere</div>
          <div>Finland</div>
        </address>
      </section>
    </Center>

    <style jsx>{`
      .logo {
        width: 150px;
      }
      .footer {
        background: #f8f8f8;
        padding: 6rem 0;
      }

      .addresses {
        display: flex;
        margin-top: 2rem;
      }

      address {
        margin-right: 4rem;
        color: #818181;
        font-style: normal;
        line-height: 1.75rem;
      }

      @media (max-width: 500px) {
        .addresses {
          flex-direction: column;
        }

        address:first-of-type {
          margin-bottom: 1rem;
        }
      }

      address:last-of-type {
        margin-right: 0;
      }
    `}</style>
  </footer>
);
