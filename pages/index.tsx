import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { GetStaticProps } from 'next';
import { request } from '../lib/datocms';

const HOMEPAGE_QUERY = `query MyQuery {
  allPosts(first: "1") {
    id
    _modelApiKey
    _status
  }
  allAuthors(locale: en) {
    id
    _firstPublishedAt
  }
}`;

export default function Home(data) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>{JSON.stringify(data, null, 2)}</div>;
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
