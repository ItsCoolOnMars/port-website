import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import MyNavbar from './navbar';

export const siteTitle = "Maxim's Blog";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="py-8">
        <MyNavbar />
      </div>
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Maxim Musikhin's personal portfolio website"
          />
        </Head>

        <main>{children}</main>
      </div>
      <footer className="font-thin scale-50"></footer>
    </div>
  );
}
