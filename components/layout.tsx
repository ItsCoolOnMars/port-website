import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import MyNavbar from './navbar';

const name = 'Maxim';
export const siteTitle = "Maxim's Blog";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <div className="py-4">
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
        {!home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
