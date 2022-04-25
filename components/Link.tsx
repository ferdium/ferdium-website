import NextLink from "next/link";
import React, { ReactNode } from "react";

type Props = { children: ReactNode; href: string };

const Link = (props: Props) => {
  return (
    <NextLink href={props.href}>
      <a>{props.children}</a>
    </NextLink>
  );
};

export default Link;
