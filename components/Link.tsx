import NextLink from "next/link";
import React, { ReactNode } from "react";
import styles from "styles/components/Link.module.scss";

type Props = { children: ReactNode; href: string; ["aria-label"]?: string; neutral?: boolean };

const Link = (props: Props) => {
  return (
    <NextLink href={props.href}>
      <a aria-label={props["aria-label"]} className={props.neutral ? styles.neutral : undefined}>
        {props.children}
      </a>
    </NextLink>
  );
};

export default Link;
