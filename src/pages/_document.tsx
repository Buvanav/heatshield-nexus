import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="HeatShield Nexus - Personal early warning system for extreme heat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🛡️</text></svg>" />
      </Head>
      <body className="bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
