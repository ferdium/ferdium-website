import React from "react";
import { CopyBlock, nord } from "react-code-blocks";
import CodeBlock from "./CodeBlock";

type Props = {
  text: string;
  title: string;
};

const CodeBlockSection = (props: Props) => {
  return (
    <article style={{ width: "450px", marginBottom: "1rem" }}>
      <h3>{props.title}</h3>
      <CodeBlock code={props.text} />
    </article>
  );
};

export default CodeBlockSection;
