import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllPostsForHome } from '../../lib/datocms';

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

// export async function getStaticProps(preview = false) {
//   const allPosts = (await getAllPostsForHome(false)) || [];
//   return {
//     props: { allPosts },
//   };
// }
