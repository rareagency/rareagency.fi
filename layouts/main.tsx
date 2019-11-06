import React from 'react';
import Head from 'next/head';

export const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Rare Agency</title>

      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans|Poppins&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    {children}

    <style jsx global>
      {`
        body,
        html {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Avenir Next,
            Avenir, Helvetica, sans-serif;
          font-size: 18px;
        }
      `}
    </style>
  </>
);
