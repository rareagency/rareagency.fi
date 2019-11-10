import React from 'react';
import Link from 'next/link';
import { Center } from '../../components/center';

export const Nav = () => (
  <Center>
    <nav>
      <Link href="/">
        <img src="../static/logo.png" alt="Rare Agency" className="logo" />
      </Link>

      {/* Link uses the children element for styling and it doesn't get duplicated */}
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <Link href="/">
        <a>Me</a>
      </Link>
      <Link href="/training">
        <a>Koulutukset</a>
      </Link>
      <Link href="/contact-us">
        <a>Ota yhteyttä</a>
      </Link>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}

      <style jsx>{`
        .logo {
          cursor: pointer;
          margin-right: auto;
          width: 100px;
        }

        nav {
          padding-top: 3rem;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: 16px;
        }

        a {
          color: #fff;
          text-decoration: none;
          padding: 0 0.5rem;
        }

        a:hover {
          text-decoration: underline;
        }

        a:not(:last-child) {
          margin-right: 1rem;
        }

        @media (max-width: 800px) {
          font-size: 0.9rem;

          a {
            margin: 0;
          }
        }

        @media (max-width: 650px) {
          a {
            margin: 0;
            padding: 0.5rem;
          }
        }
      `}</style>
    </nav>
  </Center>
);
