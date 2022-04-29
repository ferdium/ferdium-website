import React, { useEffect, useState } from "react";
import styles from "styles/components/Header.module.scss";
import Button from "./Button";
import Link from "./Link";
import logo from "assets/logo.png";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  function switchTheme(doDarkmode: boolean) {
    if (doDarkmode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  useEffect(() => {
    if (document.documentElement.getAttribute("data-theme"))
      switchTheme(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  return (
    <header id={styles.header}>
      <nav id={styles.nav}>
        <Link href='/'>
          <div>
            <Image id={styles.logo} src={logo} alt='' width={46} height={46} />
          </div>
        </Link>
        <Button
          onClick={() =>
            switchTheme(!(document.documentElement.getAttribute("data-theme") === "dark"))
          }>
          Switch theme
        </Button>
        <Link href='/Download'>
          <Button cta size='large'>
            Get Ferdium
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
