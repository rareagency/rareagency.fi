import React from 'react';
import { Center } from './center';
import { Workspace } from './illustrations/workspace';
import { Section } from './section';

export const Main: React.FC = () => (
  <main className="main">
    <Center>
      <Section
        title="Suunnit&shy;teleeko tiimisi uutta webbi&shy;projektia?"
        image={<Workspace />}
        action={{ title: 'Lue lisää', href: '#read-more' }}
      >
        <p>
          Potkaise seuraava webbiprojektinne käyntiin oikealla jalalla ja vältä
          pahimmat sudenkuopat!
        </p>
        <p>
          Päivän mittainen <b>Kickstart: Moderni webbiprojekti</b>{' '}
          &#8209;workshoppimme antaa selkeät konkreettiset suuntaviivat
          seuraavaan React-projektiinne
        </p>
      </Section>
    </Center>
    <style jsx>{`
      .main {
        padding-top: 1rem;
        padding-bottom: 6rem;
      }
    `}</style>
  </main>
);
