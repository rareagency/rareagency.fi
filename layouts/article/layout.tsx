import React from 'react';
import { Base } from '../base';
import { Header } from './header';
import { Main } from './main';
import { Footer } from '../../components/footer';

export const Layout: React.FC<{
  header: React.ReactNode;
}> = ({ header, children }) => (
  <Base>
    <Header>{header}</Header>
    <Main>{children}</Main>
    <Footer />
  </Base>
);
