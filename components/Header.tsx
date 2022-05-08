import React from "react";
import styles from "styles/components/Header.module.scss";
import Button from "./Button";
import Link from "./Link";
import logo from "assets/logo.png";
import NonOptimizedImage from "./NonOptimizedImage";

type Props = {};

const Header = (props: Props) => {
  return (
    <header id={styles.header}>
      <nav id={styles.nav}>
        <Link href='/' aria-label='Home link'>
          <div>
            <NonOptimizedImage id={styles.logo} src={logo} alt='' width={46} height={46} />
          </div>
        </Link>
        <div className={styles.links}>
          <Link href='/faq' neutral>
            FAQ
          </Link>
          <Link href='/download'>
            <Button cta asDiv size='large'>
              Get Ferdium
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
