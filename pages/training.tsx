import React from 'react';
import { Layout } from '../layouts/main';
import { Footer } from '../components/footer';
import Training from './training.mdx';
import { Nav } from '../components/nav';

const Page = (props: any) => {
  return (
    <Layout>
      <Training />
      <Footer />
    </Layout>
  );
};

export default Page;
