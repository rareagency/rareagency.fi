import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Center } from '../center';

export const BurgerMenu: React.FC<{ className: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });

  return (
    <nav className={className} role="navigation">
      <style jsx>{`
        .toggle {
          position: absolute;
          right: 2rem;
          top: 2rem;
          border: 0;
          height: 32px;
          padding-right: calc(32px);
          background-color: transparent;
          background-repeat: no-repeat;
          background-position: right center;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
        }

        .toggle.open {
          background-image: url('./static/menu-24px.svg');
          color: #fff;
          z-index: 3;
        }

        .toggle.close {
          background-image: url('./static/remove-24px.svg');
          color: #000;
          z-index: 2;
        }

        :global(.burger-wrapper) {
          display: none;
        }

        :global(.burger-wrapper.is-active) {
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          z-index: 3;
        }

        #menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          list-style-type: none;
          margin: 0;
          padding: 0;
          flex-grow: 1;
          margin-bottom: 5rem;
        }

        #menu a {
          color: #000;
          font-size: 1.7rem;
          text-decoration: none;
          box-shadow: inset 0 0px 0 white, inset 0 -4px 0 black;
        }

        #menu li {
          margin-top: 1.4rem;
        }
        #menu li:first-child {
          margin-top: 0;
        }

        .logo {
          margin: 2rem 0;
          padding: 0.5rem;
          width: 72px;
          filter: invert(1);
        }
      `}</style>

      <button
        className="toggle open"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="menu"
      >
        Avaa
      </button>

      <Center className={open ? 'burger-wrapper is-active' : 'burger-wrapper'}>
        <button
          className="toggle close"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu"
        >
          Sulje
        </button>

        <Link href="/">
          <img src="../static/logo.png" alt="Rare Agency" className="logo" />
        </Link>

        <ul id="menu">
          <li>
            <a href="#e">Me</a>
          </li>
          <li>
            <a href="#x">Workshopit</a>
          </li>
          <li>
            <a href="#t">Ota yhteyttä</a>
          </li>
        </ul>
      </Center>
    </nav>
  );
};
