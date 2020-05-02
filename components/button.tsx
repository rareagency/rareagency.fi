import React, { HTMLProps } from 'react';

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef<
  HTMLAnchorElement,
  HTMLProps<HTMLAnchorElement>
>((props, ref) => {
  const { children, className } = props;

  return (
    <a
      ref={ref}
      className={['button', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
      <style jsx>{`
        .button {
          display: inline-block;
          padding: 15px 50px;
          border-radius: 25px;
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          background: #ff584d;
          box-sizing: border-box;
          text-align: center;
          margin-top: 1.5rem;
        }
      `}</style>
    </a>
  );
});
