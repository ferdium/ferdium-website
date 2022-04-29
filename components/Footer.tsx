import { mdiGithub, mdiThemeLightDark } from "@mdi/js";
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
      <div>
        <a href='https://github.com/ferdium/ferdium-app' target='_blank' rel='noreferrer noopener'>
          <Icon size={1} icon={mdiGithub} />
        </a>
      </div>
      <div>
        <Link href='/TermsOfService'>Terms of Service</Link> &nbsp;&&nbsp;
        <Link href='/PrivacyPolicy'>Privacy Policy</Link>
      </div>
      <div>
        <Button
          onClick={() =>
            switchTheme(!(document.documentElement.getAttribute("data-theme") === "dark"))
          }
          icon>
          <Icon size={1} icon={mdiThemeLightDark} />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
