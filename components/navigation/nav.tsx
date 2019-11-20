import React from 'react';
import Link from 'next/link';
import { Center } from '../center';
import { BurgerMenu } from './burger';
import { items } from './items';

export const Nav = () => (
  <Center className="nav">
    <nav>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="logo">
          <img
            src="../static/logo.png"
            alt="Rare Agency"
            className="logo__image"
          />
        </a>
      </Link>

      {items.map(item => (
        <Link key={item.url} href={item.url}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="nav__link">{item.text}</a>
        </Link>
      ))}

      <BurgerMenu items={items} breakingPoint="900px" className="burger" />

      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          padding-top: 3rem;
          font-size: 16px;
          font-weight: 500;

          // To stay on top of colorlines
          z-index: 2;
          position: relative;
        }

        .logo {
          margin-right: 2rem;
        }

        .logo__image {
          cursor: pointer;
          width: 72px;
          padding: 0.5rem;
          // width - margin - padding
          margin-left: calc(-72px - 2rem - 0.5rem - 0.5rem);
        }

        @media (max-width: 1550px) {
          .logo__image {
            margin-left: 0;
          }
        }

        a {
          color: #fff;
          text-decoration: none;
          padding: 0 0.5rem;
        }
        a:first-of-type {
          margin-left: -0.5rem;
        }

        a:hover {
          text-decoration: underline;
        }

        a:not(:last-of-type) {
          margin-right: 1rem;
        }

        :global(.burger) {
          display: none;
        }

        @media (max-width: 900px) {
          :global(.burger) {
            display: block;
          }

          nav {
            padding-top: 2rem;
          }

          a.nav__link {
            display: none;
          }
        }
      `}</style>
    </nav>
  </Center>
);
