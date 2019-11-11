import React from 'react';
import Head from 'next/head';

export const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Rare Agency</title>

      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:700,800|Montserrat:400,500&display=swap"
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

        h2 {
          margin: 2rem 0;
        }
        ul {
          line-height: 1.75rem;
        }

        article svg {
          float: right;
          margin-left: 4rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 800px) {
          article svg {
            // float: none;
            display: block;
            margin: 0 1em;
            max-width: 200px;
          }
        }

        @media (max-width: 600px) {
          article svg {
            float: none;
            display: block;
            margin: 0 auto;
            max-height: 300px;
          }
        }

        article img {
          width: 250px;
          float: right;
          margin-left: 2rem;
          margin-right: 2rem;
          margin-bottom: 2rem;
          margin-top: 2rem;
        }
        @media (max-width: 600px) {
          article img {
            float: none;
            display: block;
            margin: 2rem auto;
          }
        }
        p {
          line-height: 1.75rem;
        }
      `}
    </style>
  </>
);
