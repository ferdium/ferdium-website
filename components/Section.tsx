import React, { ReactNode } from "react";
import styles from "styles/components/Section.module.scss";

type Props = { children: ReactNode; row?: boolean; className?: string; brand?: boolean };

const Section = (props: Props) => {
  const classes = [styles.content, props.className];

  return (
    <>
      <section className={styles.section}>
        {props.brand && <div className={styles.brand} />}
        <div style={{ flexDirection: props.row ? "row" : "column" }} className={classes.join(" ")}>
          {props.children}
        </div>
      </section>
    </>
  );
};

export default Section;
