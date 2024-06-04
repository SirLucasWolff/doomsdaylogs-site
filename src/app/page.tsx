import Head from 'next/head';
import MainSection from './MainSection';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: "Doomsday Logs",
  description: "Doomsday Logs Tool",
  icons: {
    icon: '/images/icone.ico', 
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Doomsda</title>
        <link rel="icon" href="/images/icone.ico" />
      </Head>
      <div>
        <MainSection />
      </div>
    </>
  );
}

