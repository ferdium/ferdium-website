import { mdiGithub, mdiThemeLightDark, mdiTwitter } from "@mdi/js";
import React, { useEffect } from "react";
import styles from "styles/components/Footer.module.scss";
import Button from "./Button";
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
        <a
          href='https://github.com/ferdium/ferdium-app'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='GitHub link'>
          <Icon size={1} icon={mdiGithub} />
        </a>
        <a
          href='https://twitter.com/ferdiumteam'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Twitter link'>
          <Icon size={1} icon={mdiTwitter} />
        </a>
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
