import React from 'react';
import { Base } from '../base';
import { Header } from './header';
import { Footer } from '../../components/footer';

export const Layout: React.FC = ({ children }) => (
  <Base>
    <Header />
    <div className="main">{children}</div>
    <Footer />
  </Base>
);
