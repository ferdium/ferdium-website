import React from "react";
import styles from "styles/components/Footer.module.scss";
import Link from "./Link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id={styles.footer}>
      <Link href='/TermsOfService'>Terms of Service</Link> &nbsp;&&nbsp;
      <Link href='/PrivacyPolicy'>Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
