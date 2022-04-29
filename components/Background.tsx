import React, { useEffect, useState } from "react";
import styles from "styles/components/Background.module.scss";

type Props = {};

const Background = (props: Props) => {
  const [nrOfSquares, setNrOfSquares] = useState(90);
  useEffect(() => {
    setNrOfSquares((window.innerHeight / 64) * 10 + 20);
  }, []);
  return (
    <div id={styles.wrapper}>
      <div id={styles.background}>
        <div id={styles.grid}>
          {Array(Math.ceil(nrOfSquares))
            .fill(1)
            .map((item, index) => (
              <div
                className={`${styles.square} ${styles[`square-${index % 10}`]} ${
                  styles[`fade-${Math.trunc(Math.random() * 10)}`]
                }`}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Background;
