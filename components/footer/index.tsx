import React, { useState } from 'react';
import { Center } from '../center';
import { Twitter } from './icons/twitter';
import { Linkedin } from './icons/linkedin';
import { Github } from './icons/github';
import SVG from 'react-inlinesvg';

import { useVivusRef } from '../../hooks/useVivus';

type Teammate = {
  name: string;
  title: string;
  email: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
  image: string;
};

function Teammate(details: Teammate) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const vivus = useVivusRef([imageLoaded]);

  return (
    <>
      <section className="face">
        <SVG
          innerRef={vivus as any}
          src={details.image}
          onLoad={() => setImageLoaded(true)}
          className="rounded-face"
        />
        <address>
          <strong className="name">{details.name}</strong>
          <span>{details.title}</span>
          <span>{details.email}</span>
          <span className="social">
            {details.linkedin && (
              <a href={details.linkedin}>
                <Linkedin />
              </a>
            )}
            {details.github && (
              <a href={details.github}>
                <Github />
              </a>
            )}
            {details.twitter && (
              <a href={details.twitter}>
                <Twitter />
              </a>
            )}
          </span>
        </address>
      </section>
      <style jsx>{`
        .name {
          font-weight: bold;
        }

        .face {
          display: flex;
          align-items: center;
        }

        address {
          display: flex;
          flex-direction: column;
          font-style: normal;
          line-height: 1.75rem;
        }
        :global(.rounded-face) {
          width: 100px;
          margin-right: 1rem;
          border-radius: 130px;
        }

        @media (max-width: 1000px) {
          :global(.grid) {
            grid-template-columns: 1fr 1fr;
            justify-items: center;
          }
        }

        @media (max-width: 1000px) {
          :global(.grid) {
            grid-template-columns: 1fr 1fr;
            justify-items: center;
          }
        }

        @media (max-width: 750px) {
          :global(.grid) {
            display: block;
          }
          .face {
            margin-top: 2rem;
            justify-content: center;
          }
          .face address {
            width: 160px;
          }
          :global(.rounded-face) {
            margin-right: 2rem;
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
    </>
  );
}

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
        <div className="company-info">
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
          <Teammate
            name="Riku Rouvila"
            title="Lead Developer"
            email="riku@rare.fi"
            linkedin="https://www.linkedin.com/in/rikurouvila/"
            github="https://github.com/rikukissa"
            twitter="https://twitter.com/rikurouvila"
            image={'/static/faces/riku.svg'}
          />
          <Teammate
            name="Pyry Rouvila"
            title="Frontend Creator"
            email="pyry@rare.fi"
            linkedin="https://www.linkedin.com/in/naf/"
            github="https://github.com/naftis"
            image={'/static/faces/pyry.svg'}
          />
          <Teammate
            name="Janne Kallunki"
            title="Full-stack Designer"
            email="janne@rare.fi"
            linkedin="https://www.linkedin.com/in/jkallunki/"
            github="https://github.com/jkallunki"
            twitter="https://twitter.com/kallunkj"
            image={'/static/faces/janne.svg'}
          />
          <Teammate
            name="Cihan Bebek"
            title="Lead Developer"
            email="cihan@rare.fi"
            linkedin="https://www.linkedin.com/in/cihan-bebek/"
            github="https://github.com/keksike"
            twitter="https://twitter.com/cihanbebek"
            image={'/static/faces/cihan.svg'}
          />
          <Teammate
            name="Olli Jaakkola"
            title="Full-stack Developer"
            email="olli@rare.fi"
            linkedin="https://www.linkedin.com/in/olli-jaakkola/"
            github="https://github.com/ollija"
            image={'/static/faces/olli.svg'}
          />
          <Teammate
            name="Kalle Hirvola"
            title="Software Developer"
            email="kalle@rare.fi"
            github="https://github.com/eioo"
            image={'/static/faces/kalle.svg'}
          />
          <Teammate
            name="Hannes Aaltonen"
            title="Software Developer"
            email="hannes@rare.fi"
            github="https://github.com/haalto"
            linkedin="https://www.linkedin.com/in/hannes-aaltonen-9911ba121/"
            image={'/static/faces/hannes.svg'}
          />
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

        :global(.grid) {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;

          grid-gap: 2rem;
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

        .company-info {
          margin-right: 2em;
        }

        address {
          display: flex;
          flex-direction: column;
          font-style: normal;
          line-height: 1.75rem;
        }

        @media (max-width: 1300px) {
          :global(.interested) {
            padding-bottom: 2rem !important;
          }
        }

        @media (max-width: 1000px) {
          :global(.contacts) {
            display: block;
          }
          .company-info {
            text-align: center;
            margin-right: 0;
          }
          .location {
            margin-bottom: 1rem;
          }
          :global(.grid) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            justify-items: center;
          }
          .logo {
            margin-bottom: 2rem;
          }

          :global(.grid) {
            grid-template-columns: 1fr 1fr;
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
        }
      `}</style>
    </footer>
  );
};
