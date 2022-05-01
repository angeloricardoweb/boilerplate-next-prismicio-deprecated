import { createClient } from "../prismicio";
import Head from "next/head";
import SEO from "../components/seo";

export default function Home({ welcome }) {
  const { title, message } = welcome;
  console.log(welcome);
  return (
    <>
      <Head>
        <title>Next Prismic Boilerplate</title>
      </Head>
      <SEO />
      <div>
        <h1>Prismic Boilerplate</h1>
        <h2>{title}</h2>
        <h2>{message}</h2>
      </div>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const welcomeResponse = await client.getSingle("welcome-message");
  const welcome = welcomeResponse.data;
  console.log(welcome);

  return {
    props: { welcome },
  };
}
