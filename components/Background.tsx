import React from "react";
import styles from "styles/components/Background.module.scss";

type Props = {};

const Background = (props: Props) => {
  return (
    <div id={styles.wrapper}>
      <div id={styles.background}>
        <div id={styles.grid}>
          {Array(90)
            .fill(1)
            .map((item, index) => (
              <div className={styles.square + " " + styles[`square-${index % 10}`]} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Background;
