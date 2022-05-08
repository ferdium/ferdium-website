import React, { ReactNode } from "react";
import styles from "styles/components/Card.module.scss";

type Props = { children: ReactNode; icon?: ReactNode };

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      {props.icon && <div className={styles.icon}>{props.icon}</div>}
      <div className={styles.content}> {props.children}</div>
    </div>
  );
};

export default Card;
