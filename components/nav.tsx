import React from 'react';
import Link from 'next/link';

export const Nav = () => (
  <nav>
    <img
      src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_light_color_74x24dp.png"
      alt="Rare Agency"
      className="logo"
    />

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
      }

      nav {
        display: flex;
        justify-content: flex-end;
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
    `}</style>
  </nav>
);
