import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <img
      src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_dark_color_74x24dp.png"
      alt="Rare Agency"
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
      nav {
        display: flex;
        justify-content: flex-end;
        width: 1200px;
        margin: 0 auto;
      }

      nav:first-child {
        margin-right: auto;
      }

      a {
        color: #fff;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </nav>
);

export default Nav;
