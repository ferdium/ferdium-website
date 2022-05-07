import React, { MouseEventHandler, ReactNode } from "react";
import styles from "styles/components/Button.module.scss";

type Props = {
  children: ReactNode;
  cta?: boolean;
  size?: string;
  onClick?: MouseEventHandler;
  icon?: boolean;
  ["aria-label"]?: string;
  prefix?: ReactNode | string;
};

const Button = (props: Props) => {
  let className = props.cta ? styles.cta : styles.base;

  if (props.size) {
    className += ` ${styles[props.size]}`;
  }
  if (props.icon) {
    className += ` ${styles.icon}`;
  }
  return (
    <button className={className} onClick={props.onClick} aria-label={props["aria-label"]}>
      {props.prefix ? <div className={styles.prefix}>{props.prefix}</div> : <></>}
      <div>{props.children}</div>
    </button>
  );
};

export default Button;
