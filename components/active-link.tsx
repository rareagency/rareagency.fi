import React, { Children } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { WithRouterProps } from 'next/dist/client/with-router';

type ActiveLinkProps = {
  href: string;
  activeClassName: string;
} & WithRouterProps;

export const ActiveLink = withRouter<ActiveLinkProps>(
  ({ router, children, ...props }) => {
    const child = Children.only(children);

    if (!React.isValidElement(child)) {
      return <Link {...props}>{children}</Link>;
    }

    let className = child.props.className || null;

    if (router.pathname === props.href && props.activeClassName) {
      className = `${className !== null ? className : ''} ${
        props.activeClassName
      }`.trim();
    }

    delete props.activeClassName;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
  }
);
