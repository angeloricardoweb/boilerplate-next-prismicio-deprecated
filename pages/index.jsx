import { createClient } from "../prismicio";
import Head from "next/head";
import SEO from "../components/seo";
import SimpleForm from "../components/simple-form";

export default function Home({ welcome }) {
  const { title, message } = welcome;
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
        <div className="p-2 w-[420px] grid gap-2 border-2 rounded-md ">
          <h2>Simples Form</h2>
          <SimpleForm />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  try {
    const welcomeResponse = await client.getSingle("welcome-message");
    const welcome = welcomeResponse.data;
    return {
      props: { welcome },
    };
  } catch (error) {
    return {
      props: {
        welcome: {
          title: "Ops!",
          message: "Adicione seu primeiro Conteúdo",
        },
      },
    };
  }
}
