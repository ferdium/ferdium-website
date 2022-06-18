import NextHead from "next/head";
import React from "react";

type Props = {
  title?: string;
};

const Head = (props: Props) => {
  return (
    <NextHead>
      <title>{props.title || "Ferdium | The home for all your services"}</title>
      <meta
        name='description'
        content='Introducing a great productivity tool to keep all messaging, productivity, and online services in one place'></meta>
    </NextHead>
  );
};

export default Head;
