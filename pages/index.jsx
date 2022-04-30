import { createClient } from "../prismicio";

export default function Home({ welcome }) {
  const { title, message } = welcome;
  console.log(welcome);
  return (
    <div>
      <h1>Prismic Boilerplate</h1>
      <h2>{title}</h2>
      <h2>{message}</h2>
    </div>
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
