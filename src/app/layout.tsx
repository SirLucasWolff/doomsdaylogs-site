"use client";
import Image from 'next/image';
import { ReactNode } from 'react';
import Head from 'next/head';
import './globals.css';

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>Doomsday Logs</title>
        <link rel="icon" href="/doomsdaylogs-site/images/icone.ico" />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Exibir o ícone como uma imagem na página */}
          <Image 
            src="/doomsdaylogs-site/images/icone.ico" 
            alt="Site Icon" 
            width={32} 
            height={32} 
            className="hidden"
          />
          {children}
        </div>
      </body>
    </html>
  );
};

type LayoutProps = {
  children: ReactNode;
};



export default Layout;

