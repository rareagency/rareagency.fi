import React from 'react';

export const Center: React.FC = ({ children }) => (
  <div className="center">
    {children}

    <style jsx>{`
      .center {
        margin: 0 auto;
        width: 1200px;
      }

      @media (max-width: 1300px) {
        .center {
          margin: 0 2rem;
          width: calc(100% - 4rem);
        }
      }
    `}</style>
  </div>
);
