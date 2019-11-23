import React from 'react';
import { AboutSection } from '../components/about-section';
import { WorkspaceSection } from '../components/workspace-section';
import { Layout } from '../layouts/index/layout';

const Home = () => (
  <Layout>
    <AboutSection>
      <h2>Mitä me myydään?</h2>
      <p>
        Me myydään ohjelmistokehitystä omalta toimistoltamme ja konsultointia
        teidän toimistolla. Tullaan olemassa olevaan projektiin tiimin sekaan
        peeloileen ja näyttään teille mite hyvää softaa tehdään.
      </p>
      <p>
        Me myös jatkokehitetään ja ylläpidetään teidän tunkki angular projektia
        jos ei muuta keikkaa löydetä.
      </p>

      <h3>Konsultointi</h3>
      <p>Tullaan osaks tiimiä ja opetetaan kurkoja niistä</p>

      <h3>Uudet projektit</h3>
      <p>
        Jotain tähän siitä kuinka tehään nii hemmetin agilesti projektei teidän
        kanssa nii nopeesti ettette kerkee kissaa
      </p>
    </AboutSection>
    <WorkspaceSection />
    <AboutSection>
      <h2>Mitä me myydään?</h2>
      <p>
        Me myydään ohjelmistokehitystä omalta toimistoltamme ja konsultointia
        teidän toimistolla. Tullaan olemassa olevaan projektiin tiimin sekaan
        peeloileen ja näyttään teille mite hyvää softaa tehdään.
      </p>
      <p>
        Me myös jatkokehitetään ja ylläpidetään teidän tunkki angular projektia
        jos ei muuta keikkaa löydetä.
      </p>

      <h3>Konsultointi</h3>
      <p>Tullaan osaks tiimiä ja opetetaan kurkoja niistä</p>

      <h3>Uudet projektit</h3>
      <p>
        Jotain tähän siitä kuinka tehään nii hemmetin agilesti projektei teidän
        kanssa nii nopeesti ettette kerkee kissaa
      </p>
    </AboutSection>
  </Layout>
);

export default Home;
