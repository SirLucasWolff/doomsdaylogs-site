"use client";
import Image from 'next/image';
import { ReactNode } from 'react';
import Head from 'next/head';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>Doomsday </title>
        <link rel="icon" href="/doomsdaylogs-site/images/icone.ico" />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
};



export default Layout;

