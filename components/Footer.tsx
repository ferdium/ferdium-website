import { mdiThemeLightDark } from "@mdi/js";
import React, { useEffect } from "react";
import styles from "styles/components/Footer.module.scss";
import Button from "./Button";
import CommunityLinks from "./CommunityLinks";
import Icon from "./Icon";
import Link from "./Link";

type Props = {};

const Footer = (props: Props) => {
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
    <footer id={styles.footer}>
      <div className={styles.links}>
        <CommunityLinks services={["discord", "github", "reddit", "twitter"]} icons />
      </div>
      <div className={styles.legal}>
        <Link href='/terms-of-service'>Terms of Service</Link>
        <div>&nbsp;&&nbsp;</div>
        <Link href='/privacy-policy'>Privacy Policy</Link>
      </div>
      <div className={styles.darkmode}>
        <Button
          onClick={() =>
            switchTheme(!(document.documentElement.getAttribute("data-theme") === "dark"))
          }
          icon
          aria-label='Switch theme'>
          <Icon size={1} icon={mdiThemeLightDark} />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
