import React from 'react';
import Link from 'next/link';
import { Center } from '../center';
import { BurgerMenu } from './burger';
import { items } from './items';
import { Logo } from '../logo';

export const Nav = () => (
  <Center className="nav">
    <nav>
      <Logo />

      <div className="nav__links">
        {items.map(item => (
          <Link key={item.url} href={item.url}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav__link">{item.text}</a>
          </Link>
        ))}
      </div>

      <BurgerMenu items={items} breakingPoint="900px" className="burger" />

      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          margin-top: 3rem;
          font-size: 16px;
          font-weight: 500;

          // To stay on top of colorlines
          z-index: 2;
          position: relative;
        }

        a {
          color: #fff;
          text-decoration: none;
          padding: 0 0.5rem;
        }

        .nav__links {
          margin-left: 2rem;
        }

        a.nav__link:first-of-type {
          margin-left: -0.5rem;
        }

        a:hover {
          text-decoration: underline;
        }

        .nav__link:not(:last-of-type) {
          margin-right: 1rem;
        }

        :global(.burger) {
          display: none;
        }

        @media (max-width: 1150px) {
          nav {
            display: block;
          }

          .nav__links {
            float: right;
          }
        }

        @media (max-width: 900px) {
          .nav__links {
            display: none;
          }

          :global(.burger) {
            display: block;
          }

          nav {
            margin-top: 2rem;
          }
        }
      `}</style>
    </nav>
  </Center>
);
