import React, { useState } from 'react';
import Link from 'next/link';
import { Center } from '../center';
import { Logo } from '../logo';

type BurgerMenuProps = {
  items: NavItem[];
  breakingPoint: string;
  className: string;
};

type NavItem = {
  url: string;
  text: string;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  items,
  breakingPoint,
  className
}) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <nav className={className} role="navigation">
      <button
        className="toggle open"
        onClick={openMenu}
        aria-expanded={open}
        aria-controls="menu"
      >
        Menu
      </button>

      <Center className={open ? 'burger-wrapper is-active' : 'burger-wrapper'}>
        <nav className="burger-wrapper__nav" role="navigation">
          <Logo secondary />

          <button
            className="toggle close"
            onClick={closeMenu}
            aria-expanded={open}
            aria-controls="menu"
          >
            Sulje
          </button>
        </nav>

        <ul id="menu">
          {items.map(item => (
            <li key={item.url}>
              <Link href={item.url}>
                {/* eslint-disable-next-line */}
                <a onClick={closeMenu}>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Center>

      <style jsx>{`
        @media (max-width: ${breakingPoint}) {
          :global(body) {
            overflow-y: ${open ? 'hidden' : 'auto'};
          }
        }

        .burger-wrapper__nav {
          position: relative;
          margin-top: 2rem;
        }

        .toggle {
          position: absolute;
          right: 0;
          top: 0;
          border: 0;
          height: auto;
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
          transition: opacity 350ms ease-in-out;
          opacity: 0;
          height: 0;

          visibility: hidden;
          display: flex;
          position: relative;
        }

        :global(.burger-wrapper.is-active) {
          visibility: visible;
          opacity: 1;
          height: auto;

          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          z-index: 3;
          background-image: url('./static/color-lines.svg');
          background-size: cover;
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
          padding: 0.5rem;
          width: 72px;
          filter: invert(1);
        }
      `}</style>
    </nav>
  );
};
