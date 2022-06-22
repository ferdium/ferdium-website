import React from "react";
import CodeBlock from "./CodeBlock";
import styles from "styles/components/CodeBlockSection.module.scss";
type Props = {
  text: string;
  title: string;
};

const CodeBlockSection = (props: Props) => {
  return (
    <article className={styles.codeblocksection}>
      <h3>{props.title}</h3>
      <CodeBlock code={props.text} />
    </article>
  );
};

export default CodeBlockSection;
