import { useEffect } from "react";
import { createClient } from "../prismicio";

export function Copyright({ copyright }) {
  // async function getData() {
  //   const client = createClient();
  //   const response = await client.getSingle("copyright");
  //   console.log(response);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <a href={copyright.link.url}>{copyright.name}</a>
    </div>
  );
}
