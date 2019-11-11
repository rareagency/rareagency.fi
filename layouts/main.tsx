import React from 'react';
import Head from 'next/head';
import { useScrollYPosition } from 'react-use-scroll-position';

export const Layout: React.FC = ({ children }) => {
  const scroll = useScrollYPosition();
  const backgroundClass = scroll > 120 ? 'background-light' : 'background-dark';

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

      <div className={`wrapper ${backgroundClass}`}>{children}</div>

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
          }
          html {
            height: 100%;
          }
          body {
            position: relative;
          }

          h1,
          h2 {
            font-family: 'Nunito Sans', sans-serif;
          }

          p {
            line-height: 1.75rem;
          }
        `}
      </style>
    </>
  );
};
