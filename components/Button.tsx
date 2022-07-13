import React, { MouseEventHandler, ReactNode } from "react";
import styles from "styles/components/Button.module.scss";
type Props = {
  children: ReactNode;
  cta?: boolean;
  cta2?: boolean;
  size?: string;
  square?: boolean;
  onClick?: MouseEventHandler;
  icon?: boolean;
  ["aria-label"]?: string;
  prefix?: ReactNode | string;
  asDiv?: boolean;
};

const Button = (props: Props) => {
  let className = styles.base;

  if (props.cta) {
    className = styles.cta;
  }

  if (props.cta2) {
    className = styles.ctaSecondary;
  }
  if (props.square) {
    className += ` ${styles.square}`;
  }

  if (props.size) {
    className += ` ${styles[props.size]}`;
  }
  if (props.icon) {
    className += ` ${styles.icon}`;
  }
  const content = (
    <>
      {props.prefix ? <div className={styles.prefix}>{props.prefix}</div> : <></>}
      <div>{props.children}</div>
    </>
  );

  if (props.asDiv) {
    return (
      <div className={className} aria-label={props["aria-label"]}>
        {content}
      </div>
    );
  }
  return (
    <button className={className} onClick={props.onClick} aria-label={props["aria-label"]}>
      {content}
    </button>
  );
};

export default Button;
