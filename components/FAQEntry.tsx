import React, { ReactNode } from "react";
import styles from "styles/components/FAQEntry.module.scss";

type Props = { title: string; children: ReactNode };

const FAQEntry = (props: Props) => {
  return (
    <details className={styles.entry}>
      <summary>
        <h3 style={{ display: "inline" }}>{props.title}</h3>
      </summary>
      <article>{props.children}</article>
    </details>
  );
};

export default FAQEntry;
