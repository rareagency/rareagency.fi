import React from 'react';
import { Layout } from '../layouts/main';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { Footer } from '../components/footer';

const Home = () => (
  <Layout>
    <Header />
    <Main />
    <Footer />
  </Layout>
);

export default Home;
