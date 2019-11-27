import React from 'react';

export const GoogleTagManager = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-153430933-1"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-153430933-1');`
      }}
    />
  </>
);
