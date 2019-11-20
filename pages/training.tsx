import React from 'react';
import { Layout } from '../layouts/main';
import { Footer } from '../components/footer';
import Training from './training.mdx';

const Page = (props: any) => {
  return (
    <Layout>
      <Training />
      <Footer />
    </Layout>
  );
};

export default Page;
