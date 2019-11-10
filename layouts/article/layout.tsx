import React from 'react';
import Head from 'next/head';

export const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Rare Agency</title>

      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans|Montserrat:400,500&display=swap"
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
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont,
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
          font-size: 20px;
          background: linear-gradient(95.62deg, #181113 40.28%, #150b03 99.06%);
          color: #fff;
        }

        h1,
        h2 {
          font-family: 'Nunito Sans', sans-serif;
        }

        h1 {
          margin-top: 1rem;
          font-size: 3rem;
          letter-spacing: 0.11rem;
        }

        h2 {
          margin: 2rem 0;
        }
        ul {
          line-height: 2em;
        }

        @media (max-width: 1200px) {
          h1 {
            font-size: 2.8rem;
            letter-spacing: 0.09rem;
          }
        }

        @media (max-width: 1000px) {
          h1 {
            font-size: 2.2rem;
            letter-spacing: 0.07rem;
          }
        }

        @media (max-width: 900px) {
          h1 {
            font-size: 1.9rem;
          }
        }

        @media (max-width: 800px) {
          h1 {
            font-size: 1.5rem;
            letter-spacing: 0.05rem;
          }
        }

        article svg {
          float: right;
          margin-left: 4rem;
          margin-bottom: 2rem;
        }
        article img {
          width: 300px;
          float: right;
          margin-left: 2rem;
          margin-bottom: 2rem;
          margin-top: 2rem;
        }
        p {
          line-height: 2rem;
        }
      `}
    </style>
  </>
);
