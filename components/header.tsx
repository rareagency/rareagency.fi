import React from 'react';
import { Nav } from './nav';
import { Center } from './center';
import { PersonWithLaptop } from './person-with-laptop';

export const Header: React.FC = () => (
  <header className="hero">
    <Center>
      <Nav />

      <section className="hero__content">
        <article className="hero__article">
          <h1 className="title">
            We help teams create, test and ship better software from start to
            finish.
          </h1>
          <p className="description">
            Rare on tamperelainen, Suomen kovimmista webbikehityksen
            ammattilaisista koostuva tiimi. Tiimiimme kuuluu tällä hetkellä
            neljä jäsentä - jokaisella takanaan konsulttiura Suomen
            tunnetuimmissa ohjelmistotaloissa.
          </p>

          <section className="references">
            <h3>Meihin luottaa</h3>

            <div className="references__images">
              <img src="../static/references/tieto.svg" alt="Tieto Oyj" />
              <img
                src="../static/references/plan.svg"
                alt="Plan International"
              />
            </div>
          </section>
        </article>
        <aside className="hero__image">
          <PersonWithLaptop />
        </aside>
      </section>
    </Center>

    <style jsx>{`
      .hero {
        background: linear-gradient(95.62deg, #181113 40.28%, #150b03 99.06%);
        color: #fff;
        padding: 3rem 0;
      }

      .hero__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .hero__article {
        width: 55%;
      }

      .title {
        margin-top: 4rem;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 3.3rem;
        letter-spacing: 0.11rem;
      }

      .description {
        line-height: 2rem;
      }

      .references {
        margin-top: 3rem;
      }

      .references h3 {
        font-size: 1rem;
        letter-spacing: 0.07rem;
      }

      .references__images {
        display: flex;
        align-items: center;
        margin: 0 -1rem;
      }

      .references__images img {
        padding: 0 1rem;
      }
    `}</style>
  </header>
);
