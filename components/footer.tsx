import React from 'react';
import { Center } from './center';

export const Footer: React.FC = () => (
  <footer className="footer">
    <Center>
      <img
        src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_dark_color_74x24dp.png"
        alt="Rare Agency"
        className="logo"
      />

      <section className="addresses">
        <address>
          3092335-9
          <br />
          +358 50 470 0715
          <br />
          riku@rareagency.fi
        </address>

        <address>
          Kauppakatu 9B 38
          <br />
          33200 Tampere
          <br />
          Finland
        </address>
      </section>
    </Center>

    <style jsx>{`
      .footer {
        background: #f8f8f8;
        padding: 7rem 0;
      }

      .addresses {
        display: flex;
        margin-top: 2rem;
      }

      address {
        margin-right: 3rem;
        color: #818181;
        font-style: normal;
      }

      address:last-of-type {
        margin-right: 0;
      }
    `}</style>
  </footer>
);
