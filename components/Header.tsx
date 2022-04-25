import React from "react";
import styles from "styles/components/Header.module.scss";
import Button from "./Button";
import Link from "./Link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header id={styles.header}>
      <nav id={styles.nav}>
        <Link href='/'>
          <div id={styles.logo}>Logo</div>
        </Link>
        <Link href='/Download'>
          <Button cta size='large'>
            Get
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
