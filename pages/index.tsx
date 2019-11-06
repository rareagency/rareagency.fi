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
      </article>
    </header>

    <style jsx>{`
      .hero {
        background: #000;
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
        max-width: 60%;
      }
    `}</style>
  </Layout>
);

export default Home;
