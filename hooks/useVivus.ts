import { useEffect, useRef } from 'react';
import Vivus from 'vivus';

function initializeVivus(selector: string | SVGSVGElement) {
  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    if (typeof selector === 'string') {
      Array.from(document.querySelectorAll<HTMLElement>(selector)).forEach(
        el => {
          el.style.visibility = 'visible';
        }
      );
    } else {
      selector.style.visibility = 'visible';
    }
    return;
  }

  // Ref is actually SVGSVGElement but Vivus only accepts HTMLElement
  new Vivus((selector as unknown) as HTMLElement, {
    duration: 500,
    type: 'scenario', // allows adding data-start, data-duration to individual paths
    animTimingFunction: Vivus.EASE_OUT,
    onReady: vivus => {
      (vivus as Vivus & { el: HTMLElement }).el.style.visibility = 'visible';
    }
  });
}

export function useVivusRef(dependencies: unknown[] = []) {
  const vivus = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!vivus.current) {
      return;
    }

    initializeVivus(vivus.current);
  }, [vivus, ...dependencies]);

  return vivus;
}
