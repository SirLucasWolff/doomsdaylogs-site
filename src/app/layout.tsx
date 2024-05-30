"use client";

import { ReactNode } from 'react';
import Head from 'next/head';
import './globals.css';

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <title>Doomsday Logs</title>
        <link rel="icon" href="/images/icone.png" />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col">
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

