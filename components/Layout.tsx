import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "styles/components/Layout.module.scss";

type Props = { children: ReactNode };

const Layout = (props: Props) => {
  return (
    <>
      <div className={styles.banner} role="alert">
        ⚠️ The only official domain for Ferdium is {" "}
        <a href="https://ferdium.org" target="_blank" rel="noopener noreferrer">
          https://ferdium.org
        </a>.
        Any other site impersonating Ferdium is fraudulent and may host or distribute malware.
      </div>
      <Header />
      <main id={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
