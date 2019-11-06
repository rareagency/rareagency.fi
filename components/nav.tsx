import React from 'react';
import Link from 'next/link';

export const Nav = () => (
  <nav>
    <img src="../static/logo.png" alt="Rare Agency" className="logo" />

    {/* Link uses the children element for styling and it doesn't get duplicated */}
    {/* eslint-disable jsx-a11y/anchor-is-valid */}
    <Link href="/">
      <a>Me</a>
    </Link>
    <Link href="/contact-us">
      <a>Ota yhteyttä</a>
    </Link>
    {/* eslint-enable jsx-a11y/anchor-is-valid */}

    <style jsx>{`
      .logo {
        margin-right: auto;
        width: 100px;
      }

      nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      a {
        color: #fff;
        text-decoration: none;
        padding: 0 1rem;
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
);
