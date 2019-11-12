import React from 'react';
import Head from 'next/head';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rare Agency</title>

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:700,800|Montserrat:400,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="wrapper">{children}</div>

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

          body {
            position: relative;
          }

          body::before {
            background: linear-gradient(
              128.62deg,
              #212121 28.28%,
              #060606 100%
            );
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transition: opacity 0.4s;
            z-index: -1;
            content: '';
          }

          .background-light::before {
            opacity: 0;
          }
          h1,
          h2 {
            font-family: 'Nunito Sans', sans-serif;
          }

          h1 {
            margin: 0;
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 800;
            font-size: 3.75em;
            letter-spacing: 0.07rem;
          }

          h2 {
            font-size: 2.5rem;
            letter-spacing: 0.09rem;
          }

          @media (max-width: 800px) {
            h1 {
              font-size: 2.5rem;
            }
            h2 {
              font-size: 1.75rem;
            }
          }

          p {
            font-size: 1.3rem;
            line-height: 2.2rem;
          }
        `}
      </style>
    </>
  );
};
