import React, { useEffect } from "react";
import getAuthor from "../../services/getAuthor";
import Image from "next/image";
import { Card } from "../../styles/pages/author";

// import { useRouter } from "next/router";

export default function Author({ author }) {
  const { name, avatar_url, bio } = author;
  // const router = useRouter();

  // // if (router.isFallback) {
  // //   return <h2>Loading...</h2>;
  // // }

  return (
    <Card>
      <h1>{name}</h1>
      <p>{bio}</p>
      <img src={avatar_url} alt={name} width="90px" height="90px" />
    </Card>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { username: "angeloricardoweb" } }];
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const author = await getAuthor(params.username);
  return {
    props: { author },
    revalidate: 30, //aguarda 30 segundos para atualizar
  };
}
