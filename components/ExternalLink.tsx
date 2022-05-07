import React, { ReactNode } from "react";
import styles from "styles/components/ExternalLink.module.scss";

type Props = { href: string; ["aria-label"]?: string; children: ReactNode; neutral?: boolean };

const ExternalLink = (props: Props) => {
  return (
    <a
      href={props.href}
      target='_blank'
      rel='noreferrer noopener'
      aria-label={props["aria-label"]}
      className={props.neutral ? styles.neutral : ""}>
      {props.children}
    </a>
  );
};

export default ExternalLink;
