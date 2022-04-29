import React, { ReactNode } from "react";
import styles from "styles/components/Section.module.scss";

type Props = { children: ReactNode; row?: boolean; className?: string; noBg?: boolean };

const Section = (props: Props) => {
  const classes = [styles.section, props.className];

  return (
    <section className={classes.join(" ")} style={{ flexDirection: props.row ? "row" : "column" }}>
      {props.children}
    </section>
  );
};

export default Section;
