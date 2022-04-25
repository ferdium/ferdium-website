import React, { ReactNode } from "react";
import styles from "styles/components/Button.module.scss";

type Props = { children: ReactNode; cta?: boolean; size?: string };

const Button = (props: Props) => {
  let className = props.cta ? styles.cta : styles.base;
  console.log(className);
  if (props.size) {
    className += ` ${styles[props.size]}`;
  }
  return <button className={className}>{props.children}</button>;
};

export default Button;
