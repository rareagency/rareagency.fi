import React from 'react';
import { AboutSection } from '../components/about-section';
import { WorkspaceSection } from '../components/workspace-section';
import { Layout } from '../layouts/index/layout';

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
              Rare toimii kumppanina ohjelmistohankkeissa niin startupeille kuin
              suurillekkin yrityksille.{' '}
              <span className="gray">
                Jaamme oman tietotaitomme digitaalisten tuotteiden
                kehittämisestä ja autamme projektin ohjaamisessa aina ideasta
                tuotantoon.
              </span>
            </p>
          </AboutSection>
          <AboutSection
            reverse={true}
            image="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          >
            <h3>Teemme konsepteista käsinkosketeltavia</h3>
            <p>
              Oli kyseessä sitten prototyyppi, MVP tai uusi projekti projekti
              kokeneemmalta tiimiltä, me takaamme odotustenne ylittyvän.
            </p>

            <h3>Rare osana tiimiänne</h3>
            <p>
              Web- ja mobiilikehitys, APIt, Pilvipalvelut, Moderni DevOps.
              <br />
              Toimimme aktiivisena osana tiimiänne tukien, haastaen ja jakaen
              osaamistamme teille.
            </p>
          </AboutSection>
        </div>

        <WorkspaceSection />
        <div>
          <AboutSection>
            <h2>Ohjelmistokehittäjien luottama</h2>
            <p>
              Autamme asiakkaitamme luomaan odotukset ylittäviä ohjelmistoja,
              joihin käyttäjät rakastuvat.
            </p>
          </AboutSection>
          <AboutSection
            reverse={false}
            image="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          >
            <h3>Ketterä kehitys</h3>
            <p>
              Käytämme modernien teknologioiden lisäksi myös uusimpia ketterän
              ohjelmistokehityksen menetelmiä, ja opetamme niitä tiimillenne
              teknologisen taituruuden ohessa.
            </p>
            <p>
              Parhaassa tilanteessa teemme itsestämme tarpeettomia, kun tiiminne
              on omaksunut meiltä tarvittavat tiedot, taidot ja prosessit.
              Työmme valmistuttua voitte tukeutua omaan tiimiinne, ja kulkea
              kohti tulevaisuuden projekteja itsevarmoin askelin.
            </p>
          </AboutSection>
          <AboutSection
            reverse={true}
            image="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
          >
            <h3>Teknologiat</h3>
            <p>
              Tykkäämme pysyä ajan tasalla uusimmista teknologioista, mutta
              tärkeintä on oikean työkalun valitseminen kussakin tapauksessa
              olevan ongelman ratkaisemiseen.
              <br />
              <br />
              Käytämme jatkuvasti avoimen lähdekoodin ratkaisuja, ja seuraamme
              alan kehitystä aktiivisena osana yhteisöä. Viime aikoina olemme
              suosineet seuraavia teknologioita:
              <br />
              <b>
                TypeScript, React, React Native, Node.js, GraphQL, AWS, Azure,
                Terraform, Serverless Framework, Docker.
              </b>
            </p>
            <h3>Kiinnostuitko?</h3>
            <p>
              Lisätietoa meistä, referenssiprojekteistamme ja siitä miten
              voisimme auttaa teidän tiimiänne saat ottamalla yhteyttä
              sähköpostitse osoitteeseen riku@rareagency.fi tai puhelimitse{' '}
              <strong>+358&nbsp;50&nbsp;470&nbsp;0715</strong>. <br />
              Kerromme mielellämme lisää!
            </p>
          </AboutSection>
        </div>
      </Layout>
      <style jsx>{`
        .gray {
          color: #666;
        }
      `}</style>
    </>
  );
};

export default Home;
