import NextHead from "next/head";
import React from "react";

type Props = {};

const Head = (props: Props) => {
  return (
    <NextHead>
      <title>Ferdium | The home for all your services</title>
      <meta
        name='description'
        content='Introducing a great productivity tool to keep all messanging, productivity, and online services in one place'></meta>
    </NextHead>
  );
};

export default Head;
