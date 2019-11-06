import React from 'react';
import { Layout } from '../layouts/main';
import Nav from '../components/nav';

const Home = () => (
  <Layout>
    <header className="hero">
      <article className="center">
        <Nav />

        <h1 className="title">
          We help teams create, test and ship better software from start to
          finish.
        </h1>
        <p className="description">
          Rare on tamperelainen, Suomen kovimmista webbikehityksen
          ammattilaisista koostuva tiimi. Tiimiimme kuuluu tällä hetkellä neljä
          jäsentä - jokaisella takanaan konsulttiura Suomen tunnetuimmissa
          ohjelmistotaloissa.
        </p>

        <section className="references">
          <h3>Meihin luottaa</h3>

          <div className="references__images">
            <img src="../static/references/tieto.svg" alt="Tieto Oyj" />
            <img src="../static/references/plan.svg" alt="Plan International" />
          </div>
        </section>
      </article>
    </header>

    <style jsx>{`
      .hero {
        background: #000 url('../static/person-with-laptop.svg') no-repeat 80%
          center;
        color: #fff;
        padding: 3rem 0;
      }

      .center {
        margin: 0 auto;
        width: 1200px;
      }

      .title {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 3.5rem;
        letter-spacing: 0.11rem;

        max-width: 60%;
      }

      .description {
        max-width: 45%;
        line-height: 2rem;
      }

      .references {
        margin-top: 3rem;
      }

      .references h3 {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1.1rem;
        letter-spacing: 0.05rem;
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
  </Layout>
);

export default Home;
