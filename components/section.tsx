import React from 'react';

export const Section: React.FC<{
  title: string | JSX.Element;
  action?: { href: string; title: string };
  image: JSX.Element;
}> = ({ title, children, action, image }) => (
  <main className="main">
    <section className="main__content">
      <div className="title">
        {typeof title === 'string' && <h2>{title}</h2>}
        {typeof title !== 'string' && title}
      </div>
      <article className="content">{children}</article>
      {action && (
        <div className="action">
          <a href={action.href} className="button">
            {action.title}
          </a>
        </div>
      )}
      <div className="illustration">{image}</div>
    </section>

    <style jsx>{`
      .main__content {
        display: grid;
        grid-template-columns: 60% auto;
        grid-template-areas:
          'title image'
          'content image'
          'button .';
      }

      .title {
        grid-area: title;
      }

      .main {
        transition: opacity 0.4s ease-in-out;
      }

      .illustration {
        grid-area: image;
        grid-row-start: 1;
        grid-row-end: 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        box-sizing: border-box;
      }
      .illustration :global(svg) {
        max-width: 100%;
        max-height: 350px;
      }
      @media (max-width: 1100px) {
        .main__content {
          grid-template-columns: 50% 50%;
          grid-template-areas:
            'title title'
            'content image'
            'button .';
        }
        .illustration {
          grid-row-start: 2;
          grid-row-end: 3;
        }
      }
      @media (max-width: 500px) {
        .main__content {
          grid-template-columns: 100%;
          grid-template-areas:
            'image'
            'title'
            'content'
            'button';
        }
        .illustration {
          grid-row-start: 1;
          grid-row-end: 2;
        }
        .illustration :global(svg) {
          padding: 2rem 0;
          padding-top: 0;
          max-height: 300px;
        }
      }

      .content {
        grid-area: content;
      }

      .content p:last-of-type {
        margin-bottom: 3rem;
      }
      .action {
        padding-top: 1em;
        grid-area: button;
      }

      .button {
        display: inline-block;
        padding: 0.7rem 6rem;
        border: 5px solid #dedede;
        border-radius: 5px;
        color: #919191;
        text-decoration: none;
      }
    `}</style>
  </main>
);
