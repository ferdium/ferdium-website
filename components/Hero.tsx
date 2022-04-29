import Image from "next/image";
import React from "react";
import Background from "./Background";
import Section from "./Section";
import logo from "assets/logo.png";
import styles from "styles/components/Hero.module.scss";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div id={styles.backgroundWrapper}>
        <Background />
      </div>
      <Section className={styles.hero} noBg>
        <div>
          <Image id={styles.logo} src={logo} alt='' width={320} height={320} />
        </div>
        <h1>Ferdium</h1>
        <h2 id={styles.subtitle}>The home for all your services</h2>
      </Section>
    </>
  );
};

export default Hero;
