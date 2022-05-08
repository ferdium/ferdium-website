import React, { ReactNode } from "react";
import styles from "styles/components/Table.module.scss";

type Props = { children: ReactNode };

const Table = (props: Props) => {
  return <table className={styles.table}>{props.children}</table>;
};

type CellProps = { children: ReactNode; header?: boolean };
const Cell = (props: CellProps) => {
  if (props.header) {
    return <th className={styles.th}>{props.children}</th>;
  }
  return <td className={styles.td}>{props.children}</td>;
};

type RowProps = { children: ReactNode };
const Row = (props: RowProps) => {
  return <tr className={styles.tr}>{props.children}</tr>;
};

type HeadProps = { children: ReactNode };
const Head = (props: HeadProps) => {
  return <thead className={styles.thead}>{props.children}</thead>;
};
type BodyProps = { children: ReactNode };
const Body = (props: BodyProps) => {
  return <tbody className={styles.tbody}>{props.children}</tbody>;
};
type FootProps = { children: ReactNode };
const Foot = (props: FootProps) => {
  return <tfoot className={styles.tfoot}>{props.children}</tfoot>;
};

Table.Cell = Cell;
Table.Row = Row;
Table.Head = Head;
Table.Body = Body;
Table.Foot = Foot;

export default Table;
