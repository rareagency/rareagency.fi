import React from 'react';
import { Center } from './center';

export const Footer: React.FC = () => (
  <footer className="footer" id="contact">
    <Center className="grid">
      <img src="../static/logo-black.png" alt="Rare Agency" className="logo" />

      <address className="details">
        <div>3092335-9</div>
        <div>+358&nbsp;50&nbsp;470&nbsp;0715</div>
        <div>riku@rareagency.fi</div>
      </address>

      <address className="location">
        <div>Kauppakatu&nbsp;9B&nbsp;38</div>
        <div>33200&nbsp;Tampere</div>
        <div>Finland</div>
      </address>

      <section className="face riku">
        <img
          className="rounded-face"
          src="./static/faces/riku.jpg"
          alt="Riku Rouvila"
        />
        <address>
          <strong>Riku&nbsp;Rouvila</strong>
          <span>Lead&nbsp;Developer</span>
          <span>040&nbsp;TODO&nbsp;1234</span>
          <span>riku@rareagency.fi</span>
        </address>
      </section>

      <section className="face pyry">
        <img
          className="rounded-face"
          src="./static/faces/pyry.jpg"
          alt="Pyry Rouvila"
        />
        <address>
          <strong>Pyry&nbsp;Rouvila</strong>
          <span>Frontend&nbsp;Creator</span>
          <span>040&nbsp;277&nbsp;7700</span>
          <span>pyry@rareagency.fi</span>
        </address>
      </section>

      <section className="face janne">
        <img
          className="rounded-face"
          src="./static/faces/janne.jpg"
          alt="Janne Kallunki"
        />
        <address>
          <strong>Janne&nbsp;Kallunki</strong>
          <span>Full-stack&nbsp;Designer</span>
          <span>040&nbsp;TODO&nbsp;1234</span>
          <span>janne@rareagency.fi</span>
        </address>
      </section>

      <section className="face cihan">
        <img
          className="rounded-face"
          src="./static/faces/cihan.jpg"
          alt="Cihan Bebek"
        />
        <address>
          <strong>Cihan&nbsp;Bebek</strong>
          <span>Full-stack&nbsp;Engineer</span>
          <span>040&nbsp;TODO&nbsp;1234</span>
          <span>cihan@rareagency.fi</span>
        </address>
      </section>
    </Center>

    <style jsx>{`
      :global(.grid) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas:
          'logo riku janne'
          'logo riku janne'
          'details riku janne'
          'details pyry cihan'
          'location pyry cihan'
          'location pyry cihan';
        grid-gap: 2rem;
      }
      .logo {
        grid-area: logo;
      }
      .details {
        grid-area: details;
      }
      .location {
        grid-area: location;
      }
      .riku {
        grid-area: riku;
      }
      .pyry {
        grid-area: pyry;
      }
      .janne {
        grid-area: janne;
      }
      .cihan {
        grid-area: cihan;
      }

      .face {
        display: flex;
        align-items: center;
      }
      .face img {
        margin-right: 2rem;
      }

      .logo {
        width: 150px;
        filter: invert(1);
      }
      .footer {
        background: #2e3439;
        padding: 6rem 0;
      }

      .addresses {
        display: flex;
        margin-top: 2rem;
      }
      strong {
        color: #d4d4d4;
      }
      address {
        display: flex;
        flex-direction: column;
        color: #9c9c9c;
        font-style: normal;
        line-height: 1.75rem;
      }
      .rounded-face {
        border-radius: 4px;
      }

      @media (max-width: 1000px) {
        :global(.grid) {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas:
            'logo logo'
            'riku riku'
            'pyry pyry'
            'janne janne'
            'cihan cihan'
            'location details';
          justify-items: center;
        }
        .logo {
          margin-bottom: 2rem;
        }
        .details,
        .location {
          margin-top: 2rem;
        }
      }

      @media (max-width: 1000px) {
        :global(.grid) {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas:
            'logo logo'
            'riku pyry'
            'janne cihan'
            'location details';
          justify-items: center;
        }
        .logo {
          margin-bottom: 2rem;
        }
        .details,
        .location {
          margin-top: 2rem;
        }
      }

      @media (max-width: 750px) {
        :global(.grid) {
          grid-template-areas:
            'logo logo'
            'riku riku'
            'pyry pyry'
            'janne janne'
            'cihan cihan'
            'location details';
        }
      }

      @media (max-width: 350px) {
        :global(.grid),
        .face {
          display: block;
        }
        .location,
        .face {
          margin-bottom: 3rem;
        }
      }
    `}</style>
  </footer>
);
