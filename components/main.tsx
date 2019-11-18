import React, { useRef, useState, useEffect } from 'react';
import { Center } from './center';
import { Workspace } from './illustrations/workspace';
import { Section } from './section';

function useOnScreen(ref: React.RefObject<Element>, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

export const Main: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const onScreen = useOnScreen(ref, '-100px');

  useEffect(() => {
    document.body.classList.remove('background-light', 'background-dark');
    document.body.classList.add(
      onScreen ? 'background-light' : 'background-dark'
    );
  }, [onScreen]);

  return (
    <main className="main" ref={ref}>
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
