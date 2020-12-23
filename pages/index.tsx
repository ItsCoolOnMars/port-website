import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { GetStaticProps } from 'next';
import { request } from '../lib/datocms';
import React from 'react';
import Post from '../components/post';

const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

const HOMEPAGE_QUERY = `
{
  allPosts(orderBy: date_DESC, first: 20) {
    title
    slug
    excerpt
    date
    coverImage {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
        ...responsiveImageFragment
      }
    }
    author {
      name
      picture {
        url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
      }
    }
  }
}

${responsiveImageFragment}
`;
//overflow-hidden
export default function Home(data) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="fluid break-words">
        <div className="container mx-auto px-5">
          <Post
            coverImage={data.data.allPosts[0].coverImage}
            date={data.data.allPosts[0].date}
            title={data.data.allPosts[0].title}
            slug={data.data.allPosts[0].slug}
          ></Post>
        </div>
        <div></div>
        <div className="bg-gray-100 whitespace-pre-wrap">
          {JSON.stringify(data.data.allPosts, null, 2)}
        </div>
        ;
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
    preview: undefined,
  });
  return {
    props: { data },
  };
};
