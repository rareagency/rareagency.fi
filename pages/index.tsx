import React from 'react';
import { AboutSection } from '../components/about-section';
import { WorkspaceSection } from '../components/workspace-section';
import { Layout } from '../layouts/index/layout';

const Home = () => {
  return (
    <>
      <Layout>
        <AboutSection>
          <h2>
            Luotettu teknologiakumppani
            <br /> seuraavaan projektiisi?
          </h2>

          <p>
            Rare toimii kumppanina ohjelmistohankkeissa niin startupeille kuin
            suurillekkin yrityksille. Olemme asiakkaillemme enemmän kuin pelkkä
            käsipari – jaamme oman tietotaitomme digitaalisten tuotteiden
            kehittämisestä ja autamme projektin ohjaamisessa aina ideasta
            tuotantoon.
          </p>

          <h3>Teemme konsepteista käsinkosketeltavia</h3>
          <p>
            Autamme asiakkaitamme räjäyttämään mieliä. Oli kyseessä sitten
            prototyyppi, MVP tai uusi projekti projekti kokeneemmalta tiimiltä,
            me takaamme odotustenne ylittyvän.
          </p>

          <h3>Rare osana tiimiänne</h3>
          <p>
            Web- ja mobiilikehitys, APIt, Pilvipalvelut, Moderni DevOps.
            <br />
            Toimimme aktiivisena osana tiimiänne tukien, haastaen ja jakaen
            osaamistamme teille.
          </p>
        </AboutSection>

        <WorkspaceSection />
        <AboutSection>
          <h2>Ohjelmistokehittäjien luottama</h2>
          <p>
            Autamme asiakkaitamme luomaan odotukset ylittäviä ohjelmistoja,
            joihin käyttäjät rakastuvat.
          </p>
          <h3>Ketterä kehitys</h3>
          <p>
            Käytämme modernien teknologioiden lisäksi myös uusimpia ketterän
            ohjelmistokehityksen menetelmiä, ja opetamme niitä tiimillenne
            teknologisen taituruuden ohessa.
          </p>
          <p>
            Parhaassa tilanteessa teemme itsestämme tarpeettomia, kun tiiminne
            on omaksunut meiltä tarvittavat tiedot, taidot ja prosessit. Työmme
            valmistuttua voitte tukeutua omaan tiimiinne, ja kulkea kohti
            tulevaisuuden projekteja itsevarmoin askelin.
          </p>

          <h3>Teknologiat</h3>
          <p>
            Tykkäämme pysyä ajan tasalla uusimmista teknologioista, mutta
            tärkeintä on oikean työkalun valitseminen kussakin tapauksessa
            olevan ongelman ratkaisemiseen.
          </p>
          <p>
            Käytämme jatkuvasti avoimen lähdekoodin ratkaisuja, ja seuraamme
            alan kehitystä aktiivisena osana yhteisöä. Viime aikoina olemme
            suosineet seuraavia teknologioita:
            <br />
            <b>
              TypeScript, React, React Native, Node.js, GraphQL, AWS, Azure,
              Terraform, Serverless Framework, Docker
            </b>
          </p>

          <h3>Kiinnostuitko?</h3>
          <p>
            Ota yhteyttä sähköpostitse osoitteeseen riku@rareagency.fi tai
            puhelimitse <strong>+358&nbsp;50&nbsp;470&nbsp;0715</strong>, niin
            jutellaan lisää tarpeistanne!
          </p>
        </AboutSection>
      </Layout>
    </>
  );
};

export default Home;
