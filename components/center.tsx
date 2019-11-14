import React from 'react';

export const Center: React.FC<{ className?: string }> = ({
  children,
  className
}) => (
  <div className={['center', className].filter(Boolean).join(' ')}>
    {children}

    <style jsx>{`
      .center {
        margin: 0 auto;
        width: 1200px;
      }

      @media (max-width: 1300px) {
        .center {
          padding: 0 4rem;
          width: 100%;
          box-sizing: border-box;
        }
      }
      @media (max-width: 800px) {
        .center {
          padding: 0 2rem;
        }
      }
      @media (max-width: 500px) {
        .center {
          padding: 0 1.5rem;
        }
      }
    `}</style>
  </div>
);
