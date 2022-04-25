import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "styles/components/Layout.module.scss";

type Props = { children: ReactNode };

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main id={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
