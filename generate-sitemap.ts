// eslint-disable-next-line @typescript-eslint/no-var-requires
const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://rareagency.fi',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'out/',
  nextConfigPath: __dirname + '/next.config.js',
  ignoredExtensions: ['png', 'jpg']
});

export {};
