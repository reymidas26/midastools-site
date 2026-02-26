import Head from 'next/head';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Analytics: add Plausible or Vercel Analytics script here
            Plausible: <script defer data-domain="midastools.co" src="https://plausible.io/js/script.js"></script>
            Vercel: enable in Vercel dashboard → Analytics → Enable
        */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
