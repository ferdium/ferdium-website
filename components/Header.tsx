import React from "react";
import styles from "styles/components/Header.module.scss";
import Button from "./Button";
import Link from "./Link";
import logo from "assets/logo.png";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header id={styles.header}>
      <nav id={styles.nav}>
        <Link href='/' aria-label='Home link'>
          <div>
            <Image id={styles.logo} src={logo} alt='' width={46} height={46} />
          </div>
        </Link>

        <Link href='/downloads'>
          <Button cta size='large'>
            Get Ferdium
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
