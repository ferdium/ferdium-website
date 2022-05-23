import React from "react";
import Background from "./Background";
import Section from "./Section";
import logo from "assets/logo.png";
import styles from "styles/components/Hero.module.scss";

import CommunityLinks from "./CommunityLinks";
import NonOptimizedImage from "./NonOptimizedImage";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div id={styles.backgroundWrapper}>
        <Background />
      </div>
      <Section className={styles.hero} wide>
        <div>
          <NonOptimizedImage id={styles.logo} src={logo} alt='' width={256} height={256} />
        </div>
        <h1>Ferdium</h1>
        <h2 id={styles.subtitle}>
          All your services in one place
          <br /> built by the community
        </h2>
        <CommunityLinks services={["discord", "github", "reddit"]} />
      </Section>
    </>
  );
};

export default Hero;
