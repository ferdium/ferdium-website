import NextLink from "next/link";
import React, { ReactNode } from "react";

type Props = { children: ReactNode; href: string; ["aria-label"]?: string };

const Link = (props: Props) => {
  return (
    <NextLink href={props.href}>
      <a aria-label={props["aria-label"]}>{props.children}</a>
    </NextLink>
  );
};

export default Link;
