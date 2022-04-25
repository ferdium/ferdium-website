import React, { ReactNode } from "react";
import styles from "styles/components/Section.module.scss";

type Props = { children: ReactNode };

const Section = (props: Props) => {
  return <section className={styles.section}>{props.children}</section>;
};

export default Section;
