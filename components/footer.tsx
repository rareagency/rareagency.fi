import React from 'react';
import { Center } from './center';
import { Twitter } from './icons/twitter';
import { Linkedin } from './icons/linkedin';
import { Github } from './icons/github';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <Center className="interested">
        <h3>Kiinnostuitko?</h3>
        <p>
          Lisätietoa meistä, referenssiprojekteistamme ja siitä miten voisimme
          auttaa teidän tiimiänne saat ottamalla yhteyttä <br />
          sähköpostitse osoitteeseen riku@rare.fi tai puhelimitse{' '}
          <strong>+358&nbsp;50&nbsp;470&nbsp;0715</strong>. <br />
          Kerromme mielellämme lisää!
        </p>
      </Center>
      <Center className="contacts">
        <div className="details">
          <img src="/static/logo-black.png" alt="Rare" className="logo" />
          <address className="location">
            <div>Polttimonkatu 4</div>
            <div>33210&nbsp;Tampere</div>
            <div>Finland</div>
            <br />

            <div>Rare Agency Oy</div>
            <div>3092335-9</div>
            <div>+358&nbsp;50&nbsp;470&nbsp;0715</div>
            <div>riku@rare.fi</div>
          </address>
        </div>
        <div className="grid">
          <section className="face riku">
            <img
              className="rounded-face"
              src="/static/faces/riku.svg"
              alt="Riku Rouvila"
            />
            <address>
              <strong className="name">Riku&nbsp;Rouvila</strong>
              <span>Lead&nbsp;Developer</span>
              <span>riku@rare.fi</span>
              <span className="social">
                <a href="https://www.linkedin.com/in/rikurouvila/">
                  <Linkedin />
                </a>
                <a href="https://github.com/rikukissa">
                  <Github />
                </a>
                <a href="https://twitter.com/rikurouvila">
                  <Twitter />
                </a>
              </span>
            </address>
          </section>

          <section className="face pyry">
            <img
              className="rounded-face"
              src="/static/faces/pyry.svg"
              alt="Pyry Rouvila"
            />
            <address>
              <strong className="name">Pyry&nbsp;Rouvila</strong>
              <span>Frontend&nbsp;Creator</span>
              <span>pyry@rare.fi</span>
              <span className="social">
                <a href="https://www.linkedin.com/in/naf/">
                  <Linkedin />
                </a>
                <a href="https://github.com/naftis">
                  <Github />
                </a>
              </span>
            </address>
          </section>

          <section className="face janne">
            <img
              className="rounded-face"
              src="/static/faces/janne.svg"
              alt="Janne Kallunki"
            />
            <address>
              <strong className="name">Janne&nbsp;Kallunki</strong>
              <span>Full-stack&nbsp;Designer</span>
              <span>janne@rare.fi</span>
              <span className="social">
                <a href="https://www.linkedin.com/in/jkallunki/">
                  <Linkedin />
                </a>
                <a href="https://github.com/jkallunki">
                  <Github />
                </a>
                <a href="https://twitter.com/kallunkj">
                  <Twitter />
                </a>
              </span>
            </address>
          </section>

          <section className="face cihan">
            <img
              className="rounded-face"
              src="/static/faces/cihan.svg"
              alt="Cihan Bebek"
            />
            <address>
              <strong className="name">Cihan&nbsp;Bebek</strong>
              <span>Lead&nbsp;Developer</span>
              <span>cihan@rare.fi</span>
              <span className="social">
                <a href="https://www.linkedin.com/in/cihan-bebek/">
                  <Linkedin />
                </a>
                <a href="https://github.com/keksike">
                  <Github />
                </a>
                <a href="https://twitter.com/cihanbebek">
                  <Twitter />
                </a>
              </span>
            </address>
          </section>

          <section className="face olli">
            <img
              className="rounded-face"
              src="/static/faces/olli.svg"
              alt="Olli Jaakkola"
            />
            <address>
              <strong className="name">Olli&nbsp;Jaakkola</strong>
              <span>Full-stack&nbsp;Developer</span>
              <span>olli@rare.fi</span>
              <span className="social">
                <a href="https://www.linkedin.com/in/olli-jaakkola/">
                  <Linkedin />
                </a>
                <a href="https://github.com/ollija">
                  <Github />
                </a>
              </span>
            </address>
          </section>

          <section className="face kalle">
            <img
              className="rounded-face"
              src="/static/faces/kalle.svg"
              alt="Kalle Hirvola"
            />
            <address>
              <strong className="name">Kalle&nbsp;Hirvola</strong>
              <span>Software&nbsp;Developer</span>
              <span>kalle@rare.fi</span>
              <span className="social">
                <a href="https://github.com/eioo">
                  <Github />
                </a>
              </span>
            </address>
          </section>

          <section className="face hannes">
            <img
              className="rounded-face"
              src="/static/faces/hannes.svg"
              alt="Hannes Aaltonen"
            />
            <address>
              <strong className="name">Hannes&nbsp;Aaltonen</strong>
              <span>Software&nbsp;Developer</span>
              <span>hannes@rare.fi</span>
              <span className="social">
                <a href="https://www.linkedin.com/in/hannes-aaltonen-9911ba121/">
                  <Linkedin />
                </a>
                <a href="https://github.com/haalto">
                  <Github />
                </a>
              </span>
            </address>
          </section>
        </div>
      </Center>

      <style jsx>{`
        :global(.contacts) {
          justify-content: space-between;
          display: flex;
        }
        :global(.interested) {
          text-align: center;
          border-bottom: 1px solid #8a8a8a;
          padding-bottom: 3rem;
          margin-bottom: 4rem !important;
        }
        @media (max-width: 1300px) {
          :global(.interested) {
            padding-bottom: 2rem !important;
          }
        }
        .name {
          font-weight: bold;
        }
        :global(.grid) {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;

          grid-gap: 2rem;
        }

        .face {
          display: flex;
          align-items: center;
        }
        .face img {
          height: 100px;
        }

        .logo {
          width: 150px;
          filter: invert(1);
          margin-bottom: 2rem;
        }
        .footer {
          background: linear-gradient(
            95.62deg,
            #000d1a 40.28%,
            hsla(210, 100%, 3%, 1) 99.06%
          );
          padding: 3rem 0;
          color: #fff;
        }

        .addresses {
          display: flex;
          margin-top: 2rem;
        }

        .details {
          margin-right: 2em;
        }

        address {
          display: flex;
          flex-direction: column;
          font-style: normal;
          line-height: 1.75rem;
        }
        .rounded-face {
          width: 130px;
          border-radius: 130px;
        }

        @media (max-width: 1000px) {
          :global(.contacts) {
            display: block;
          }
          .details {
            text-align: center;
            margin-right: 0;
          }
          .location {
            margin-bottom: 1rem;
          }
          :global(.grid) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
              'riku riku'
              'pyry pyry'
              'janne janne'
              'cihan cihan'
              'olli olli';
            justify-items: center;
          }
          .logo {
            margin-bottom: 2rem;
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
              'olli _'
              'location details';
            justify-items: center;
          }
          .logo {
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 750px) {
          :global(.grid) {
            display: block;
          }
          .face {
            margin-top: 2rem;
          }
        }

        @media (max-width: 350px) {
          :global(.grid),
          .face {
            display: block;
          }
          .face {
            margin-bottom: 3rem;
          }
        }
        .social {
          display: flex;
          align-items: center;
          margin-top: 0.5rem;
        }
        .social :global(svg) {
          fill: #fff;
          margin-right: 7px;
        }
      `}</style>
    </footer>
  );
};
