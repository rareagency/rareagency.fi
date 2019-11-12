import React from 'react';
import Head from 'next/head';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rare Agency</title>

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:700,800|Raleway:400,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="wrapper">{children}</div>

      <style jsx global>
        {`
          body,
          html {
            padding: 0;
            margin: 0;
            font-family: 'Raleway', -apple-system, BlinkMacSystemFont,
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
