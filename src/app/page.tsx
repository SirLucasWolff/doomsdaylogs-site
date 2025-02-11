import Head from 'next/head';
import MainSection from './MainSection';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: "Doomsday Logs",
  description: "Doomsday Logs Tool",
  icons: {
    icon: '/doomsdaylogs-site/images/icone.ico', 
  },
  other: {
    refresh: "0;url=/",
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Doomsda</title>
        <link rel="icon" href="/images/icone.ico" />
        {/* 🔥 Aqui está o truque para recarregar a página sempre que acessada */}
        <meta httpEquiv="refresh" content="0;url=/" />
      </Head>
      <div>
        <MainSection />
      </div>
    </>
  );
}

