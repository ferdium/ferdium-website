import React from "react";
import CodeBlock from "./CodeBlock";

type Props = {
  text: string;
  title: string;
};

const CodeBlockSection = (props: Props) => {
  return (
    <article style={{ width: "500px", marginBottom: "1rem" }}>
      <h3>{props.title}</h3>
      <CodeBlock code={props.text} />
    </article>
  );
};

export default CodeBlockSection;
