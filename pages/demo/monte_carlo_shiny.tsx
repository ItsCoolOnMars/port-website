import Layout from '../../components/layout';
import Head from 'next/head';

export default function Post() {
  return (
    <Layout>
      <Head>
        <title></title>
      </Head>
      <article className="py-8">
        <h1 className="mx-4">Shiny Demo App</h1>
        <div>
          <iframe
            className="py-2 px-2 my-5 mx-5"
            id="example1"
            src="https://two2mars.shinyapps.io/monte_carlo_demo/"
            width="1600px"
            height="800px"
            style={{ border: '1px solid black', display: 'block' }}
          />
        </div>
        <div />
      </article>
    </Layout>
  );
}
