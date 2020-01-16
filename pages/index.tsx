import React from 'react';
import { AboutSection } from '../components/about-section';
import { WorkspaceSection } from '../components/workspace-section';
import { Layout } from '../layouts/index/layout';

const Parallax = () => (
  <>
    <style jsx>{`
      div {
        height: 600px;
        background: url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80);
        background-size: cover;
      }
    `}</style>
    <div></div>
  </>
);

const Home = () => {
  return (
    <>
      <Layout>
        <div>
          <AboutSection>
            <h2>
              Luotettu teknologiakumppani
              <br /> seuraavaan projektiisi
            </h2>

            <p>
              Rare toimii kumppanina sovelluskehityksessä niin startupeille kuin
              suurillekin yrityksille.{' '}
              <span className="gray">
                Jaamme oman tietotaitomme digitaalisten tuotteiden
                kehittämisestä ja autamme projektin ohjaamisessa aina ideasta
                tuotantoon.
              </span>
            </p>
          </AboutSection>
          <AboutSection
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
            reverse={true}
          >
            <div>
              <h3>Prototyypit</h3>
              <p>
                Rakennamme nopeita prototyyppejä, MVP toteutuksia ja kokonaisia
                sovelluksia aina ideasta tuotantoon saakka. Asiantuntijuutemme
                keskittyy vahvasti käyttöliittymiin ja lupaamme kauniin,
                käytettävän ja kiillotetun lopputuloksen.
              </p>
            </div>
            <div>
              <h3>Frontend-kehitys</h3>
              <p>
                Datan visualisointi, Web- ja mobiilikehitys, APIt,
                Pilvipalvelut, Moderni DevOps.
                <br />
                Tulemme myös mielellämme osaksi valmista tiimiä tuoden
                osaamisemme ja ohjelmistokehityksen parhaat käytännöt mukanamme.
              </p>
            </div>
            <div>
              <h3>Pilvijutskat</h3>
              <p>
                Datan visualisointi, Web- ja mobiilikehitys, APIt,
                Pilvipalvelut, Moderni DevOps.
                <br />
                Tulemme myös mielellämme osaksi valmista tiimiä tuoden
                osaamisemme ja ohjelmistokehityksen parhaat käytännöt mukanamme.
              </p>
            </div>
            <div>
              <h3>Workshopit</h3>
              <p>
                Datan visualisointi, Web- ja mobiilikehitys, APIt,
                Pilvipalvelut, Moderni DevOps.
                <br />
                Tulemme myös mielellämme osaksi valmista tiimiä tuoden
                osaamisemme ja ohjelmistokehityksen parhaat käytännöt mukanamme.
              </p>
            </div>
          </AboutSection>
        </div>
        <Parallax />
        <div>
          <AboutSection>
            <h2>Ohjelmistokehittäjien luottama</h2>
            <p>
              Autamme teitä luomaan odotukset ylittäviä ohjelmistoja, joihin
              käyttäjät rakastuvat.
            </p>
          </AboutSection>
          <AboutSection reverse={false}>
            <div>
              <h3>Ketterä kehitys</h3>
              <p>
                Pyrimme tehokkuuteen, laatuun ja läpinäkyvyyteen myös
                toimintatavoissamme. <br />
                Luotamme ketteriin ohjelmistokehityksen menetelmiin ja tuomme ne
                mukanamme myös teidän luoksenne.
                <br />
                <br />
                Parhaassa tilanteessa teemme itsestämme tarpeettomia, kun
                tiiminne on omaksunut meiltä tarvittavat tiedot, taidot ja
                prosessit. Työmme valmistuttua voitte tukeutua omaan tiimiinne,
                ja kulkea kohti tulevaisuuden projekteja itsevarmoin askelin.
              </p>
            </div>
            <div>
              <h3>Teknologia</h3>
              <p>
                Tykkäämme pysyä ajan tasalla uusimmista teknologioista, mutta
                tärkeintä on oikean työkalun valitseminen kussakin tapauksessa
                olevan ongelman ratkaisemiseen.
                <br />
                <br />
                Käytämme jatkuvasti avoimen lähdekoodin ratkaisuja, ja seuraamme
                alan kehitystä aktiivisena osana yhteisöä. Viime aikoina olemme
                suosineet projekteissamme muun muassa seuraavia teknologioita:
                <br />
                <b>
                  TypeScript, React, React Native, Node.js, GraphQL, AWS, Azure,
                  Terraform, Serverless Framework, Docker.
                </b>
              </p>
            </div>
          </AboutSection>
        </div>
        <WorkspaceSection />
      </Layout>
      <style jsx>{`
        @media (max-width: 800px) {
          h2 {
            font-size: 1.45rem;
          }
        }
        .gray {
          color: #666;
        }
      `}</style>
    </>
  );
};

export default Home;
