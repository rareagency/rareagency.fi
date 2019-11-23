import React from 'react';
import { AboutSection } from '../components/about-section';
import { WorkspaceSection } from '../components/workspace-section';
import { Layout } from '../layouts/index/layout';

const Home = () => (
  <Layout>
    <AboutSection imageUrl="./static/4259964432_57f6305823_k.jpg">
      <h2>Vain laadukkainta ohjelmistokonsultointia</h2>
      <h3>Etsitkö luotettavaa teknistä partneria seuraavaan hankkeeseenne?</h3>

      <p>
        Me olemme asiakkaillemme enemmän kuin pelkkä käsipari. Sulaudumme osaksi
        tiimiänne ja jaamme teille taidot ja työkalut joilla menestytte
        nykyaikaisen ohjelmistokehityksen kentällä – nyt ja tulevaisuudessa.
      </p>

      <h3>Rautaista teknologista osaamista</h3>
      <p>
        Web- ja mobiilikehitys. APIt. Pilvipalvelut. Moderni DevOps.
        <br />
        Mitä ikinä tarvitsettekin, me pystymme auttamaan.
        <br />
      </p>
      <p>
        Rakentaessamme ohjelmistoja Suomen ja Euroopan tunnetuimmille yhtiöille,
        olemme oppineet ratkaisemaan ongelmat tehokkaasti aina loppukäyttäjä
        sekä asiakkaamme bisnes edellä.
      </p>

      <h3>Prototyyppi, moderni webbipalvelu vai monoliittinen legacy?</h3>
      <p>
        Olipa projektinne millainen tahansa, me pystymme tuomaan siihen – ja
        ennen kaikkea tiimiinne – henkäyksen uutta.
      </p>
    </AboutSection>
    <WorkspaceSection />
    <AboutSection imageUrl="./static/riccardo-annandale-7e2pe9wjL9M-unsplash.jpg">
      <h2>Prosessimme</h2>
      <p>
        Lähestymme työtämme aina asiakkaan tarpeet ja tavoitteet edellä. Autamme
        teitä luomaan laadukkaita ohjelmistoja, joihin käyttäjännä rakastuvat ja
        jotka auttavat bisnestänne saavuttamaan tavoitteet.
      </p>
      <p>
        Käytämme Rarella modernien teknologioiden lisäksi myös uusimpia ketterän
        ohjelmistokehityksen menetelmiä, ja opetamme niitä tiimillenne
        teknologisen taituruuden ohessa.
      </p>
      <p>
        Parhaassa tilanteessa teemme itsestämme tarpeettomia, kun tiiminne on
        omaksunut meiltä tarvittavat tiedot, taidot ja prosessit. Työmme
        valmistuttua voitte tukeutua omaan tiimiinne, ja kulkea kohti
        tulevaisuuden projekteja itsevarmoin askelin.
      </p>

      <h3>Teknologiat</h3>
      <p>
        Tykkäämme pysyä ajan tasalla uusimmista teknologioista, mutta tärkeintä
        on oikean työkalun valitseminen kussakin tapauksessa olevan ongelman
        ratkaisemiseen.
      </p>
      <p>
        Viime aikoina olemme suosineet seuraavia teknologioita:
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
);

export default Home;
