import React from "react";
import { CopyBlock, nord } from "react-code-blocks";

type Props = {
  text: string;
  title: string;
};

const CodeBlockSection = (props: Props) => {
  return (
    <article style={{ width: "400px", marginBottom: "1rem" }}>
      <h3>{props.title}</h3>
      <CopyBlock text={props.text} theme={nord} language='bash' codeBlock showLineNumbers={false} />
    </article>
  );
};

export default CodeBlockSection;
