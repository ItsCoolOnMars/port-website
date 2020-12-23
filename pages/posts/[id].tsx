import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function Post() {
  return (
    <Layout>
      <Head>
        <title></title>
      </Head>
      <article>
        <h1></h1>
        <div></div>
        <div />
      </article>
    </Layout>
  );
}
