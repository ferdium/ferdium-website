import { mdiCheckCircleOutline, mdiContentCopy } from "@mdi/js";
import React, { useEffect, useState } from "react";

import styles from "styles/components/CodeBlock.module.scss";
import Button from "./Button";
import Icon from "./Icon";

type Props = { code: string };

const CodeBlock = (props: Props) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      const text = document.createElement("textarea");
      text.innerHTML = props.code;
      text.select();
      document.execCommand("copy");
      document.removeChild(text);
      setCopied(true);
      return;
    }
    navigator.clipboard
      .writeText(props.code)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Something went wrong when copying to clipboard", err);
      });
  };
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div className={styles.codeblock}>
      <code className={styles.code}>{props.code}</code>
      <Button icon onClick={copy}>
        {copied ? (
          <div className={styles.check}>
            <Icon icon={mdiCheckCircleOutline} size={1} />
          </div>
        ) : (
          <Icon icon={mdiContentCopy} size={1} />
        )}
      </Button>
    </div>
  );
};

export default CodeBlock;
