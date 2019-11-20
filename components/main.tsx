import React from 'react';
import { Center } from './center';
import { Workspace } from './illustrations/workspace';
import { Section } from './section';

export const Main: React.FC = () => {
  return (
    <main className="main">
      <Center>
        <Section
          title="Suunnitteleeko tiimisi uutta webbiprojektia?"
          image={<Workspace />}
          action={{ title: 'Lue lisää', href: '/training' }}
        >
          <p>
            Potkaise seuraava webbiprojektinne käyntiin oikealla jalalla ja
            vältä yleisimmät sudenkuopat.
          </p>
          <p>
            <strong>Päivän mittainen React-kurssimme</strong> antaa selkeän
            suunnitelman seuraavaan React-projektiinne.
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
};
