import React from 'react';
import Head from 'next/head';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rare Agency</title>

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins|Nunito+Sans:700,800|Montserrat:400,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {children}

      <style jsx global>
        {`
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          body,
          html {
            padding: 0;
            margin: 0;
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont,
              'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
              'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 100%;
          }

          html {
            height: 100%;
          }

          h1,
          h2 {
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 800;
          }

          h1 {
            margin: 0;
            font-size: 4.3em;
            letter-spacing: 0.07rem;
          }

          h2 {
            font-size: 2.5rem;
            letter-spacing: 0.09rem;
          }
          h3 {
            font-size: 1.5rem;
            font-weight: 400;
          }
          @media (max-width: 800px) {
            h1 {
              font-size: 2.5rem;
            }
            h2 {
              font-size: 1.75rem;
            }
          }

          @media (max-width: 530px) {
            h1 {
              font-size: 1.9rem;
            }
          }

          p,
          ul {
            font-size: 1rem;
            line-height: 2rem;
          }
          strong {
            font-weight: 500;
          }
        `}
      </style>
    </>
  );
};
