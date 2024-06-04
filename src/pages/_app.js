// src/pages/_app.js

import Head from 'next/head';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Doomsday Logs</title>
        <link rel="icon" href="/doomsdaylogs-site/images/icone.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
