import React from 'react';

export const Title: React.FC = ({ children }) => (
  <>
    <h1 className="title">{children}</h1>

    <style jsx>{`
      .title {
        margin-top: 0;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 800;
        font-size: 3rem;
        letter-spacing: 0.07rem;
      }

      @media (max-width: 1200px) {
        .title {
          font-size: 2.8rem;
        }
      }

      @media (max-width: 1000px) {
        .title {
          font-size: 2.2rem;
        }
      }

      @media (max-width: 900px) {
        .title {
          font-size: 1.9rem;
        }
      }

      @media (max-width: 800px) {
        .title {
          font-size: 1.5rem;
          letter-spacing: 0.05rem;
        }
      }
    `}</style>
  </>
);
