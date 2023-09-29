import NextLink from "next/link";
import React, { ReactNode } from "react";
import styles from "styles/components/Link.module.scss";

type Props = { children: ReactNode; href: string; ["aria-label"]?: string; neutral?: boolean };

const Link = (props: Props) => {
  return (
    (<NextLink
      href={props.href}
      aria-label={props["aria-label"]}
      className={props.neutral ? styles.neutral : undefined}>

      {props.children}

    </NextLink>)
  );
};

export default Link;
