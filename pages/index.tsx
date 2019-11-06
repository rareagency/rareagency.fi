import React from 'react';
import { Layout } from '../layouts/main';
import Nav from '../components/nav';

const Home = () => (
  <Layout>
    <div className="hero">
      <Nav />

      <h1 className="title">
        We help teams create, test and ship better software from start to
        finish.
      </h1>
      <p className="description">
        Rare on tamperelainen, Suomen kovimmista webbikehityksen ammattilaisista
        koostuva tiimi. Tiimiimme kuuluu tällä hetkellä neljä jäsentä -
        jokaisella takanaan konsulttiura Suomen tunnetuimmissa
        ohjelmistotaloissa.
      </p>
    </div>

    <style jsx>{`
      .hero {
        background: #000;
        color: #fff;
      }

      .title {
        font-family: 'Nunito Sans', sans-serif;
      }
    `}</style>
  </Layout>
);

export default Home;
