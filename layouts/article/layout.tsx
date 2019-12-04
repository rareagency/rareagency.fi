import React from 'react';
import { Base } from '../base';
import { Header } from './header';
import { Footer } from '../../components/footer';
import { Center } from '../../components/center';

export const Layout: React.FC<{
  header: React.ReactNode;
}> = ({ header, children }) => (
  <Base title={'Rare Agency - React / Typescript / Tampere'}>
    <Header>{header}</Header>
    <main className="main">
      <Center className="article-center">{children}</Center>
    </main>
    <Footer />
  </Base>
);
