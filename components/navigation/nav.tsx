import React from 'react';
import Link from 'next/link';
import { Center } from '../center';
import { BurgerMenu } from './burger';
import { items } from './items';

export const Nav = () => (
  <Center className="nav">
    <nav>
      <Link href="/">
        <img src="../static/logo.png" alt="Rare Agency" className="logo" />
      </Link>

      {/* Link uses the children element for styling and it doesn't get duplicated */}
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      {items.map(item => (
        <Link key={item.url} href={item.url}>
          <a>{item.text}</a>
        </Link>
      ))}
      {/* eslint-enable jsx-a11y/anchor-is-valid */}

      <BurgerMenu items={items} className="burger" />

      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          padding-top: 3rem;
          font-size: 16px;
          font-weight: 500;
        }

        .logo {
          cursor: pointer;
          width: 72px;
          margin-right: 2rem;
          padding: 0.5rem;
          // width - margin - padding
          margin-left: calc(-72px - 2rem - 0.5rem - 0.5rem);
        }

        @media (max-width: 1550px) {
          .logo {
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
        }

        @media (max-width: 900px) {
          nav {
            padding-top: 2rem;
          }

          a {
            display: none;
          }
        }
      `}</style>
    </nav>
  </Center>
);
