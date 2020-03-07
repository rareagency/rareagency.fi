import React from 'react';
import { Center } from './center';

type Props = { image?: string; reverse?: boolean };

export const AboutSection: React.FC<Props> = ({
  children,
  image,
  reverse = false
}) => (
  <>
    <section className="section">
      <Center>
        <div className="container">
          {image && (
            <div
              className="image-container"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          )}
          <article className="section__article">{children}</article>
        </div>
      </Center>
    </section>

    <style jsx>{`
      .container {
        ${image ? 'display: grid;' : ''}
        grid-gap: 3rem;

        ${reverse
          ? 'grid-template-columns: 1fr 2fr;'
          : 'grid-template-columns: 2fr 0.5fr;'}
      }
      .image-container {
        display: flex;
        align-items: flex-start;
        height: 400px;
        grid-row: 1;
        ${reverse ? 'grid-column: 1;' : ''}
        ${reverse
          ? 'justify-content: flex-start;'
          : 'justify-content: flex-end;'}
        background-size: cover;
        background-position: 0em 1.5rem;
        background-repeat: no-repeat;
      }

      .section {
        position: relative;
      }
      .section:not(:first-child) {
        margin-top: 2rem;
      }
      .section:first-child {
        padding-top: 5rem;
      }
      .section:last-child {
        padding-bottom: 5rem;
      }
      .section__article {
        display: grid;
        grid-row: 1;
        ${reverse ? 'grid-column: 2;' : 'grid-column: 1;'}
        margin-right: 20%;
        grid-template-columns: 240px auto;
      }
      .section__article :global(img) {
        margin-left: 2rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        float: right;
        max-width: 50%;
        margin-right: -20%;
      }
      .section :global(h2) {
        grid-column: 1 / span 2;
        margin-bottom: 1rem;
        margin-top: 0;
      }
      .section :global(h2 + p) {
        padding: 0;
        grid-column: 1 / span 2;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        line-height: 2rem;
      }
      .section :global(h2 + p:last-child) {
        margin-bottom: 0;
      }
      .section :global(h3) {
        margin-top: 1rem;
        font-weight: 500;
        grid-column: 1;
        position: relative;
        align-self: flex-start;
      }
      .section :global(h3::after) {
        content: '';
        width: 2rem;
        height: 3px;
        background: #fdc9b4;
        position: absolute;
        bottom: -0.5em;
        left: 0;
      }
      .section :global(p) {
        margin-top: 1rem;
        padding-left: 2rem;
        grid-column: 2;
      }
      .section :global(p:last-child) {
        margin-bottom: 0;
      }

      @media (max-width: 1000px) {
        .section__article {
          display: block;
          margin-right: 0;
        }
        .section:not(:first-child) {
          margin-top: 1rem;
        }
        .section :global(p) {
          padding-left: 0rem;
        }
        .section :global(h3) {
          margin-top: 3rem;
        }
        .section__article :global(img) {
          margin-right: 0;
          margin-bottom: 0;
          max-width: 40%;
          max-height: 300px;
          display: block;
        }
      }
      @media (max-width: 800px) {
        .container {
          display: block;
        }
        .image-container {
          height: 300px;
          width: 100%;
        }
      }
      @media (max-width: 500px) {
        .section__article :global(img) {
          display: block;
          float: none;
          margin: 3rem auto 2rem auto;
          max-width: 100%;
          max-height: 150px;
        }
      }
    `}</style>
  </>
);
