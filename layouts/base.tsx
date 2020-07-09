import React from 'react';
import Head from 'next/head';
import { GoogleTagManager } from '../components/google-tag-manager';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const DESCRIPTION =
  'Luotettu teknologiakumppani seuraavaan projektiisi. Rakennamme webbipalveluita, mobiilisovelluksia sekä prototyyppejä yhdessä teidän kanssanne.';
const TITLE = 'Rare Tampere - 2020-luvun ohjelmistokehitystä';

export type BaseProps = { title?: string; description?: string };

export const Base: React.FC<BaseProps> = ({ children, description, title }) => {
  return (
    <>
      <Head>
        <title>{title || TITLE}</title>

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/icons/rare-icon-192.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href="/static/icons/rare-icon-192.png"
        />
        <meta name="theme-color" content="#181113" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:800|Montserrat:400,500&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="title" content={title || TITLE} />
        <meta name="description" content={description || DESCRIPTION} />

        {publicRuntimeConfig.NODE_ENV !== 'development' && <GoogleTagManager />}

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rare.fi" />
        <meta property="og:title" content={title || TITLE} />
        <meta property="og:description" content={description || DESCRIPTION} />
        <meta property="og:image" content="https://rare.fi/static/meta.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rare.fi" />
        <meta property="twitter:title" content={title || TITLE} />
        <meta
          property="twitter:description"
          content={description || DESCRIPTION}
        />
        <meta
          property="twitter:image"
          content="https://rare.fi/static/meta.png"
        />
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
            color: #222;
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont,
              'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
              'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 100%;
            height: 100%;
          }
          #__next {
            height: 100%;
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
          @media (max-width: 1000px) {
            h1 {
              font-size: 3.4rem;
            }
          }
          @media (max-width: 800px) {
            h1 {
              font-size: 3rem;
            }
            h2 {
              font-size: 1.75rem;
            }
          }

          @media (max-width: 530px) {
            h1 {
              font-size: 2.4rem;
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

          @media (max-width: 650px) {
            p,
            ul {
              line-height: 1.75rem;
            }
          }
        `}
      </style>
    </>
  );
};
