import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { GetStaticProps } from 'next';
import { getAllPostsForHome, request } from '../lib/datocms';
import React from 'react';
import Post from '../components/post';
import { CardColumns } from 'react-bootstrap';

//overflow-hidden
// Cards are overlapping
export default function Home({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="grid py-8 px-20">
        <div className="mx-auto my-auto card-group">
          {allPosts.map(({ coverImage, date, title, slug, description }) => (
            <Post
              coverImage={coverImage}
              date={date}
              title={title}
              slug={slug}
              description={description}
            ></Post>
          ))}
        </div>
        <div></div>
        <div className="bg-gray-100 whitespace-pre-wrap"></div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(preview = false) {
  const allPosts = (await getAllPostsForHome(false)) || [];
  return {
    props: { allPosts },
  };
}
