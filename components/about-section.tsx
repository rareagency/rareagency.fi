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
          <article className="section__article">{children}</article>
          {image && (
            <div className="image-container">
              <img alt="kuvituskuva" className="image" src={image} />
            </div>
          )}
        </div>
      </Center>
    </section>

    <style jsx>{`
      .container {
        ${image ? 'display: grid;' : ''}
        grid-gap: 3rem;
        grid-template-columns: 1fr 1fr;
      }
      .image-container {
        display: flex;
        align-items: flex-start;
        grid-row: 1;
        padding-top: 1.5rem;
        ${reverse ? 'grid-column: 1;' : ''}
        ${reverse
          ? 'justify-content: flex-start;'
          : 'justify-content: flex-end;'}
      }
      .image {
        max-width: 100%;
        flex-grow: 1;
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
        ${!image
          ? 'margin-right: 20%;'
          : ''}
        grid-template-columns: 1fr 2fr;
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

      @media (max-width: 1000px) {
        .section__article {
          display: block;
        }
        .section :global(p) {
          padding-left: 0rem;
        }
        .section :global(h3) {
          margin-top: 2rem;
        }
      }
      @media (max-width: 800px) {
        .container {
          display: block;
        }
      }
    `}</style>
  </>
);
