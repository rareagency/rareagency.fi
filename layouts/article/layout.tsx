import React from 'react';
import { Base, BaseProps } from '../base';
import { Header } from './header';
import { Footer } from '../../components/footer';
import { Center } from '../../components/center';

export const Layout: React.FC<{
  header: React.ReactNode;
} & BaseProps> = ({ header, children, title, description }) => (
  <Base
    description={description}
    title={title || 'Rare Tampere - React / Typescript'}
  >
    <Header>{header}</Header>
    <main className="main">
      <Center className="article-center">{children}</Center>
    </main>
    <Footer />
  </Base>
);
