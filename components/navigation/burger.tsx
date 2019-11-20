import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Center } from '../center';

export const BurgerMenu: React.FC<{ className: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  });

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', closeMenu);
    return Router.events.off('routeChangeStart', closeMenu);
  }, []);

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
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none' /%3E%3Cpath d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' fill='%23fff'/%3E%3C/svg%3E");
          color: #fff;
          z-index: 3;
        }

        .toggle.close {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 13H5v-2h14v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
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
