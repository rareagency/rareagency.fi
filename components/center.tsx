import React from 'react';

export const Center: React.FC = ({ children }) => (
  <div className="center">
    {children}

    <style jsx>{`
      .center {
        margin: 0 auto;
        width: 1200px;
      }
    `}</style>
  </div>
);
